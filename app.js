// ── Data ──────────────────────────────────────────────────────────────
const USER = {
  name: '제이슨', age: 39, height: 185, weight: 88,
  muscle: 38.6, fat: 20.2, fatPct: 22.9, bmi: 25.7,
  bmr: 1835, targetCal: 1900, whr: 0.84,
  fatTarget: -8.2, fitnessScore: 76,
  bodyWater: 49.5, protein: 13.5, mineral: 4.83,
};

// 주차별 데이터 (0: 3/9~3/15, 1: 3/16~3/22, 2: 3/23~3/29)
const ALL_WEEKS_MEALS = [
  // 3월 2주차
  [
    { day:'월', date: 9, meals: { breakfast: { name: '현미밥 1/2+계란말이', cal: 350 }, lunch: { name: '참치야채비빔밥', cal: 500 }, dinner: { name: '닭가슴살 토마토스튜', cal: 400 }, snack: { name: '방울토마토 10알', cal: 100 }}},
    { day:'화', date: 10, meals: { breakfast: { name: '오트밀 우유+아몬드', cal: 300 }, lunch: { name: '두부구이 백반', cal: 550 }, dinner: { name: '연어샐러드+발사믹', cal: 420 }, snack: { name: '그릭요거트', cal: 150 }}},
    { day:'수', date: 11, meals: { breakfast: { name: '통밀식빵+계란프라이', cal: 380 }, lunch: { name: '소불고기덮밥(소량)', cal: 520 }, dinner: { name: '단호박+닭가슴살', cal: 450 }, snack: { name: '두유 1팩', cal: 120 }}},
    { day:'목', date: 12, meals: { breakfast: { name: '사과 반쪽+삶은계란 2', cal: 280 }, lunch: { name: '새우볶음밥+미역국', cal: 560 }, dinner: { name: '소고기 샤브샤브', cal: 480 }, snack: { name: '다크초콜릿 약간', cal: 100 }}},
    { day:'금', date: 13, meals: { breakfast: { name: '단백질 쉐이크', cal: 250 }, lunch: { name: '알리오올리오 약간', cal: 550 }, dinner: { name: '닭가슴살 랩', cal: 410 }, snack: { name: '블루베리 한 줌', cal: 80 }}},
    { day:'토', date: 14, meals: { breakfast: { name: '오믈렛+통밀크래커', cal: 420 }, lunch: { name: '연어롤+우동 소량', cal: 600 }, dinner: { name: '소고기 안심 스테이크', cal: 520 }, snack: { name: '아메리카노', cal: 10 }}},
    { day:'일', date: 15, meals: { breakfast: { name: '고구마 1+우유', cal: 320 }, lunch: { name: '치킨 브레스트 샌드위치', cal: 480 }, dinner: { name: '그린샐러드+리코타', cal: 350 }, snack: { name: '단백질 바', cal: 180 }}},
  ],
  // 3월 3주차 (현재)
  [
    { day:'월', date: 16, meals: { breakfast: { name: '호밀빵 1쪽+무가당 피넛버터+삶은 달걀', cal: 380 }, lunch: { name: '현미밥+닭가슴살 미역국+나물무침', cal: 520 }, dinner: { name: '구운 틸라피아+아스파라거스 구이', cal: 400 }, snack: { name: '무염 견과류 1줌', cal: 150 }}},
    { day:'화', date: 17, meals: { breakfast: { name: '그릭요거트+오트밀+냉동블루베리', cal: 350 }, lunch: { name: '잡곡밥+돼지고기 뒷다리살 불고기+쌈야채', cal: 580 }, dinner: { name: '두부 버섯 샐러드+오리엔탈 드레싱', cal: 380 }, snack: { name: '방울토마토 15개', cal: 50 }}},
    { day:'수', date: 18, meals: { breakfast: { name: '바나나 1개+단백질 보충제(무지방우유)', cal: 320 }, lunch: { name: '연어 포케 보울(현미밥 베이스)', cal: 550 }, dinner: { name: '닭가슴살 소시지+단호박 구이', cal: 410 }, snack: { name: '구운 계란 2개', cal: 140 }}},
    { day:'목', date: 19, meals: { breakfast: { name: '통밀 랩+스크램블 에그+스리라차 소스', cal: 390 }, lunch: { name: '소고기 무국(건더기 위주)+현미밥+김치', cal: 500 }, dinner: { name: '오징어 숙회+브로콜리 샐러드', cal: 370 }, snack: { name: '저지방 스트링치즈 1개', cal: 60 }}},
    { day:'금', date: 20, meals: { breakfast: { name: '고구마 1개+저지방 우유 한 컵', cal: 330 }, lunch: { name: '참치 비빔밥(현미밥, 고추장 소량)', cal: 540 }, dinner: { name: '돼지고기 목살구이(기름제거)+구운 채소', cal: 480 }, snack: { name: '아메리카노 1잔+아몬드 10알', cal: 70 }}},
    { day:'토', date: 21, meals: { breakfast: { name: '단호박 에그슬럿+방울토마토', cal: 340 }, lunch: { name: '메밀소바+새우튀김 1마리(특식)', cal: 600 }, dinner: { name: '닭가슴살 채소 월남쌈', cal: 420 }, snack: { name: '키위 1개', cal: 60 }}},
    { day:'일', date: 22, meals: { breakfast: { name: '플레인 스콘 1/2+홍차+삶은 달걀', cal: 370 }, lunch: { name: '소고기 샤브샤브(고기와 채소 듬뿍)', cal: 580 }, dinner: { name: '리코타 치즈 샐러드+발사믹 식초', cal: 390 }, snack: { name: '프로틴 바 1개', cal: 180 }}},
  ],
  // 3월 4주차 
  [
    { day:'월', date: 23, meals: { breakfast: { name: '오트밀죽(닭가슴살 베이스)', cal: 360 }, lunch: { name: '현미밥+된장찌개+고등어 반 토막', cal: 530 }, dinner: { name: '스테이크 샐러드(우둔살 150g)', cal: 450 }, snack: { name: '자몽 1/2개', cal: 50 }}},
    { day:'화', date: 24, meals: { breakfast: { name: '사과 1/2+단백질 쉐이크', cal: 280 }, lunch: { name: '닭가슴살 샌드위치(통밀빵)+블랙커피', cal: 500 }, dinner: { name: '두부면 파스타+새우 5마리', cal: 420 }, snack: { name: '브라질너트 2알', cal: 40 }}},
    { day:'수', date: 25, meals: { breakfast: { name: '계란 프라이 2+양배추 샐러드', cal: 320 }, lunch: { name: '나물 비빔밥+달걀프라이', cal: 510 }, dinner: { name: '연어 스테이크 150g+아스파라거스', cal: 460 }, snack: { name: '플레인 요거트', cal: 100 }}},
    { day:'목', date: 26, meals: { breakfast: { name: '바나나 팬케이크(프로틴 파우더 함유)', cal: 390 }, lunch: { name: '닭가슴살 카레+현미밥 소량', cal: 550 }, dinner: { name: '토마토 카프레제 샐러드+삶은 계란', cal: 380 }, snack: { name: '오이 1개+스리라차', cal: 20 }}},
    { day:'금', date: 27, meals: { breakfast: { name: '호밀빵 1조각+리코타 치즈+토마토', cal: 350 }, lunch: { name: '돼지고기 수육(살코기)+보쌈김치 약간', cal: 580 }, dinner: { name: '야채 오믈렛(달걀 3개 분량)', cal: 400 }, snack: { name: '아이스 아메리카노', cal: 10 }}},
    { day:'토', date: 28, meals: { breakfast: { name: '단백질 쉐이크+블루베리', cal: 250 }, lunch: { name: '회덮밥(초장 소량 조절)', cal: 560 }, dinner: { name: '닭가슴살 냉채+겨자 소스', cal: 350 }, snack: { name: '방울토마토 20알', cal: 60 }}},
    { day:'일', date: 29, meals: { breakfast: { name: '통밀 시리얼+무지방 우유', cal: 320 }, lunch: { name: '토마토 해물 파스타(면 70g)', cal: 540 }, dinner: { name: '두부구이+신김치 약간', cal: 390 }, snack: { name: '삶은 계란 1개', cal: 70 }}},
  ]
];

