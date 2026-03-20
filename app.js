let USER = {
  name: '사용자', age: 30, height: 175, weight: 70,
  muscle: 30, fat: 14, fatPct: 20, bmi: 22.8,
  bmr: 1600, targetCal: 2000, whr: 0.85,
  fatTarget: -5.0, fitnessScore: 70,
  bodyWater: 40, protein: 12, mineral: 4,
};

// 주차별 데이터 (0: 3/9~3/15, 1: 3/16~3/22, 2: 3/23~3/29)
const ALL_WEEKS_MEALS = [
  // 3월 2주차
  [
    { day: '월', date: 9, meals: { breakfast: { name: '현미밥 1/2+계란말이', cal: 350 }, lunch: { name: '참치야채비빔밥', cal: 500 }, dinner: { name: '닭가슴살 토마토스튜', cal: 400 }, snack: { name: '방울토마토 10알', cal: 100 } } },
    { day: '화', date: 10, meals: { breakfast: { name: '오트밀 우유+아몬드', cal: 300 }, lunch: { name: '두부구이 백반', cal: 550 }, dinner: { name: '연어샐러드+발사믹', cal: 420 }, snack: { name: '그릭요거트', cal: 150 } } },
    { day: '수', date: 11, meals: { breakfast: { name: '통밀식빵+계란프라이', cal: 380 }, lunch: { name: '소불고기덮밥(소량)', cal: 520 }, dinner: { name: '단호박+닭가슴살', cal: 450 }, snack: { name: '두유 1팩', cal: 120 } } },
    { day: '목', date: 12, meals: { breakfast: { name: '사과 반쪽+삶은계란 2', cal: 280 }, lunch: { name: '새우볶음밥+미역국', cal: 560 }, dinner: { name: '소고기 샤브샤브', cal: 480 }, snack: { name: '다크초콜릿 약간', cal: 100 } } },
    { day: '금', date: 13, meals: { breakfast: { name: '단백질 쉐이크', cal: 250 }, lunch: { name: '알리오올리오 약간', cal: 550 }, dinner: { name: '닭가슴살 랩', cal: 410 }, snack: { name: '블루베리 한 줌', cal: 80 } } },
    { day: '토', date: 14, meals: { breakfast: { name: '오믈렛+통밀크래커', cal: 420 }, lunch: { name: '연어롤+우동 소량', cal: 600 }, dinner: { name: '소고기 안심 스테이크', cal: 520 }, snack: { name: '아메리카노', cal: 10 } } },
    { day: '일', date: 15, meals: { breakfast: { name: '고구마 1+우유', cal: 320 }, lunch: { name: '치킨 브레스트 샌드위치', cal: 480 }, dinner: { name: '그린샐러드+리코타', cal: 350 }, snack: { name: '단백질 바', cal: 180 } } },
  ],
  // 3월 3주차 (현재 3/18 수요일 포함)
  [
    { day: '월', date: 16, meals: { breakfast: { name: '호밀빵 1쪽+무가당 피넛버터+삶은 달걀', cal: 380 }, lunch: { name: '현미밥+닭가슴살 미역국+나물무침', cal: 520 }, dinner: { name: '구운 틸라피아+아스파라거스 구이', cal: 400 }, snack: { name: '무염 견과류 1줌', cal: 150 } } },
    { day: '화', date: 17, meals: { breakfast: { name: '그릭요거트+오트밀+냉동블루베리', cal: 350 }, lunch: { name: '잡곡밥+돼지고기 뒷다리살 불고기+쌈야채', cal: 580 }, dinner: { name: '두부 버섯 샐러드+오리엔탈 드레싱', cal: 380 }, snack: { name: '방울토마토 15개', cal: 50 } } },
    { day: '수', date: 18, meals: { breakfast: { name: '바나나 1개+단백질 보충제(무지방우유)', cal: 320 }, lunch: { name: '연어 포케 보울(현미밥 베이스)', cal: 550 }, dinner: { name: '닭가슴살 소시지+단호박 구이', cal: 410 }, snack: { name: '구운 계란 2개', cal: 140 } } },
    { day: '목', date: 19, meals: { breakfast: { name: '통밀 랩+스크램블 에그+스리라차 소스', cal: 390 }, lunch: { name: '소고기 무국(건더기 위주)+현미밥+김치', cal: 500 }, dinner: { name: '오징어 숙회+브로콜리 샐러드', cal: 370 }, snack: { name: '저지방 스트링치즈 1개', cal: 60 } } },
    { day: '금', date: 20, meals: { breakfast: { name: '고구마 1개+저지방 우유 한 컵', cal: 330 }, lunch: { name: '참치 비빔밥(현미밥, 고추장 소량)', cal: 540 }, dinner: { name: '돼지고기 목살구이(기름제거)+구운 채소', cal: 480 }, snack: { name: '아메리카노 1잔+아몬드 10알', cal: 70 } } },
    { day: '토', date: 21, meals: { breakfast: { name: '단호박 에그슬럿+방울토마토', cal: 340 }, lunch: { name: '메밀소바+새우튀김 1마리(특식)', cal: 600 }, dinner: { name: '닭가슴살 채소 월남쌈', cal: 420 }, snack: { name: '키위 1개', cal: 60 } } },
    { day: '일', date: 22, meals: { breakfast: { name: '플레인 스콘 1/2+홍차+삶은 달걀', cal: 370 }, lunch: { name: '소고기 샤브샤브(고기와 채소 듬뿍)', cal: 580 }, dinner: { name: '리코타 치즈 샐러드+발사믹 식초', cal: 390 }, snack: { name: '프로틴 바 1개', cal: 180 } } },
  ],
  // 3월 4주차 
  [
    { day: '월', date: 23, meals: { breakfast: { name: '오트밀죽(닭가슴살 베이스)', cal: 360 }, lunch: { name: '현미밥+된장찌개+고등어 반 토막', cal: 530 }, dinner: { name: '스테이크 샐러드(우둔살 150g)', cal: 450 }, snack: { name: '자몽 1/2개', cal: 50 } } },
    { day: '화', date: 24, meals: { breakfast: { name: '사과 1/2+단백질 쉐이크', cal: 280 }, lunch: { name: '닭가슴살 샌드위치(통밀빵)+블랙커피', cal: 500 }, dinner: { name: '두부면 파스타+새우 5마리', cal: 420 }, snack: { name: '브라질너트 2알', cal: 40 } } },
    { day: '수', date: 25, meals: { breakfast: { name: '계란 프라이 2+양배추 샐러드', cal: 320 }, lunch: { name: '나물 비빔밥+달걀프라이', cal: 510 }, dinner: { name: '연어 스테이크 150g+아스파라거스', cal: 460 }, snack: { name: '플레인 요거트', cal: 100 } } },
    { day: '목', date: 26, meals: { breakfast: { name: '바나나 팬케이크(프로틴 파우더 함유)', cal: 390 }, lunch: { name: '닭가슴살 카레+현미밥 소량', cal: 550 }, dinner: { name: '토마토 카프레제 샐러드+삶은 계란', cal: 380 }, snack: { name: '오이 1개+스리라차', cal: 20 } } },
    { day: '금', date: 27, meals: { breakfast: { name: '호밀빵 1조각+리코타 치즈+토마토', cal: 350 }, lunch: { name: '돼지고기 수육(살코기)+보쌈김치 약간', cal: 580 }, dinner: { name: '야채 오믈렛(달걀 3개 분량)', cal: 400 }, snack: { name: '아이스 아메리카노', cal: 10 } } },
    { day: '토', date: 28, meals: { breakfast: { name: '단백질 쉐이크+블루베리', cal: 250 }, lunch: { name: '회덮밥(초장 소량 조절)', cal: 560 }, dinner: { name: '닭가슴살 냉채+겨자 소스', cal: 350 }, snack: { name: '방울토마토 20알', cal: 60 } } },
    { day: '일', date: 29, meals: { breakfast: { name: '통밀 시리얼+무지방 우유', cal: 320 }, lunch: { name: '토마토 해물 파스타(면 70g)', cal: 540 }, dinner: { name: '두부구이+신김치 약간', cal: 390 }, snack: { name: '삶은 계란 1개', cal: 70 } } },
  ]
];

