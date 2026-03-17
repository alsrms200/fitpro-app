// ── Data ──────────────────────────────────────────────────────────────
const USER = {
  name: '제이슨', age: 39, height: 185, weight: 88,
  muscle: 38.6, fat: 20.2, fatPct: 22.9, bmi: 25.7,
  bmr: 1835, targetCal: 1900, whr: 0.84,
  fatTarget: -8.2, fitnessScore: 76,
  bodyWater: 49.5, protein: 13.5, mineral: 4.83,
};

// 3월 17일(화) 포함 주간 (16~22일)
const WEEK_MEALS = [
  { day:'월', date: 16, meals: {
    breakfast: { name: '귀리밥 + 달걀 2개 + 그릭요거트', cal: 420 },
    lunch:     { name: '닭가슴살 샐러드 + 현미밥 + 미역국', cal: 540 },
    dinner:    { name: '연어구이 + 브로콜리 + 고구마', cal: 480 },
    snack:     { name: '바나나 1개 + 아몬드 10알', cal: 180 },
  }},
  { day:'화', date: 17, meals: {
    breakfast: { name: '통밀빵 + 아보카도 + 삶은달걀', cal: 410 },
    lunch:     { name: '소불고기 + 잡곡밥 + 된장국', cal: 560 },
    dinner:    { name: '두부구이 + 채소볶음 + 현미밥', cal: 450 },
    snack:     { name: '사과 1개 + 견과류 믹스', cal: 190 },
  }},
  { day:'수', date: 18, meals: {
    breakfast: { name: '단백질 셰이크 + 오트밀', cal: 430 },
    lunch:     { name: '삼치구이 + 나물 3종 + 현미밥', cal: 520 },
    dinner:    { name: '닭가슴살 스테이크 + 아스파라거스', cal: 470 },
    snack:     { name: '그릭요거트 + 블루베리', cal: 160 },
  }},
  { day:'목', date: 19, meals: {
    breakfast: { name: '현미죽 + 삶은달걀 2개', cal: 380 },
    lunch:     { name: '참치 + 야채 쌈밥 + 미역국', cal: 530 },
    dinner:    { name: '새우 + 채소볶음 + 고구마', cal: 460 },
    snack:     { name: '단백질바 + 오렌지 1개', cal: 200 },
  }},
  { day:'금', date: 20, meals: {
    breakfast: { name: '귀리 + 단백질 파우더 + 과일', cal: 440 },
    lunch:     { name: '돼지고기 등심 + 쌈채소 + 된장국', cal: 550 },
    dinner:    { name: '닭가슴살 샐러드 + 아보카도', cal: 440 },
    snack:     { name: '견과류 + 저지방 우유', cal: 170 },
  }},
  { day:'토', date: 21, meals: {
    breakfast: { name: '달걀 오믈렛 + 통밀토스트', cal: 460 },
    lunch:     { name: '장어구이 + 현미밥 + 시금치무침', cal: 580 },
    dinner:    { name: '두부선 + 나물 + 현미밥', cal: 440 },
    snack:     { name: '단백질 셰이크', cal: 180 },
  }},
  { day:'일', date: 22, meals: {
    breakfast: { name: '아보카도 토스트 + 스크램블에그', cal: 480 },
    lunch:     { name: '소고기 뭇국 + 잡곡밥 + 나물', cal: 560 },
    dinner:    { name: '연어포케 + 퀴노아', cal: 490 },
    snack:     { name: '바나나 + 아몬드 버터', cal: 210 },
  }},
];

const EXERCISE_LOG = [
  { id:1, type:'running', name:'하프마라톤 대회', date:'2026-03-12', duration:116, distance:21.1, calories:1150, note:'전체 289위 / 1:56:43' },
  { id:2, type:'weight', name:'상체 웨이트', date:'2026-03-10', duration:60, distance:null, calories:320, note:'벤치프레스 / 숄더프레스' },
  { id:3, type:'running', name:'조깅', date:'2026-03-08', duration:45, distance:7.5, calories:480, note:'페이스 6:00/km' },
  { id:4, type:'weight', name:'하체 웨이트', date:'2026-03-06', duration:70, distance:null, calories:380, note:'스쿼트 / 레그프레스' },
];