// 초기 기본 제공 운동 기록 (처음 한 번만 세팅)
const DEFAULT_EXERCISE_LOG = [
  { id:1, date:'2026-03-16', type:'운동', title:'가슴/삼두 루틴', duration:60, cal:450 },
  { id:2, date:'2026-03-12', type:'러닝', title:'야간 한강 러닝', duration:45, cal:320, distance:5.2 },
  { id:3, date:'2026-03-10', type:'등산', title:'관악산 등반 (초보 코스)', duration:180, cal:1200 },
];

// 인증 및 API 상태
let EXERCISE_LOG = [];
const API_BASE = 'http://localhost:5000/api';
let AUTH_TOKEN = localStorage.getItem('fitpro_token');
let AUTH_USER = localStorage.getItem('fitpro_user');

function getAuthHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : ''
  };
}

async function loadExercises() {
  if (!AUTH_TOKEN) return; // 미로그인 시 중단
  try {
    const res = await fetch(`${API_BASE}/exercises`, { headers: getAuthHeaders() });
    if (res.ok) {
      EXERCISE_LOG = await res.json();
    } else if (res.status === 401 || res.status === 403) {
      handleLogout(); // 만료시 자동 로그아웃
      return;
    } else {
      console.warn('DB에서 데이터를 가져오지 못해 기본값을 사용합니다.');
      EXERCISE_LOG = [...DEFAULT_EXERCISE_LOG];
    }
  } catch (e) {
    console.error('API 연결 실패:', e);
    EXERCISE_LOG = [...DEFAULT_EXERCISE_LOG];
  }
  
  // 첫 로드 후 렌더링
  if ($('exercise-list')) renderExerciseLog();
}

function handleLogout() {
  AUTH_TOKEN = null;
  AUTH_USER = null;
  localStorage.removeItem('fitpro_token');
  localStorage.removeItem('fitpro_user');
  EXERCISE_LOG = [];
  $('auth-overlay').style.display = 'flex';
}

