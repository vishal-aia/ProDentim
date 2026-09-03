import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-100 px-8 py-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-400 uppercase tracking-widest shrink-0 border-t border-slate-200 mt-8 gap-4 text-center">
      <span>© {new Date().getFullYear()} PRODENTIM OFFICIAL PRODUCT</span>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-600 transition-colors">Terms & Conditions</a>
        <a href="#" className="hover:text-slate-600 transition-colors">Shipping Info</a>
      </div>
      <div className="max-w-xl text-[8px] leading-tight text-slate-400 normal-case mt-4 md:mt-0">
        <p>* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.</p>
      </div>
    </footer>
  );
}