// ── State ─────────────────────────────────────────────────────────
let exerciseLogs = [...EXERCISE_LOG];
let nextId = 5;
const TODAY = { day: '화', date: 17 }; // 오늘: 3월 17일(화) 기준 표시

// ── Utils ─────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }
function todayDate() {
  const now = new Date('2026-03-17');
  return now.getDate();
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
    container.querySelector('.nutrition-gram').textContent = t.gram;
  });
}

function renderBodyCompBars() {
  const items = [
    { bar: 'bar-inbody-fat', pct: (USER.fatPct / 30) * 100, label: `체지방률 ${USER.fatPct}%`, color:'red', range:'표준: 10~20%' },
    { bar: 'bar-inbody-muscle', pct: (USER.muscle / 45) * 100, label: `골격근량 ${USER.muscle}kg`, color:'purple', range:'표준: 32.4~39.6kg' },
  ];
  items.forEach(i => {
    const el = $(i.bar);
    if(el) { el.style.width = Math.min(i.pct, 100) + '%'; el.className = `progress-fill ${i.color}`; }
  });
}

// ── Meal Plan ─────────────────────────────────────────────────────
function renderMealPlan() {
  const grid = $('meal-grid');
  if(!grid) return;
  const todayDate = 17; // 오늘 3/17
  grid.innerHTML = WEEK_MEALS.map(d => {
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
        <div style="padding:0 10px 10px">
          <div class="progress-bar"><div class="progress-fill ${total > USER.targetCal*1.1 ? 'red' : 'green'}" style="width:${calPct}%"></div></div>
        </div>
      </div>`;
  }).join('');
}

// ── Exercise ──────────────────────────────────────────────────────
function renderExerciseLog() {
  const list = $('exercise-list');
  if(!list) return;
  const typeLabels = { running:'러닝', weight:'웨이트', cycling:'사이클', swimming:'수영', other:'기타' };
  list.innerHTML = exerciseLogs.sort((a,b)=>b.id-a.id).map(ex => `
    <div class="exercise-item" id="ex-${ex.id}">
      <span class="exercise-type-badge badge-${ex.type}">${typeLabels[ex.type]||ex.type}</span>
      <div class="exercise-detail">
        <div class="exercise-name">${ex.name}</div>
        <div class="exercise-meta">
          📅 ${ex.date} &nbsp;⏱️ ${ex.duration}분
          ${ex.distance ? `&nbsp;📍 ${ex.distance}km` : ''}
          ${ex.note ? `&nbsp;·&nbsp;<span style="color:var(--accent-primary)">${ex.note}</span>` : ''}
        </div>
      </div>
      <div class="exercise-calories">${ex.calories} kcal</div>
      <button class="btn btn-danger" onclick="deleteExercise(${ex.id})" style="padding:6px 12px;font-size:12px">삭제</button>
    </div>`).join('');
}

function addExercise() {
  const type = $('ex-type').value;
  const name = $('ex-name').value.trim();
  const duration = parseInt($('ex-duration').value);
  const calories = parseInt($('ex-calories').value);
  const distance = parseFloat($('ex-distance').value) || null;
  const date = $('ex-date').value;
  const note = $('ex-note').value.trim();
  if(!name || !duration || !calories || !date) {
    alert('종목명, 시간, 칼로리, 날짜를 입력해주세요.');
    return;
  }
  exerciseLogs.push({ id: nextId++, type, name, date, duration, distance, calories, note });
  renderExerciseLog();
  $('ex-name').value = ''; $('ex-duration').value = ''; $('ex-calories').value = '';
  $('ex-distance').value = ''; $('ex-note').value = '';
}

function deleteExercise(id) {
  exerciseLogs = exerciseLogs.filter(e => e.id !== id);
  renderExerciseLog();
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

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobile();
  initTabs();

  // 오늘 날짜 세팅 (2026-03-17 화요일)
  const today = new Date('2026-03-17');
  if($('ex-date')) $('ex-date').value = today.toISOString().split('T')[0];
  if($('gcal-event-date')) $('gcal-event-date').value = today.toISOString().split('T')[0];

  // 기본 페이지: dashboard
  switchPage('dashboard');
  renderDashboard();
  renderMealPlan();
  renderExerciseLog();
  renderGoals();
  renderRunning();

  // 운동 추가 버튼
  const addBtn = $('btn-add-exercise');
  if(addBtn) addBtn.addEventListener('click', addExercise);

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