// 초기 기본 제공 운동 기록 (처음 한 번만 세팅)
const DEFAULT_EXERCISE_LOG = [
  { id: 1, date: '2026-03-16', type: '운동', title: '가슴/삼두 루틴', duration: 60, cal: 450 },
  { id: 2, date: '2026-03-12', type: '러닝', title: '야간 한강 러닝', duration: 45, cal: 320, distance: 5.2 },
  { id: 3, date: '2026-03-10', type: '등산', title: '관악산 등반 (초보 코스)', duration: 180, cal: 1200 },
];

// 인증 및 API 상태
let EXERCISE_LOG = [];

// [추가] URL 파라미터로 API 주소를 설정할 수 있게 함 (모바일 편의성)
const urlParams = new URLSearchParams(window.location.search);
const setApi = urlParams.get('set_api');
if (setApi) {
  localStorage.setItem('fitpro_api_url', setApi);
  // 파라미터 제거 후 깔끔한 URL로 이동
  window.history.replaceState({}, document.title, window.location.pathname);
}

// [개선] 현재 접속한 서버의 /api 경로를 기본으로 사용함 (프록시 활용)
const API_BASE = localStorage.getItem('fitpro_api_url') || `${window.location.origin}/api`;
console.log('📡 연결된 API 서버 주소:', API_BASE);
let AUTH_TOKEN = localStorage.getItem('fitpro_token');
let AUTH_USER = localStorage.getItem('fitpro_user') || 'Guest';

