const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API: 모든 운동 기록 가져오기
app.get('/api/exercises', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM exercises ORDER BY date DESC, id DESC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
});

// API: 새로운 운동 기록 추가하기
app.post('/api/exercises', async (req, res) => {
  try {
    const { id, date, type, title, duration, distance, cal } = req.body;
    
    await pool.query(
      'INSERT INTO exercises (id, date, type, title, duration, distance, cal) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, date, type, title, duration, distance, cal]
    );

    // 반환 시 방금 추가된 데이터 객체 형태 그대로 송신
    res.json({ id, date, type, title, duration, distance, cal });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '운동 기록 추가에 실패했습니다.' });
  }
});

// API: 특정 운동 기록 삭제하기
app.delete('/api/exercises/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM exercises WHERE id = ?', [id]);
    res.json({ message: '운동 기록이 성공적으로 삭제되었습니다.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: '운동 기록 삭제에 실패했습니다.' });
  }
});

// 서버 측 헬스체크
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`FitPro Backend Server is running on port ${PORT}`);
});