// ── State ─────────────────────────────────────────────────────────
let nextId = 5; // This is now unused as addExercise uses Date.now() for id
const TODAY = { day: '화', date: 17 }; // 오늘: 3월 17일(화) 기준 표시

// ── Utils ─────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }
function todayDate() {
  const now = new Date('2026-03-17');
  return now.getDate();
}

function animateCounter(id, start, end, suffix, duration = 1000, decimals = 0) {
  const el = $(id);
  if (!el) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const value = easeOutQuart * (end - start) + start;
    el.textContent = value.toFixed(decimals) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end.toFixed(decimals) + suffix;
    }
  };
  window.requestAnimationFrame(step);
}


// ── Navigation ────────────────────────────────────────────────────
function initNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      switchPage(page);
      document.querySelector('.sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay').classList.remove('show');
    });
  });

  // 하단 탭바 (모바일)
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      switchPage(btn.dataset.page);
    });
  });
}

function switchPage(page) {
  // 사이드바 nav
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === page);
  });
  // 하단 탭바
  document.querySelectorAll('.bottom-nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
  // 페이지 전환
  document.querySelectorAll('.page').forEach(p => {
    p.classList.toggle('active', p.id === `page-${page}`);
  });
  // 맨 위로 스크롤
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Dashboard ─────────────────────────────────────────────────────
function renderDashboard() {
  animateCounter('val-weight', 0, USER.weight, 'kg', 1200);
  animateCounter('val-fat-pct', 0, USER.fatPct, '%', 1400, 1);
  animateCounter('val-muscle', 0, USER.muscle, 'kg', 1300, 1);
  animateCounter('val-bmi', 0, USER.bmi, '', 1100, 1);

  setTimeout(() => {
    setProgressBar('bar-fat', (USER.fat / 25) * 100, 'red');
    setProgressBar('bar-muscle', (USER.muscle / 45) * 100, 'purple');
    setProgressBar('bar-water', (USER.bodyWater / 55) * 100, 'blue');
    setProgressBar('bar-protein', (USER.protein / 15) * 100, 'green');
  }, 300);

  renderNutritionCircles();
  renderBodyCompBars();
}

function animateCounter(id, from, to, unit, duration, decimals=0) {
  const el = $(id); if(!el) return;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const pct = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - pct, 3);
    const val = from + (to - from) * eased;
    el.textContent = val.toFixed(decimals) + unit;
    if(pct < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function setProgressBar(id, pct, color) {
  const el = $(id); if(!el) return;
  el.style.width = Math.min(pct, 100) + '%';
  el.className = `progress-fill ${color}`;
}

function renderNutritionCircles() {
  // Carb 55% / Protein 25% / Fat 20% of 1900kcal
  const targets = [
    { id:'circle-carb',    pct: 55, label:'탄수화물', gram:'261g', color:'#6c63ff' },
    { id:'circle-protein', pct: 25, label:'단백질',   gram:'119g', color:'#43e97b' },
    { id:'circle-fat',     pct: 20, label:'지방',     gram:'42g',  color:'#f7971e' },
  ];
  targets.forEach(t => {
    const container = $(t.id);
    if(!container) return;
    const circumference = 2 * Math.PI * 32;
    const offset = circumference * (1 - t.pct / 100);
    container.querySelector('.circle-fill').style.strokeDashoffset = offset;
    container.querySelector('.circle-fill').style.strokeDasharray = circumference;
    container.querySelector('.circle-fill').style.stroke = t.color;
    container.querySelector('.circle-center').textContent = t.pct + '%';
    if (container.parentElement && container.parentElement.querySelector('.nutrition-gram')) {
      container.parentElement.querySelector('.nutrition-gram').textContent = t.gram;
    }
  });
}

function renderBodyCompBars() {
  const items = [
    { bar: 'bar-fat', pct: (USER.fatPct / 30) * 100, label: `체지방률 ${USER.fatPct}%`, color:'red', range:'표준: 10~20%' },
    { bar: 'bar-muscle', pct: (USER.muscle / 45) * 100, label: `골격근량 ${USER.muscle}kg`, color:'purple', range:'표준: 32.4~39.6kg' },
  ];
  items.forEach(i => {
    const el = $(i.bar);
    if(el) { el.style.width = Math.min(i.pct, 100) + '%'; el.className = `progress-fill ${i.color}`; }
  });
}

// ── Meal Plan ─────────────────────────────────────────────────────
function renderMealPlan(weekIndex = 1) {
  const grid = $('meal-grid');
  if(!grid) return;
  const todayDate = 17; // 오늘 3/17
  
  const weekMeals = ALL_WEEKS_MEALS[weekIndex];
  
  grid.innerHTML = weekMeals.map(d => {
    const isToday = d.date === todayDate;
    const total = Object.values(d.meals).reduce((s,m) => s + m.cal, 0);
    const slotKeys = { breakfast:'🌅 아침', lunch:'☀️ 점심', dinner:'🌙 저녁', snack:'🍎 간식' };
    const slotsHtml = Object.entries(d.meals).map(([k, v]) => `
      <div class="meal-slot">
        <div class="meal-slot-label">${slotKeys[k]||k}</div>
        <div class="meal-item">
          <div class="meal-item-name">${v.name}</div>
          <div class="meal-item-cal">${v.cal} kcal</div>
        </div>
      </div>`).join('');
    const calPct = Math.min((total / USER.targetCal) * 100, 100).toFixed(0);
    return `
      <div class="meal-day-card ${isToday?'today':''}">
        <div class="meal-day-header">
          <div class="meal-day-name">${d.day}요일 ${isToday?'<span class="badge-today">TODAY</span>':''}</div>
          <div class="meal-day-date">3/${d.date}</div>
        </div>
        <div class="meal-slots">${slotsHtml}</div>
        <div class="meal-total">
          <span class="meal-total-label">총 칼로리</span>
          <span class="meal-total-cal">${total} kcal</span>
        </div>
      </div>`;
  }).join('');
}

// ── Exercise Log ──────────────────────────────────────────────────
// (기존 디버깅용 로컬 스토리지 저장은 백엔드 DB 저장으로 대체되므로 제외)
function saveExerciseLog() {
  // deprecated: Fetch API 사용함
}

function renderExerciseLog() {
  const list = $('exercise-list');
  if(!list) return;
  const typeLabels = { '러닝':'러닝', '운동':'운동', '사이클':'사이클', '수영':'수영', '등산':'등산', '기타':'기타' };
  
  // 원본 배열이 변형되지 않도록 복사본 정렬
  const sortedLogs = [...EXERCISE_LOG].sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime());
  
  list.innerHTML = sortedLogs.map(ex => `
    <div class="exercise-item" id="ex-${ex.id}">
      <span class="exercise-type-badge badge-${ex.type}">${typeLabels[ex.type]||ex.type}</span>
      <div class="exercise-detail">
        <div class="exercise-name">${ex.title}</div>
        <div class="exercise-meta">
          📅 ${ex.date} &nbsp;⏱️ ${ex.duration}분
          ${ex.distance ? `&nbsp;📍 ${ex.distance}km` : ''}
        </div>
      </div>
      <div class="exercise-calories">${ex.cal} kcal</div>
      <button class="btn btn-danger btn-delete-ex" data-id="${ex.id}" style="padding:6px 12px;font-size:12px">삭제</button>
    </div>`).join('');

  // 삭제 버튼 이벤트 리스너 연결
  list.querySelectorAll('.btn-delete-ex').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      deleteExercise(id);
    });
  });
}