// [우회 로직] 토큰이 없더라도 로컬스토리지에 우회용 더미 값을 넣어 진입 가능하게 함
if (localStorage.getItem('fitpro_bypass') === 'true' && !AUTH_TOKEN) {
  AUTH_TOKEN = 'bypass_token';
  AUTH_USER = 'Guest';
}

function getAuthHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : '',
    'Bypass-Tunnel-Reminder': 'true'
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
  MEAL_LOG = [];

  const avatar = $('sidebar-avatar');
  const uname = $('sidebar-username');
  if (avatar) avatar.textContent = 'U';
  if (uname) uname.textContent = 'Guest';

  const mUname = $('mobile-username-display');
  if (mUname) mUname.textContent = 'Guest';

  $('auth-overlay').classList.remove('hidden');
  if ($('auth-overlay')) $('auth-overlay').remove();
}

// ── State ─────────────────────────────────────────────────────────
let nextId = 5; 

// [미션 1순위] 전역 날짜 동기화 시스템
// 실제 시스템 시각을 반영 (2026-03-20 기준)
const APP_NOW = new Date(); 

function formatKoreanFullDate(date) {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const day = days[date.getDay()];
  return `${y}년 ${m}월 ${d}일 ${day}요일`;
}

const TODAY = {
  date: APP_NOW.getDate(),
  day: ['일', '월', '화', '수', '목', '금', '토'][APP_NOW.getDay()],
  iso: APP_NOW.toISOString().split('T')[0],
  full: formatKoreanFullDate(APP_NOW)
};

function updateTodayLabels() {
  if($('dashboard-date-text')) $('dashboard-date-text').textContent = TODAY.full;
  if($('running-highlight-date')) $('running-highlight-date').textContent = `${TODAY.full.split('일')[0]}일 · 21.1km`;
  if($('actual-calorie-label')) $('actual-calorie-label').textContent = `오늘(${TODAY.day} ${APP_NOW.getMonth()+1}/${TODAY.date})`;
  if($('gcal-today-title')) $('gcal-today-title').textContent = `📅 ${TODAY.full} 일정`;
  if($('inbody-date')) $('inbody-date').textContent = TODAY.iso;
  
  // 입력 폼 기본값들
  if($('ex-date')) $('ex-date').value = TODAY.iso;
  if($('gcal-event-date')) $('gcal-event-date').value = TODAY.iso;
}

