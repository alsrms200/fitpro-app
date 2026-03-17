# FitPro 배포 가이드

## 🐳 Docker (로컬 / IntelliJ)

### 실행 방법

```bash
# 최초 빌드 + 실행
npm run docker:build
# 또는
docker-compose up -d --build

# 이후에는
npm run docker      # 백그라운드 실행
npm run docker:logs # 로그 확인
npm run docker:stop # 종료
```

접속: **http://localhost:8080**

### IntelliJ에서 사용
1. `docker-compose.yml` 파일 열기
2. 파일 왼쪽 ▶ (Run) 버튼 클릭
3. Docker 탭에서 컨테이너 상태 확인

> 볼륨 마운트로 소스 수정 시 **새로고침만 해도 즉시 반영**됩니다.

---

## ☁️ Cloudflare Pages 배포

### 방법 A: wrangler CLI (바로 배포)

```bash
# 1. Cloudflare 로그인
npx wrangler login

# 2. 배포 (프로젝트 자동 생성)
npm run deploy
# 또는
npx wrangler pages deploy . --project-name fitpro
```

배포 완료 시 URL 발급: `https://fitpro-xxxx.pages.dev`

---

### 방법 B: GitHub 연동 (자동 배포 권장)

1. GitHub에 `fitpro` 레포지토리 생성
2. 코드 push:
   ```bash
   git init
   git add .
   git commit -m "FitPro 피트니스 앱"
   git remote add origin https://github.com/[username]/fitpro.git
   git push -u origin main
   ```
3. [Cloudflare Pages](https://pages.cloudflare.com) → **"새 프로젝트"**
4. GitHub 연동 → `fitpro` 레포 선택
5. 빌드 설정:
   - **빌드 명령**: *(비워두기)*
   - **빌드 출력 디렉토리**: `/` (루트)
6. **배포** 클릭

이후 `git push` 할 때마다 **자동으로 Cloudflare에 배포**됩니다.

---

## 📁 프로젝트 파일 구조

```
ethereal-kilonova/
├── index.html          # 메인 앱
├── style.css           # 스타일
├── app.js              # 로직
├── Dockerfile          # Docker 이미지
├── docker-compose.yml  # 컨테이너 설정
├── nginx.conf          # nginx 설정
├── package.json        # npm 스크립트
└── .gitignore          # Git 제외 파일
```

## 환경별 접속 URL

| 환경 | URL |
|------|-----|
| npm dev | http://localhost:3000 |
| Docker | http://localhost:8080 |
| Cloudflare | https://fitpro.pages.dev |