async function addExercise() {
  const inputs = [$('ex-type'), $('ex-name'), $('ex-duration'), $('ex-calories')];
  const todayDateStr = $('ex-date').value;
  const msgEl = $('ex-msg');

  const newEx = {
    id: Date.now(),
    date: todayDateStr,
    type: inputs[0].value.trim(),
    title: inputs[1].value.trim(),
    duration: parseInt(inputs[2].value) || 0,
    cal: parseInt(inputs[3].value) || 0
  };
  
  if(!newEx.type || !newEx.title || !newEx.duration || !newEx.cal) {
    if (msgEl) {
      msgEl.style.display = 'block';
      msgEl.style.color = 'var(--accent-secondary)';
      msgEl.textContent = '❌ 종목명, 시간, 칼로리를 모두 입력해주세요.';
      setTimeout(() => msgEl.style.display = 'none', 3000);
    }
    return;
  }
  
  try {
    const response = await fetch(`${API_BASE}/exercises`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(newEx)
    });
    
    if(response.ok) {
      // 서버에서 저장 성공 후 목록 갱신
      await loadExercises();
      
      // 성공 메시지
      if (msgEl) {
        msgEl.style.display = 'block';
        msgEl.style.color = 'var(--accent-green)';
        msgEl.textContent = '✅ 운동 기록이 데이터베이스에 저장되었습니다.';
        setTimeout(() => msgEl.style.display = 'none', 2000);
      }

      // 입력 폼 초기화
      inputs.forEach((i, idx) => { if (idx > 0) i.value=''; }); // 종류(select)는 유지
    } else {
      throw new Error('Server returned an error');
    }
  } catch(e) {
    console.error('저장 실패:', e);
    alert('서버 저장에 실패했습니다. 백엔드와 DB가 켜져 있는지 확인해주세요.');
  }
}