// ── Utils ─────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }
function todayDate() {
  return APP_NOW.getDate();
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
    el.textContent = (value >= 0 ? '' : '') + value.toFixed(decimals) + suffix;
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
  // 페이지별 초기화 로직
  if (page === 'profile') loadProfile();

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

function animateCounter(id, from, to, unit, duration, decimals = 0) {
  const el = $(id); if (!el) return;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const pct = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - pct, 3);
    const val = from + (to - from) * eased;
    el.textContent = val.toFixed(decimals) + unit;
    if (pct < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function setProgressBar(id, pct, color) {
  const el = $(id); if (!el) return;
  el.style.width = Math.min(pct, 100) + '%';
  el.className = `progress-fill ${color}`;
}

function renderNutritionCircles() {
  // Carb 55% / Protein 25% / Fat 20% of 1900kcal
  const targets = [
    { id: 'circle-carb', pct: 55, label: '탄수화물', gram: '261g', color: '#6c63ff' },
    { id: 'circle-protein', pct: 25, label: '단백질', gram: '119g', color: '#43e97b' },
    { id: 'circle-fat', pct: 20, label: '지방', gram: '42g', color: '#f7971e' },
  ];
  targets.forEach(t => {
    const container = $(t.id);
    if (!container) return;
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
    { bar: 'bar-fat', pct: (USER.fatPct / 30) * 100, label: `체지방률 ${USER.fatPct}%`, color: 'red', range: '표준: 10~20%' },
    { bar: 'bar-muscle', pct: (USER.muscle / 45) * 100, label: `골격근량 ${USER.muscle}kg`, color: 'purple', range: '표준: 32.4~39.6kg' },
  ];
  items.forEach(i => {
    const el = $(i.bar);
    if (el) { el.style.width = Math.min(i.pct, 100) + '%'; el.className = `progress-fill ${i.color}`; }
  });
}

// ── Meal Plan ─────────────────────────────────────────────────────
function renderMealPlan(weekIndex = 1) {
  const grid = $('meal-grid');
  if (!grid) return;
  const todayDate = TODAY.date; // 전역 TODAY 객체 기준 연동

  const weekMeals = ALL_WEEKS_MEALS[weekIndex];

  grid.innerHTML = weekMeals.map(d => {
    const isToday = Number(d.date) === Number(todayDate);
    const total = Object.values(d.meals).reduce((s, m) => s + m.cal, 0);
    const slotKeys = { breakfast: '🌅 아침', lunch: '☀️ 점심', dinner: '🌙 저녁', snack: '🍎 간식' };
    const slotsHtml = Object.entries(d.meals).map(([k, v]) => `
      <div class="meal-slot">
        <div class="meal-slot-label">${slotKeys[k] || k}</div>
        <div class="meal-item">
          <div class="meal-item-name">${v.name}</div>
          <div class="meal-item-cal">${v.cal} kcal</div>
        </div>
      </div>`).join('');
    const calPct = Math.min((total / USER.targetCal) * 100, 100).toFixed(0);
    return `
      <div class="meal-day-card ${isToday ? 'today' : ''}">
        <div class="meal-day-header">
          <div class="meal-day-name">${d.day}요일 ${isToday ? '<span class="badge-today">TODAY</span>' : ''}</div>
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
  if (!list) return;
  const typeLabels = { '러닝': '러닝', '운동': '운동', '사이클': '사이클', '수영': '수영', '등산': '등산', '기타': '기타' };

  // 원본 배열이 변형되지 않도록 복사본 정렬
  const sortedLogs = [...EXERCISE_LOG].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  list.innerHTML = sortedLogs.map(ex => `
    <div class="exercise-item" id="ex-${ex.id}">
      <span class="exercise-type-badge badge-${ex.type}">${typeLabels[ex.type] || ex.type}</span>
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

  if (!newEx.type || !newEx.title || !newEx.duration || !newEx.cal) {
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

    if (response.ok) {
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
      inputs.forEach((i, idx) => { if (idx > 0) i.value = ''; }); // 종류(select)는 유지
    } else {
      throw new Error('Server returned an error');
    }
  } catch (e) {
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
    if (res.ok) {
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
  } catch (e) {
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
  if (el) { el.style.width = (100 - fatPct) + '%'; }

  animateCounter('goal-fat-current', 0, fatCurrent, 'kg', 1200, 1);
  animateCounter('goal-fat-target', 0, USER.fatTarget, 'kg', 1200, 1);

  // BMI progress
  const bmiEl = $('goal-bmi-bar');
  if (bmiEl) { bmiEl.style.width = Math.min((USER.bmi / 30) * 100, 100) + '%'; }

  // Fitness score
  const scoreEl = $('fitness-score-bar');
  if (scoreEl) { scoreEl.style.width = USER.fitnessScore + '%'; }
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
          durationMin = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        } else if (parts.length === 2) {
          durationMin = parseInt(parts[0]);
        }
      }

      // 3. 날짜 (예: 2026.03.17, 3월 17일, 어제)
      // 실제로는 OCR 파싱이 완벽하지 않으므로, 못 찾으면 오늘 날짜로 폴백
      let dateStr = TODAY.iso;
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

      if (resp.ok) {
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
    } catch (e) {
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
    if (first) first.click();
  });
}

// ── Mobile sidebar ────────────────────────────────────────────────
function initMobile() {
  const menuBtn = $('mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }
  if (overlay) overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// ── Profile Management ────────────────────────────────────────────
async function loadProfile() {
  if (!AUTH_TOKEN) return;
  try {
    const res = await fetch(`${API_BASE}/user/profile`, { headers: getAuthHeaders() });
    if (res.ok) {
      const data = await res.json();

      // 전역 USER 객체 업데이트 (대시보드 반영용)
      USER.name = data.username;
      USER.age = data.age;
      USER.height = data.height;
      USER.weight = data.weight;
      USER.muscle = data.muscle;
      USER.fatPct = data.fat_pct;
      USER.bmr = data.bmr;
      USER.targetCal = data.target_cal;
      USER.fatTarget = data.fat_target;

      // 파생 데이터 계산 (간단화)
      USER.fat = (USER.weight * USER.fatPct / 100);
      USER.bmi = (USER.weight / ((USER.height / 100) * (USER.height / 100)));
      USER.bodyWater = USER.weight * 0.6;
      USER.protein = USER.weight * 0.15;

      // 프로필 설정 화면 UI 업데이트
      if ($('prof-username')) {
        $('prof-username').value = data.username;
        $('prof-age').value = data.age;
        $('prof-height').value = data.height;
        $('prof-weight').value = data.weight;
        $('prof-muscle').value = data.muscle;
        $('prof-fat-pct').value = data.fat_pct;
        $('prof-bmr').value = data.bmr;
        $('prof-target-cal').value = data.target_cal;
        $('prof-fat-target').value = data.fat_target;
      }

      // 대시보드 및 지표 갱신
      renderDashboard();
      renderGoals();
    }
  } catch (e) {
    console.error('프로필 로드 실패:', e);
  }
}

async function saveProfile() {
  const password = $('prof-password').value;
  const confirm = $('prof-password-confirm').value;
  const msgEl = $('prof-msg');

  if (password && password !== confirm) {
    msgEl.style.display = 'block';
    msgEl.style.color = 'var(--accent-secondary)';
    msgEl.textContent = '❌ 비밀번호 확인이 일치하지 않습니다.';
    return;
  }

  const profileData = {
    password: password,
    age: parseInt($('prof-age').value) || USER.age,
    height: parseFloat($('prof-height').value) || USER.height,
    weight: parseFloat($('prof-weight').value) || USER.weight,
    muscle: parseFloat($('prof-muscle').value) || USER.muscle,
    fat_pct: parseFloat($('prof-fat-pct').value) || USER.fatPct,
    bmr: parseInt($('prof-bmr').value) || USER.bmr,
    target_cal: parseInt($('prof-target-cal').value) || USER.targetCal,
    fat_target: parseFloat($('prof-fat-target').value) || USER.fatTarget
  };

  try {
    const res = await fetch(`${API_BASE}/user/profile`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(profileData)
    });

    if (res.ok) {
      msgEl.style.display = 'block';
      msgEl.style.color = 'var(--accent-green)';
      msgEl.textContent = '✅ 프로필 정보가 데이터베이스에 성공적으로 업데이트되었습니다.';

      // 비밀번호 필드 초기화
      $('prof-password').value = '';
      $('prof-password-confirm').value = '';

      // 최신 정보 다시 로드
      await loadProfile();

      setTimeout(() => msgEl.style.display = 'none', 3000);
    } else {
      const errData = await res.json();
      throw new Error(errData.error || 'Update failed');
    }
  } catch (e) {
    console.error('프로필 저장 실패:', e);
    msgEl.style.display = 'block';
    msgEl.style.color = 'var(--accent-secondary)';
    msgEl.textContent = `❌ 저장 실패: ${e.message}`;
  }
}

// ── Meals Tracker ─────────────────────────────────────────────────
let MEAL_LOG = [];

async function loadMeals() {
  if (!AUTH_TOKEN) return;
  try {
    const res = await fetch(`${API_BASE}/meals`, { headers: getAuthHeaders() });
    if (res.ok) {
      MEAL_LOG = await res.json();
    }
  } catch (e) {
    console.error('식단 API 연결 실패:', e);
  }
  renderActualMeals();
}

function renderActualMeals() {
  const listEl = $('actual-meals-list');
  const calText = $('actual-cal-text');
  const calBar = $('actual-cal-bar');
  if (!listEl || !calText || !calBar) return;

  // 오늘 날짜 데이터 필터링 (2026-03-18)
  const todayStr = '2026-03-18';
  const todaysMeals = MEAL_LOG.filter(m => {
    // DB에서 넘어오는 date format 처리 (T 등 제거)
    return m.date.startsWith(todayStr);
  });

  let totalCal = 0;
  listEl.innerHTML = '';

  if (todaysMeals.length === 0) {
    listEl.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:10px; font-size:12px;">오늘 기록된 실제 섭취 식단이 없습니다.</div>';
  } else {
    todaysMeals.forEach(meal => {
      totalCal += meal.cal;
      const tBtn = document.createElement('div');
      tBtn.className = 'meal-record-item';

      let typeColor = (meal.type === '아침') ? 'blue' : (meal.type === '점심') ? 'green' : (meal.type === '저녁') ? 'purple' : 'orange';

      tBtn.innerHTML = `
        <div class="meal-record-info" style="display:flex; align-items:center;">
          <span class="meal-record-type" style="background:var(--bg-secondary); color:var(--accent-${typeColor}); border: 1px solid var(--border)">${meal.type}</span>
          <span class="meal-record-name">${meal.name}</span>
        </div>
        <div class="meal-record-cal">${meal.cal} <span style="font-size:11px; font-weight:400; color:var(--text-muted)">kcal</span></div>
        <button class="meal-record-del" data-id="${meal.id}">×</button>
      `;
      listEl.appendChild(tBtn);
    });
  }

  // 총합 및 게이지 업데이트
  calText.textContent = totalCal.toLocaleString();
  const pct = Math.min((totalCal / 1900) * 100, 100);
  calBar.style.width = pct + '%';

  // 1900을 넘기면 빨간색으로 변경
  if (totalCal > 1900) {
    calBar.className = 'progress-fill red';
    calText.style.color = 'var(--accent-secondary)';
  } else {
    calBar.className = 'progress-fill blue';
    calText.style.color = 'var(--text-primary)';
  }

  // 삭제 이벤트 바인딩
  document.querySelectorAll('.meal-record-del').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (confirm('이 기록을 삭제하시겠습니까?')) {
        await deleteMeal(id);
      }
    });
  });
}

async function addMeal(type, name, cal) {
  const newMeal = {
    id: Date.now(),
    date: TODAY.iso,
    type: type,
    name: name,
    cal: parseInt(cal) || 0
  };

  try {
    const res = await fetch(`${API_BASE}/meals`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(newMeal)
    });
    if (res.ok) await loadMeals();
  } catch (e) {
    console.error('식단 저장 실패:', e);
  }
}

