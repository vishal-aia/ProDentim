import React from 'react';
import { Sparkles } from 'lucide-react';
import { AFFILIATE_LINK } from '../config';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8 shrink-0 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-blue-900 uppercase">ProDentim</span>
      </div>
      <a
        href={AFFILIATE_LINK}
        className="text-blue-600 underline decoration-2 underline-offset-4 font-semibold text-sm hover:text-blue-800"
      >
        Official Store
      </a>
    </header>
  );
}