async function deleteExercise(id) {
  try {
    const res = await fetch(`${API_BASE}/exercises/${id}`, { 
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if(res.ok) {
      await loadExercises(); // 목록 갱신
      
      // 삭제 피드백
      const msgEl = $('ex-msg');
      if (msgEl) {
        msgEl.style.display = 'block';
        msgEl.style.color = 'var(--text-muted)';
        msgEl.textContent = '🗑️ 운동 기록이 DB에서 삭제되었습니다.';
        setTimeout(() => msgEl.style.display = 'none', 2000);
      }
    }
  } catch(e) {
    console.error('삭제 실패:', e);
    alert('운동 기록 삭제 중 서버 에러가 발생했습니다.');
  }
}

// ── Goals ─────────────────────────────────────────────────────────
function renderGoals() {
  // 체지방 목표 진행도
  const fatCurrent = USER.fat;      // 20.2kg
  const fatGoal = USER.fat + USER.fatTarget; // ~12kg
  const fatPct = Math.max(0, Math.min(((fatCurrent - (USER.fat + USER.fatTarget)) / Math.abs(USER.fatTarget)) * 100, 100));
  const el = $('goal-fat-bar');
  if(el) { el.style.width = (100 - fatPct) + '%'; }

  animateCounter('goal-fat-current', 0, fatCurrent, 'kg', 1200, 1);
  animateCounter('goal-fat-target', 0, Math.abs(USER.fatTarget), 'kg', 1200, 1);

  // BMI progress
  const bmiEl = $('goal-bmi-bar');
  if(bmiEl) { bmiEl.style.width = Math.min((USER.bmi / 30) * 100, 100) + '%'; }

  // Fitness score
  const scoreEl = $('fitness-score-bar');
  if(scoreEl) { scoreEl.style.width = USER.fitnessScore + '%'; }
  animateCounter('fitness-score-val', 0, USER.fitnessScore, '점', 1400);
}

// ── Running Records ───────────────────────────────────────────────
function renderRunning() {
  // records already in HTML
}

// ── Running OCR ───────────────────────────────────────────────────
function initOCR() {
  const uploadInput = $('ocr-upload');
  if (!uploadInput) return;

  const ocrStatus = $('ocr-status');
  const ocrMsg = $('ocr-msg');
  const ocrResult = $('ocr-result');
  
  const resType = $('ocr-res-type');
  const resDate = $('ocr-res-date');
  const resDist = $('ocr-res-distance');
  const resDur = $('ocr-res-duration');
  const btnSave = $('btn-ocr-save');

  // 파싱된 임시 저장 데이터
  let parsedData = null;

  uploadInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // UI 상태 초기화
    ocrStatus.style.display = 'block';
    ocrResult.style.display = 'none';
    ocrMsg.style.color = 'var(--accent-blue)';
    ocrMsg.textContent = '이미지 분석 중... 잠시만 기다려주세요 (0%)';
    parsedData = null;

    try {
      const { data: { text } } = await Tesseract.recognize(
        file,
        'kor+eng',
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              ocrMsg.textContent = `이미지 분석 중... 잠시만 기다려주세요 (${Math.round(m.progress * 100)}%)`;
            }
          }
        }
      );

      console.log('--- OCR 추출 결과 ---');
      console.log(text);
      console.log('---------------------');

      // 텍스트 파싱 로직 (정규식)
      // 1. 거리 (예: 5.23 km, 10.0km)
      let distance = 0;
      const distMatch = text.match(/([\d\.]+)\s*(?:km|KM)/i) || text.match(/(?:거리|Distance)[\s:]*([\d\.]+)/i);
      if (distMatch && distMatch[1]) {
        distance = parseFloat(distMatch[1]);
      }

      // 2. 시간 (예: 45:12, 1:05:30)
      let durationStr = "00:00";
      let durationMin = 0;
      const timeMatch = text.match(/(\d{1,2}:\d{2}(?::\d{2})?)/);
      if (timeMatch && timeMatch[1]) {
        durationStr = timeMatch[1];
        const parts = durationStr.split(':');
        if (parts.length === 3) {
          durationMin = parseInt(parts[0])*60 + parseInt(parts[1]);
        } else if (parts.length === 2) {
          durationMin = parseInt(parts[0]);
        }
      }

      // 3. 날짜 (예: 2026.03.17, 3월 17일, 어제)
      // 실제로는 OCR 파싱이 완벽하지 않으므로, 못 찾으면 오늘 날짜로 폴백
      let dateStr = new Date('2026-03-17').toISOString().split('T')[0];
      const dateMatch = text.match(/(20\d{2})[\.\-\/년\s]?(\d{1,2})[\.\-\/월\s]?(\d{1,2})/);
      if (dateMatch) {
         const y = dateMatch[1];
         const m = dateMatch[2].padStart(2, '0');
         const d = dateMatch[3].padStart(2, '0');
         dateStr = `${y}-${m}-${d}`;
      }

      // 칼로리 임의 추정 (러닝거리 * 65kcal)
      let cal = distance ? Math.round(distance * 65) : 350;

      parsedData = {
        id: Date.now(),
        date: dateStr,
        type: '러닝',
        title: '러닝 기록 (OCR 자동입력)',
        distance: distance,
        duration: durationMin || 45, // 기본값 45
        cal: cal
      };

      // 실패 처리
      if (!distance && !durationMin) {
        ocrStatus.style.display = 'block';
        ocrMsg.style.color = 'var(--accent-secondary)';
        ocrMsg.textContent = '❌ 러닝 기록을 명확히 인식하지 못했습니다. 선명한 스크린샷을 사용해주세요.';
        setTimeout(() => { ocrStatus.style.display = 'none'; }, 4000);
        return;
      }

      // 성공 시 UI 업데이트
      ocrStatus.style.display = 'none';
      ocrResult.style.display = 'block';
      
      resType.textContent = parsedData.type;
      resDate.textContent = parsedData.date;
      resDist.textContent = parsedData.distance ? `${parsedData.distance} km` : '알 수 없음';
      resDur.textContent = durationStr + ` (${parsedData.duration}분)`;
      
    } catch (err) {
      console.error(err);
      ocrStatus.style.display = 'block';
      ocrMsg.style.color = 'var(--accent-secondary)';
      ocrMsg.textContent = '❌ 이미지 인식 중 오류가 발생했습니다.';
      setTimeout(() => { ocrStatus.style.display = 'none'; }, 4000);
    }
    
    // input 초기화
    uploadInput.value = '';
  });

  // 즉시 저장 버튼 클릭
  btnSave.addEventListener('click', async () => {
    if (!parsedData) return;
    
    try {
      const resp = await fetch(`${API_BASE}/exercises`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(parsedData)
      });
      
      if(resp.ok) {
        await loadExercises();
        
        // UI 원복 및 토스트나 알림
        ocrResult.style.display = 'none';
        
        ocrStatus.style.display = 'block';
        ocrMsg.style.color = 'var(--accent-green)';
        ocrMsg.textContent = '✅ 운동 기록에 성공적으로 DB에 저장되었습니다!';
        
        setTimeout(() => {
          ocrStatus.style.display = 'none';
          // 운동 탭으로 자동 이동
          switchPage('exercise');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
      }
    } catch(e) {
      console.error(e);
      alert('저장 실패. 서버를 확인해주세요.');
    }
  });
}

