# CLAUDE.md

이 파일은 Claude Code가 이 저장소의 코드로 작업할 때 참고하는 지침을 제공합니다.

## 핵심 개발 명령어

```bash
npm run dev       # 개발 서버 실행 (localhost:3000)
npm run build     # 프로덕션 빌드 생성
npm run start     # 프로덕션 서버 실행
npm run lint      # ESLint 실행 및 코드 스타일 검사
```

## 프로젝트 아키텍처

### 기술 스택
- **Next.js 15** - App Router 기반의 최신 프레임워크
- **TypeScript** - 엄격한 타입 체크 enabled
- **Tailwind CSS** - CSS 변수 기반의 커스텀 테마 시스템
- **ShadcnUI** - Radix UI 원시 컴포넌트 기반의 재사용 가능한 UI 컴포넌트
- **next-themes** - 다크 모드 지원 및 테마 관리
- **Sonner** - 알림(toast) 기능

### 디렉토리 구조 및 역할

```
app/                          # Next.js App Router
├── layout.tsx               # 루트 레이아웃 (Providers 포함)
├── page.tsx                 # 홈 페이지
├── globals.css              # 글로벌 스타일 및 CSS 변수 정의
├── providers.tsx            # ThemeProvider, Toaster 등 클라이언트 프로바이더
└── components/              # 페이지별 컴포넌트

components/
├── ui/                      # ShadcnUI 기반의 기본 UI 컴포넌트들
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── ... (20개 이상의 재사용 가능한 UI 컴포넌트)
├── layout/                  # 레이아웃 래퍼 컴포넌트들
│   ├── default-layout.tsx   # 기본 레이아웃 (헤더 + 메인 + 푸터)
│   ├── dashboard-layout.tsx # 대시보드 레이아웃
│   ├── auth-layout.tsx      # 인증 페이지 레이아웃
│   ├── header.tsx           # 공통 헤더
│   ├── footer.tsx           # 공통 푸터
│   └── sidebar.tsx          # 사이드바 컴포넌트
└── common/                  # 공통 기능 컴포넌트
    └── theme-toggle.tsx     # 다크 모드 토글 버튼

lib/
└── utils.ts                 # cn() - 클래스명 유틸리티 (clsx + tailwind-merge)

hooks/
└── use-media-query.ts       # 미디어 쿼리 반응형 조회 훅
```

### 아키텍처 특징

**1. 컴포넌트 계층 분리**
- `components/ui/` - Radix UI 기반의 저수준 UI 프리미티브 (재사용성 높음)
- `components/layout/` - 페이지 구조를 위한 레이아웃 컴포넌트
- `components/common/` - 프로젝트 전체에서 공유되는 기능성 컴포넌트

**2. 테마 시스템**
- CSS 변수(`--primary`, `--secondary` 등)를 `app/globals.css`에서 정의
- Tailwind 설정에서 색상을 HSL 기반의 CSS 변수로 매핑
- `next-themes`를 통해 다크 모드 class 기반으로 관리
- 각 색상은 기본색과 전경색(foreground) 조합으로 구성

**3. 글로벌 프로바이더 구조**
- `<Providers>` 컴포넌트가 `ThemeProvider`와 `Toaster`를 감싸고 있음
- 'use client' 지시자로 클라이언트 컴포넌트임을 명시

## 코딩 규칙

### TypeScript 설정
- **strict 모드 활성화** - 모든 타입 검사 활성화
- **경로 별칭** - `@/*`로 루트 경로부터 import 가능 (e.g., `@/components/ui/button`)

### Tailwind CSS 사용법
```tsx
// cn() 유틸리티를 사용하여 조건부 클래스명 구성
import { cn } from '@/lib/utils';

function MyComponent({ isActive }: { isActive: boolean }) {
  return (
    <div className={cn(
      'p-4 rounded-md',
      isActive && 'bg-primary text-primary-foreground'
    )}>
      내용
    </div>
  );
}
```

### UI 컴포넌트 확장
- 기존 `components/ui/` 컴포넌트는 ShadcnUI 스타일 유지
- 새로운 기본 컴포넌트는 `components/ui/` 디렉토리에 추가
- 프로젝트 특화 기능은 `components/common/` 또는 `app/components/`에 배치

### 다크 모드 지원
- Tailwind의 `dark:` prefix를 사용하거나 CSS 변수 기반 자동 처리
- `theme-toggle.tsx`에서 다크 모드 전환 로직 참고

## 개발 워크플로우

### 새 페이지 추가
1. `app/` 디렉토리에 경로 생성 (예: `app/about/page.tsx`)
2. 필요한 경우 `components/layout/`에서 레이아웃 선택 또는 생성
3. 페이지 컴포넌트에서 레이아웃으로 감싸기

### 새 UI 컴포넌트 추가
1. `components/ui/` 디렉토리에 파일 추가
2. Radix UI 원시 컴포넌트 활용
3. Tailwind CSS로 스타일링
4. `components/ui/button.tsx` 등을 참고하여 구조 따르기

## 주요 주의사항

- **레이아웃 가시성** - DefaultLayout 등은 주요 구조이므로 변경 시 영향도 검토 필요
- **CSS 변수 일관성** - 새 색상 추가 시 `app/globals.css`와 `tailwind.config.ts` 동시 수정
- **클라이언트 컴포넌트** - 'use client' 지시자 필수 (이벤트 핸들러, hooks 사용 시)
- **앞으로 나아가기 - 빌드 검증** - `npm run build` 후 `npm start`로 프로덕션 환경 확인 권장
