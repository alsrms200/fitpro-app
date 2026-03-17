const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret_fitpro_key';

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Bypass-Tunnel-Reminder');
  
  // OPTIONS 요청(Preflight) 즉시 응답
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

// 미들웨어: JWT 토큰 검증
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: '토큰이 제공되지 않았습니다.' });
  
  const tokenValue = token.split(' ')[1]; // "Bearer TOKEN_STRING"
  jwt.verify(tokenValue, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: '유효하지 않은 토큰입니다.' });
    req.userId = decoded.id;
    next();
  });
};

// --- [ AUTH ROUTES ] ---
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    // 1. 유저 중복 확인
    const [existing] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if(existing.length > 0) return res.status(400).json({ error: '이미 존재하는 사용자명입니다.' });
    
    // 2. 비밀번호 암호화 후 저장
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [result] = await pool.query('INSERT INTO users (username, password_hash) VALUES (?, ?)', [username, hash]);
    
    // 3. JWT 즉시 발급
    const token = jwt.sign({ id: result.insertId, username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '회원가입 실패' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if(rows.length === 0) return res.status(400).json({ error: '사용자를 찾을 수 없습니다.' });
    
    const user = rows[0];
    const isMatch = bcrypt.compareSync(password, user.password_hash);
    if(!isMatch) return res.status(400).json({ error: '비밀번호가 일치하지 않습니다.' });
    
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '로그인 실패' });
  }
});

// --- [ PROFILE ROUTES (Protected) ] ---
// API: 유저 프로필 조회
app.get('/api/user/profile', verifyToken, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT username, age, height, weight, muscle, fat_pct, bmr, target_cal, fat_target FROM users WHERE id = ?', [req.userId]);
    if(rows.length === 0) return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '프로필 조회 실패' });
  }
});

// API: 유저 프로필 업데이트
app.post('/api/user/profile', verifyToken, async (req, res) => {
  try {
    const { password, age, height, weight, muscle, fat_pct, bmr, target_cal, fat_target } = req.body;
    
    // 1. 기본 프로필 정보 업데이트
    let query = 'UPDATE users SET age = ?, height = ?, weight = ?, muscle = ?, fat_pct = ?, bmr = ?, target_cal = ?, fat_target = ? WHERE id = ?';
    let params = [age, height, weight, muscle, fat_pct, bmr, target_cal, fat_target, req.userId];
    
    await pool.query(query, params);

    // 2. 비밀번호도 있다면 암호화해서 업데이트
    if (password && password.trim() !== "") {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      await pool.query('UPDATE users SET password_hash = ? WHERE id = ?', [hash, req.userId]);
    }

    res.json({ message: '프로필이 성공적으로 업데이트되었습니다.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '프로필 업데이트 실패' });
  }
});

// --- [ EXERCISES ROUTES (Protected) ] ---
// API: 현재 로그인된 사용자의 모든 운동 기록 가져오기
app.get('/api/exercises', verifyToken, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM exercises WHERE user_id = ? ORDER BY date DESC, id DESC', [req.userId]);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
});

// API: 새로운 운동 기록 추가하기
app.post('/api/exercises', verifyToken, async (req, res) => {
  try {
    const { id, date, type, title, duration, distance, cal } = req.body;
    
    await pool.query(
      'INSERT INTO exercises (id, user_id, date, type, title, duration, distance, cal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [id, req.userId, date, type, title, duration, distance, cal]
    );

    res.json({ id, user_id: req.userId, date, type, title, duration, distance, cal });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '운동 기록 추가에 실패했습니다.' });
  }
});

// API: 특정 운동 기록 삭제하기
app.delete('/api/exercises/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    // 해당 사용자의 운동기록인지 확인 후 삭제
    await pool.query('DELETE FROM exercises WHERE id = ? AND user_id = ?', [id, req.userId]);
    res.json({ message: '운동 기록이 성공적으로 삭제되었습니다.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '운동 기록 삭제에 실패했습니다.' });
  }
});

// --- [ MEALS ROUTES (Protected) ] ---
// API: 현재 로그인된 사용자의 섭취 식단 기록 가져오기
app.get('/api/meals', verifyToken, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM meals WHERE user_id = ? ORDER BY date DESC, id DESC', [req.userId]);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '식단 정보 로드 에러' });
  }
});

// API: 새로운 식단 기록 추가하기
app.post('/api/meals', verifyToken, async (req, res) => {
  try {
    const { id, date, type, name, cal } = req.body;
    await pool.query(
      'INSERT INTO meals (id, user_id, date, type, name, cal) VALUES (?, ?, ?, ?, ?, ?)',
      [id, req.userId, date, type, name, cal]
    );
    res.json({ id, user_id: req.userId, date, type, name, cal });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '식단 추가 실패' });
  }
});

// API: 식단 기록 삭제하기
app.delete('/api/meals/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM meals WHERE id = ? AND user_id = ?', [id, req.userId]);
    res.json({ message: '식단 기록 삭제 완료' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '식단 삭제 실패' });
  }
});

// 서버 측 헬스체크
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`FitPro Backend Server is running on port ${PORT}`);
});