// ── Tabs ──────────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-bar').forEach(bar => {
    bar.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        const parent = bar.closest('.card') || bar.parentElement;
        parent.querySelectorAll('.tab-content').forEach(tc => {
          tc.style.display = tc.dataset.tab === target ? 'block' : 'none';
        });
      });
    });
    // init first tab
    const first = bar.querySelector('.tab-btn');
    if(first) first.click();
  });
}

// ── Mobile sidebar ────────────────────────────────────────────────
function initMobile() {
  const menuBtn = $('mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if(menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }
  if(overlay) overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// ── Auth ──────────────────────────────────────────────────────────
function initAuth() {
  const overlay = $('auth-overlay');
  
  // 토큰 여부 확인
  if (AUTH_TOKEN && AUTH_USER) {
    overlay.style.display = 'none';
    const avatar = $('sidebar-avatar');
    const uname = $('sidebar-username');
    if (avatar) avatar.textContent = AUTH_USER.charAt(0).toUpperCase();
    if (uname) uname.textContent = AUTH_USER;
    loadExercises();
  } else {
    overlay.style.display = 'flex';
  }

  // 탭 전환 로직
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const mode = tab.dataset.tab;
      if (mode === 'login') {
        $('auth-login-form').style.display = 'block';
        $('auth-register-form').style.display = 'none';
      } else {
        $('auth-login-form').style.display = 'none';
        $('auth-register-form').style.display = 'block';
      }
    });
  });

  async function handleAuthAPI(url, data, msgElId) {
    const msgEl = $(msgElId);
    msgEl.style.color = 'var(--text-secondary)';
    msgEl.textContent = '⏳ 처리 중...';
    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await resp.json();
      if(!resp.ok) throw new Error(result.error || '접속 실패');
      
      // 토큰 저장
      AUTH_TOKEN = result.token;
      AUTH_USER = result.username;
      localStorage.setItem('fitpro_token', AUTH_TOKEN);
      localStorage.setItem('fitpro_user', AUTH_USER);
      
      msgEl.style.color = 'var(--accent-green)';
      msgEl.textContent = '✅ 성공적으로 로그인되었습니다.';
      
      const avatar = $('sidebar-avatar');
      const uname = $('sidebar-username');
      if (avatar) avatar.textContent = AUTH_USER.charAt(0).toUpperCase();
      if (uname) uname.textContent = AUTH_USER;
      
      setTimeout(() => {
        overlay.style.display = 'none';
        loadExercises(); // 데이터 연동
      }, 500);

    } catch(e) {
      msgEl.style.color = 'var(--accent-secondary)';
      msgEl.textContent = `❌ ${e.message}`;
    }
  }

  // 로그인 버튼
  const btnLogin = $('btn-login');
  if(btnLogin) btnLogin.addEventListener('click', () => {
    const u = $('login-username').value.trim();
    const p = $('login-password').value.trim();
    if(!u || !p) return;
    handleAuthAPI(`${API_BASE}/auth/login`, { username: u, password: p }, 'auth-msg-login');
  });

  // 회원가입 버튼
  const btnReg = $('btn-register');
  if(btnReg) btnReg.addEventListener('click', () => {
    const u = $('register-username').value.trim();
    const p = $('register-password').value.trim();
    if(!u || !p) return;
    handleAuthAPI(`${API_BASE}/auth/register`, { username: u, password: p }, 'auth-msg-register');
  });
  
  // 로그아웃
  const btnLogout = $('btn-logout');
  if(btnLogout) btnLogout.addEventListener('click', () => {
    handleLogout();
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initNav();
  initMobile();
  initTabs();

  // 오늘 날짜 세팅 (2026-03-17 화요일)
  const today = new Date('2026-03-17');
  if($('ex-date')) $('ex-date').value = today.toISOString().split('T')[0];
  if($('gcal-event-date')) $('gcal-event-date').value = today.toISOString().split('T')[0];

  // 데이터 등 초기 렌더링 호출
  switchPage('dashboard');
  renderDashboard();
  renderMealPlan(1); // 기본은 3월 3주차 (인덱스 1)
  // 초기 운동 기록 통계 보충
  if(AUTH_TOKEN) renderExerciseLog(); 
  renderGoals();
  renderRunning();

  // 식단 계획 주차 변경 이벤트
  const weekSelector = $('week-selector');
  if(weekSelector) {
    weekSelector.addEventListener('change', (e) => {
      const idx = parseInt(e.target.value);
      renderMealPlan(idx);
      
      // 제목 업데이트
      const descEl = $('meal-plan-desc');
      if (descEl) {
        const textMaps = ["2026년 3월 2주차", "2026년 3월 3주차", "2026년 3월 4주차"];
        descEl.textContent = `${textMaps[idx]} · 체지방 감량 맞춤 식단 (1,900 kcal/일)`;
      }
    });
  }

  // 운동 추가 버튼
  const addBtn = $('btn-add-exercise');
  if(addBtn) addBtn.addEventListener('click', addExercise);

  // 러닝 OCR 초기화
  initOCR();

  // 구글 캘린더 초기화
  initGoogleCalendar();
});

