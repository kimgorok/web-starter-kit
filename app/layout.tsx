import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Web Starter Kit',
  description: '모던 웹 개발을 위한 스타터킷',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