async function deleteMeal(id) {
  try {
    const res = await fetch(`${API_BASE}/meals/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (res.ok) await loadMeals();
  } catch (e) {
    console.error('식단 삭제 실패:', e);
  }
}

function initMealModal() {
  const modal = $('meal-modal');
  const addBtn = $('meal-add-btn');
  const closeBtn = $('meal-modal-close');
  const saveBtn = $('btn-save-meal');
  const typeBtns = document.querySelectorAll('#meal-type-selector .type-btn');

  if (!modal || !addBtn) return;

  addBtn.addEventListener('click', () => {
    $('meal-name').value = '';
    $('meal-cal').value = '';
    $('meal-modal-msg').textContent = '';
    modal.classList.add('show');
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  });

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  saveBtn.addEventListener('click', async () => {
    const activeType = document.querySelector('#meal-type-selector .type-btn.active').dataset.type;
    const name = $('meal-name').value.trim();
    const cal = $('meal-cal').value.trim();
    const msg = $('meal-modal-msg');

    if (!name || !cal) {
      msg.style.color = 'var(--accent-secondary)';
      msg.textContent = '❌ 메뉴명과 칼로리를 모두 입력해주세요.';
      setTimeout(() => msg.textContent = '', 3000);
      return;
    }

    saveBtn.disabled = true;
    saveBtn.textContent = '저장 중...';
    await addMeal(activeType, name, cal);

    saveBtn.textContent = '기록 저장하기';
    saveBtn.disabled = false;

    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
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
    loadMeals();
    loadProfile();
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
        headers: {
          'Content-Type': 'application/json',
          'Bypass-Tunnel-Reminder': 'true'
        },
        body: JSON.stringify(data)
      });
      const result = await resp.json();
      if (!resp.ok) throw new Error(result.error || '접속 실패');

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

      const mUname = $('mobile-username-display');
      if (mUname) mUname.textContent = AUTH_USER;

      setTimeout(() => {
        if ($('auth-overlay')) $('auth-overlay').remove();
        loadExercises(); // 데이터 연동
        loadMeals();
        loadProfile();
      }, 500);

    } catch (e) {
      msgEl.style.color = 'var(--accent-secondary)';
      msgEl.textContent = `❌ ${e.message}`;
    }
  }

  // 로그인 버튼
  const btnLogin = $('btn-login');
  if (btnLogin) btnLogin.addEventListener('click', () => {
    const u = $('login-username').value.trim();
    const p = $('login-password').value.trim();
    if (!u || !p) return;
    handleAuthAPI(`${API_BASE}/auth/login`, { username: u, password: p }, 'auth-msg-login');
  });

  // 회원가입 버튼
  const btnReg = $('btn-register');
  if (btnReg) btnReg.addEventListener('click', () => {
    const u = $('register-username').value.trim();
    const p = $('register-password').value.trim();
    if (!u || !p) return;
    handleAuthAPI(`${API_BASE}/auth/register`, { username: u, password: p }, 'auth-msg-register');
  });

  // 로그아웃
  const btnLogout = $('btn-logout');
  if (btnLogout) btnLogout.addEventListener('click', () => {
    handleLogout();
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initMealModal();
  initNav();
  initMobile();
  initTabs();

  // [우회 버튼 추가]
  const btnBypass = $('btn-bypass-auth');
  if (btnBypass) {
    btnBypass.addEventListener('click', () => {
      localStorage.setItem('fitpro_bypass', 'true');
      AUTH_TOKEN = 'bypass_token';
      AUTH_USER = 'Guest';
      if ($('auth-overlay')) $('auth-overlay').remove();
      loadExercises();
      loadMeals();
      loadProfile();
      renderDashboard();
    });
  }

  // 오늘 날짜 세팅 및 라벨 갱신 (README 미션 1순위)
  updateTodayLabels();

  // 데이터 등 초기 렌더링 호출
  switchPage('dashboard');
  renderDashboard();
  renderMealPlan(1); // 3/18은 3월 3주차 (인덱스 1)
  // 초기 운동 기록 통계 보충
  if (AUTH_TOKEN) {
    renderExerciseLog();
    loadMeals();
  }
  renderGoals();
  renderRunning();

  // 식단 계획 주차 변경 이벤트
  const weekSelector = $('week-selector');
  if (weekSelector) {
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
  if (addBtn) addBtn.addEventListener('click', addExercise);

  // 프로필 저장 버튼
  const saveProfBtn = $('btn-save-profile');
  if (saveProfBtn) saveProfBtn.addEventListener('click', saveProfile);

  // 러닝 OCR 초기화
  initOCR();
});