// ── Google Calendar 연동 ──────────────────────────────────────────
const GCAL = {
  clientId: '',
  tokenClient: null,
  accessToken: null,
  SCOPES: 'https://www.googleapis.com/auth/calendar',
  TODAY: '2026-03-17',
};

function initGoogleCalendar() {
  const initBtn = $('gcal-init-btn');
  const signinBtn = $('gcal-signin-btn');
  const signoutBtn = $('gcal-signout-btn');
  const refreshBtn = $('gcal-refresh-btn');
  const addEventBtn = $('gcal-add-event-btn');

  if(initBtn) initBtn.addEventListener('click', gcalInit);
  if(signinBtn) signinBtn.addEventListener('click', gcalSignIn);
  if(signoutBtn) signoutBtn.addEventListener('click', gcalSignOut);
  if(refreshBtn) refreshBtn.addEventListener('click', gcalLoadEvents);
  if(addEventBtn) addEventBtn.addEventListener('click', gcalAddEvent);

  // 빠른 추가 버튼
  document.querySelectorAll('.gcal-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      gcalAddQuickEvent(btn.dataset.title, btn.dataset.date, btn.dataset.start, btn.dataset.end);
    });
  });

  // 저장된 Client ID 복원
  const saved = localStorage.getItem('gcal_client_id');
  if(saved) {
    const el = $('gcal-client-id');
    if(el) el.value = saved;
  }
}

function gcalInit() {
  const idInput = $('gcal-client-id');
  const clientId = idInput ? idInput.value.trim() : '';
  if(!clientId) {
    showGcalMsg('gcal-add-result', '❌ Client ID를 먼저 입력해주세요.', 'error');
    return;
  }
  GCAL.clientId = clientId;
  localStorage.setItem('gcal_client_id', clientId);

  // google.accounts.oauth2 로드 체크
  if(typeof google === 'undefined' || !google.accounts) {
    showGcalMsg('gcal-add-result', '⏳ Google API 로딩 중... 잠시 후 다시 시도하세요.', 'warn');
    return;
  }

  GCAL.tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GCAL.clientId,
    scope: GCAL.SCOPES,
    callback: (resp) => {
      if(resp.error) { showGcalMsg('gcal-add-result', '❌ 로그인 실패: ' + resp.error, 'error'); return; }
      GCAL.accessToken = resp.access_token;
      gcalOnSignedIn();
    },
  });

  const btn = $('gcal-init-btn');
  if(btn) { btn.textContent = '✅ 초기화 완료 – 로그인 버튼 클릭!'; btn.disabled = true; }
}

function gcalSignIn() {
  if(!GCAL.tokenClient) {
    // Client ID가 저장되어 있으면 자동 초기화
    const saved = localStorage.getItem('gcal_client_id');
    if(saved) { $('gcal-client-id').value = saved; gcalInit(); }
    else { alert('먼저 ⚙️ Google API 설정에서 Client ID를 입력하고 [연결 초기화]를 눌러주세요.'); return; }
  }
  if(GCAL.tokenClient) GCAL.tokenClient.requestAccessToken({ prompt: '' });
}

function gcalSignOut() {
  if(GCAL.accessToken) {
    google.accounts.oauth2.revoke(GCAL.accessToken, () => {});
    GCAL.accessToken = null;
  }
  const loginSec = $('gcal-login-section');
  const mainSec = $('gcal-main-section');
  if(loginSec) loginSec.style.display = '';
  if(mainSec) mainSec.style.display = 'none';
}

