'use client';

import { Github, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 네비게이션 */}
      <nav className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Web Starter Kit
            </div>
            <div className="flex gap-4">
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Next.js
              </Link>
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Tailwind
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">
              모던 웹 개발을 위한 스타터킷
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            빠른 시작을 위한<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              완벽한 구성
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Next.js 15, TypeScript, Tailwind CSS, ShadcnUI로 구성된
            프로덕션 레디 스타터킷입니다.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Link
              href="/components"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              컴포넌트 보기
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </div>

          {/* 기술 스택 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
            {[
              { name: 'Next.js 15', desc: 'App Router' },
              { name: 'TypeScript', desc: '타입 안전성' },
              { name: 'Tailwind', desc: 'CSS' },
              { name: 'ShadcnUI', desc: '컴포넌트' },
              { name: 'Lucide', desc: '아이콘' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4"
              >
                <div className="font-semibold text-white text-sm">
                  {tech.name}
                </div>
                <div className="text-xs text-slate-400">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Web Starter Kit. 모던 웹 개발을 위한 스타터킷입니다.
          </p>
        </div>
      </footer>
    </main>
  );
}
