# CLAUDE.md — FiaYoon Portfolio

> Claude Code가 이 프로젝트를 작업할 때 항상 먼저 읽는 컨텍스트 파일입니다.
> 저장소 루트에 두며, 이 저장소(`FiaYoon/FiaYoon`)의 루트가 곧 프로젝트 루트입니다.

## 프로젝트 개요
금붕어 작가 **FiaYoon**의 몰입형 포트폴리오. 금붕어 캐릭터 **True(트루)**가
"무한한 가능성"을 상징. 원본은 단일 HTML 프로토타입(9.8MB, base64 인라인)이었고,
현재는 Vite 프로젝트로 리팩터링 + Phase 1–6 기능이 얹혀 있는 상태.

SPA 구조(라우터 없이 view 전환 방식). 뷰: Intro(v-hello) · Artwork(v-gallery) ·
Series(v-series) · Detail(v-detail) · About(v-about) · Aquarium(v-aquarium) ·
Contact(v-contact). 한/영 i18n 지원(`data-i18n`).

## 실행
```bash
npm install
npm run dev       # 개발 서버 (HMR)
npm run build     # 프로덕션 빌드 → dist/
npm run preview   # 빌드 결과 서빙
```

## 디렉터리 구조
```
FiaYoon/  (저장소 = 프로젝트 루트)
├── index.html                 # 슬림 셸: 마크업 + SVG 워터 필터 + 모듈 태그
├── CNAME                      # 커스텀 도메인(fiayoon.com) — public/CNAME로도 복제되어 dist에 포함
├── .github/workflows/deploy.yml  # main 푸시 시 vite build → GitHub Pages 배포
├── vite.config.js             # 코드 스플리팅(three/gsap), 이미지 base64 인라인 금지
├── package.json               # deps: gsap, three
├── src/
│   ├── styles/global.css      # 모든 :root 변수, keyframes, view 스타일
│   ├── scripts/main.js        # 포팅된 프로토타입 로직 + Phase 훅 (건드릴 때 주의)
│   └── components/
│       ├── heroEntrance.js    # Phase2: GSAP 인트로 진입
│       ├── heroCursor.js      # Phase2: 인트로 전용 커서 상태
│       ├── carouselTilt.js    # Phase3: 3D 캐러셀 포인터 틸트
│       ├── aquarium3D.js      # Phase4: Three.js 씬 + GLB 훅 (지연 로딩)
│       └── aboutProgress.js   # Phase5: 스크롤 진행 레일
└── public/assets/
    ├── img/                   # 이미지 109개 (원본 base64에서 추출)
    ├── video/                 # 참고 영상 4개 (TRUE_3D, LOVE_3D 등)
    └── models/                # (예정) .glb 3D 모델을 여기 둠
```

## 아키텍처 규칙 (중요)
1. **`main.js`는 원본 프로토타입에서 포팅된 코드다.** 대규모 재작성 금지.
   새 기능은 `src/components/`에 독립 모듈로 만들고 `main.js` 상단에서 import,
   기존 init 블록 근처에서 호출만 추가한다. (Phase 2–5가 모두 이 패턴)
2. **이미지는 절대 base64로 인라인하지 않는다.** `public/assets/img/`의 실제 파일 사용.
   `vite.config.js`의 `assetsInlineLimit: 0`가 이를 강제.
3. **뷰 전환은 `go(id, ev)` 함수로 처리** (main.js). `current` 전역이 활성 뷰 id.
4. **Three.js는 지연 로딩된다.** 어항 첫 진입 시에만 `import('../components/aquarium3D.js')`.
   초기 로드에 three를 다시 넣지 말 것.
5. **모든 애니메이션은 `prefers-reduced-motion`을 존중해야 한다.**
   CSS 블랭킷 룰 + 각 JS 모듈에서 `matchMedia('(prefers-reduced-motion:reduce)')` 체크.
6. **파일명은 ASCII만.** (한글 파일명은 과거 로드 실패 이력 있음)

## 각 Phase 현황
- **P1 환경**: base64 추출, 모놀리식 분리, Vite 구성 — 완료
- **P2 인트로**: GSAP 진입 타임라인, 인트로 커서(물결 리플 + "Dive in" 라벨) — 완료
- **P3 아트워크**: 3D 캐러셀은 원본에 존재. translateZ 깊이 + 포인터 틸트 추가 — 완료
- **P4 어항**: 2D 어항(드래그/먹이/거품/하트/다운로드)은 원본에 존재.
  Three.js 깊이 레이어 + 플레이스홀더 금붕어 + `loadModel()` 훅 추가 — 완료
- **P5 About**: 패럴랙스/플립카드/스타필드는 원본에 존재. 스크롤 진행 레일 추가 — 완료
- **P6 성능**: three 코드 스플리팅, 이미지 lazy, 워터 필터 게이팅, reduced-motion — 완료

## 빌드 산출물 (gzip)
- 초기: index.js ~19KB + gsap ~28KB + CSS ~11KB
- 어항 진입 시: three ~144KB + aquarium3D ~1.7KB (지연)

## 실제 3D 모델 넣기 (미완료 — 다음 작업 후보)
1. `TRUE_3D.mp4` / `LOVE_3D.mp4`를 Spline이나 3D 툴에서 `.glb`로 익스포트
2. `public/assets/models/true.glb`에 배치
3. `main.js`의 `ensureAqua3D()` 안 주석 `// aqua3d.loadModel(...)` 해제
   → 플레이스홀더 금붕어가 실제 모델로 자동 교체됨 (로더/씬 이미 배선됨)

## 작업 시 체크리스트
- [ ] 변경 후 `npm run build`가 에러 없이 통과하는가
- [ ] 새 애니메이션에 reduced-motion 대비가 있는가
- [ ] main.js를 크게 고치지 않고 모듈로 분리했는가
- [ ] 이미지에 `loading="lazy" decoding="async"`를 붙였는가
