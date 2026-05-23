# Web Starter Kit

모던 웹 개발을 위한 프로덕션 레디 스타터킷입니다.

## 기술 스택

- **Next.js 15** - App Router를 사용한 최신 리액트 프레임워크
- **TypeScript** - 타입 안전성과 개발자 경험
- **Tailwind CSS** - 유틸리티 기반의 CSS 프레임워크
- **ShadcnUI** - 재사용 가능한 UI 컴포넌트
- **Lucide React** - 아이콘 라이브러리

## 프로젝트 구조

```
.
├── app/                   # Next.js App Router
│   ├── layout.tsx        # 루트 레이아웃
│   ├── page.tsx          # 홈페이지
│   ├── globals.css       # 글로벌 스타일
│   └── components/       # 페이지
├── components/
│   └── ui/              # UI 컴포넌트들
├── lib/
│   └── utils.ts         # 유틸리티 함수
├── public/              # 정적 파일
├── next.config.js       # Next.js 설정
├── tailwind.config.ts   # Tailwind 설정
├── tsconfig.json        # TypeScript 설정
└── package.json         # 의존성 및 스크립트
```

## 빠른 시작

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 주요 기능

### ✨ TypeScript 지원
- 전체 TypeScript 타입 안전성
- 엄격한 타입 체크 설정

### 🎨 Tailwind CSS
- 즉시 사용 가능한 유틸리티 클래스
- 다크 모드 지원
- 커스텀 테마 설정

### 🧩 ShadcnUI 컴포넌트
- Button
- Card
- 확장 가능한 구조

### 📦 Lucide Icons
- 200+ 고품질 아이콘
- 완벽한 TypeScript 지원

## 커스터마이제이션

### 테마 색상 변경

`app/globals.css`에서 CSS 변수를 수정하세요:

```css
:root {
  --primary: 0 0% 9.1%;
  --secondary: 0 0% 96.1%;
  /* ... 더 많은 색상 ... */
}
```

### Tailwind 설정

`tailwind.config.ts`에서 테마를 커스터마이즈할 수 있습니다.

## 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## 학습 자료

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [React 문서](https://react.dev)
- [ShadcnUI 문서](https://ui.shadcn.com)

## 라이선스

MIT

## 지원

문제가 있거나 질문이 있으시면 GitHub에서 이슈를 열어주세요.
