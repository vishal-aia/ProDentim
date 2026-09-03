/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Ingredients } from './components/Ingredients';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col overflow-x-hidden selection:bg-blue-200">
      <Header />
      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 auto-rows-min gap-4 max-w-[1200px] mx-auto w-full">
        <Hero />
        <HowItWorks />
        <Ingredients />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