function gcalOnSignedIn() {
  // gapi 로드 후 사용자 정보 조회
  gapi.load('client', async () => {
    await gapi.client.init({ apiKey: '', discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'] });
    gapi.client.setToken({ access_token: GCAL.accessToken });

    // 사용자 프로필 (tokeninfo)
    try {
      const info = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo`, {
        headers: { Authorization: `Bearer ${GCAL.accessToken}` }
      }).then(r => r.json());
      const nameEl = $('gcal-user-name');
      const emailEl = $('gcal-user-email');
      const avatarEl = $('gcal-user-avatar');
      if(nameEl) nameEl.textContent = info.name || '사용자';
      if(emailEl) emailEl.textContent = info.email || '';
      if(avatarEl && info.picture) avatarEl.src = info.picture;
    } catch(e) {}

    const loginSec = $('gcal-login-section');
    const mainSec = $('gcal-main-section');
    if(loginSec) loginSec.style.display = 'none';
    if(mainSec) mainSec.style.display = '';

    gcalLoadEvents();
  });
}

async function gcalLoadEvents() {
  const listEl = $('gcal-events-list');
  if(!listEl) return;
  listEl.innerHTML = '<div style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">🔄 불러오는 중...</div>';

  try {
    const date = GCAL.TODAY;
    const start = new Date(date + 'T00:00:00+09:00').toISOString();
    const end   = new Date(date + 'T23:59:59+09:00').toISOString();

    const resp = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: start, timeMax: end,
      singleEvents: true, orderBy: 'startTime',
      maxResults: 20,
    });
    const events = resp.result.items || [];
    if(events.length === 0) {
      listEl.innerHTML = '<div style="color:var(--text-muted);font-size:13px;text-align:center;padding:20px">오늘 등록된 일정이 없습니다.</div>';
      return;
    }
    listEl.innerHTML = events.map(ev => {
      const start = ev.start.dateTime ? ev.start.dateTime.slice(11,16) : '종일';
      const end   = ev.end.dateTime   ? ev.end.dateTime.slice(11,16)   : '';
      const time  = start + (end ? ` – ${end}` : '');
      const color = ev.colorId ? `hsl(${ev.colorId * 30},60%,55%)` : 'var(--accent-primary)';
      return `<div style="display:flex;align-items:flex-start;gap:12px;padding:10px 12px;background:rgba(255,255,255,0.04);border-radius:10px;border-left:3px solid ${color}">
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px">${ev.summary || '(제목 없음)'}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${time}${ev.location ? ' · ' + ev.location : ''}</div>
        </div>
      </div>`;
    }).join('');
  } catch(e) {
    listEl.innerHTML = `<div style="color:var(--accent-secondary);font-size:13px;text-align:center;padding:20px">❌ 일정 불러오기 실패: ${e.message || e}</div>`;
  }
}

async function gcalAddEvent() {
  const title = ($('gcal-event-title') || {}).value?.trim();
  const date  = ($('gcal-event-date')  || {}).value;
  const start = ($('gcal-event-start') || {}).value;
  const end   = ($('gcal-event-end')   || {}).value;
  if(!title || !date || !start || !end) {
    showGcalMsg('gcal-add-result', '❌ 모든 항목을 입력해주세요.', 'error');
    return;
  }
  await gcalCreateEvent(title, date, start, end, 'gcal-add-result');
}

async function gcalAddQuickEvent(title, date, start, end) {
  await gcalCreateEvent(title, date, start, end, 'gcal-quick-result');
}

async function gcalCreateEvent(title, date, start, end, resultFieldId) {
  if(!GCAL.accessToken) {
    showGcalMsg(resultFieldId, '❌ 먼저 로그인해주세요.', 'error'); return;
  }
  showGcalMsg(resultFieldId, '⏳ 추가 중...', 'warn');
  try {
    const event = {
      summary: `[FitPro] ${title}`,
      description: 'FitPro 피트니스 관리 앱에서 추가된 운동 일정',
      start: { dateTime: `${date}T${start}:00+09:00`, timeZone: 'Asia/Seoul' },
      end:   { dateTime: `${date}T${end}:00+09:00`,   timeZone: 'Asia/Seoul' },
      colorId: '2', // Sage green
    };
    const resp = await gapi.client.calendar.events.insert({ calendarId: 'primary', resource: event });
    const link = resp.result.htmlLink;
    showGcalMsg(resultFieldId, `✅ "${title}" 추가 완료! <a href="${link}" target="_blank" style="color:var(--accent-primary)">캘린더에서 보기</a>`, 'success');
    gcalLoadEvents();
  } catch(e) {
    showGcalMsg(resultFieldId, `❌ 추가 실패: ${e.result?.error?.message || e.message}`, 'error');
  }
}

function showGcalMsg(fieldId, msg, type) {
  const el = $(fieldId);
  if(!el) return;
  const colors = { success: 'var(--accent-green)', error: 'var(--accent-secondary)', warn: 'var(--accent-orange)' };
  el.style.display = '';
  el.style.color = colors[type] || 'inherit';
  el.innerHTML = msg;
}
