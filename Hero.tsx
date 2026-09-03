import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star } from 'lucide-react';
import { AFFILIATE_LINK } from '../config';

export function Hero() {
  return (
    <section className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-8 md:p-12 relative overflow-hidden shadow-sm flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 opacity-50 pointer-events-none"></div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center relative z-10">
        
        <motion.div 
          className="lg:col-span-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium mb-6">
            <Star className="w-4 h-4 fill-blue-800 text-blue-800" />
            <span>#1 Rated Oral Health Probiotic</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            The Unique 'Tooth-Restoring' <span className="text-blue-600">Soft Mineral Melt</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            A unique blend of 3.5 Billion probiotic strains and nutrients backed by clinical research. Formulated to repopulate your mouth with good bacteria, supporting healthy teeth, gums, and long-lasting fresh breath.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <a 
              href={AFFILIATE_LINK}
              className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Claim Your Discounted ProDentim Now
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Made in USA</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>FDA Registered Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>GMP Certified</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-6 mt-16 lg:mt-0 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Using a clean geometric abstraction instead of an actual product image as we don't have it, but styling it professionally */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-green-50 rounded-full shadow-2xl overflow-hidden flex items-center justify-center border-8 border-white">
               <div className="text-center p-8">
                  <div className="text-blue-600 text-6xl font-black mb-2">3.5B</div>
                  <div className="text-slate-800 text-xl font-bold uppercase tracking-widest">CFU Probiotics</div>
                  <div className="mt-6 inline-block bg-white px-6 py-2 rounded-full shadow text-sm font-semibold text-slate-700">Advanced Oral Care</div>
               </div>
            </div>
            {/* Floating elements */}
            <div className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 text-green-600 font-bold">
                 <Star className="w-5 h-5 fill-green-600" />
                 5.0 / 5.0
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
