import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Gift } from 'lucide-react';
import { AFFILIATE_LINK } from '../config';

const packages = [
  {
    title: "30 Day Supply",
    bottles: 1,
    price: 69,
    retailPrice: 99,
    shipping: "Small Shipping Fee",
    bonuses: false,
    popular: false,
    imagePlaceholder: "1x"
  },
  {
    title: "180 Day Supply",
    bottles: 6,
    price: 49,
    retailPrice: 594,
    shipping: "Free US Shipping",
    bonuses: true,
    popular: true,
    imagePlaceholder: "6x"
  },
  {
    title: "90 Day Supply",
    bottles: 3,
    price: 59,
    retailPrice: 297,
    shipping: "Free US Shipping",
    bonuses: true,
    popular: false,
    imagePlaceholder: "3x"
  }
];

export function Pricing() {
  return (
    <section className="lg:col-span-12 bg-yellow-400 rounded-3xl p-8 md:p-12 shadow-md flex flex-col items-center justify-center text-center" id="pricing">
      <div className="w-full">
        <div className="mb-12">
          <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-tighter inline-block">Limited Time Offer</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 uppercase">
            CLAIM UP TO 75% OFF
          </h2>
          <p className="text-slate-800 font-medium text-lg">Direct Manufacturer Pricing Only Today</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto mb-16 text-left">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              className={`relative bg-white rounded-3xl border-2 ${pkg.popular ? 'border-slate-900 shadow-xl z-10 lg:scale-105' : 'border-slate-200 shadow-md'} p-8 flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-slate-900 text-white font-bold px-6 py-1.5 rounded-full text-sm uppercase tracking-wide">
                    Best Value
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.bottles} Bottle{pkg.bottles > 1 && 's'}</h3>
                <p className="text-slate-500 font-medium mb-6">{pkg.title}</p>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-slate-400 line-through text-lg">${pkg.retailPrice}</span>
                  <span className="text-5xl font-black text-slate-900">${pkg.price}</span>
                  <span className="text-slate-500 font-medium mt-3">/bottle</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Truck className="w-5 h-5 text-slate-900 shrink-0" />
                  <span>{pkg.shipping}</span>
                </div>
                {pkg.bonuses && (
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <Gift className="w-5 h-5 text-slate-900 shrink-0" />
                    <span>2 FREE E-Books Included</span>
                  </div>
                )}
              </div>

              <a 
                href={AFFILIATE_LINK}
                className={`w-full py-4 rounded-2xl font-bold text-lg text-center transition-colors shadow-xl ${pkg.popular ? 'bg-slate-900 hover:bg-black text-white' : 'bg-slate-800 hover:bg-slate-900 text-white'}`}
              >
                CHECK AVAILABILITY NOW →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section in Bento style */}
        <div className="grid md:grid-cols-7 gap-4 max-w-5xl mx-auto text-left">
          <div className="md:col-span-3 bg-white rounded-3xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3">
               <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <h5 className="font-bold text-slate-900">60-Day Guarantee</h5>
            <p className="text-xs text-slate-500">100% Satisfaction or your money back.</p>
          </div>
          
          <div className="md:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex-shrink-0 flex items-center justify-center font-black text-blue-700 text-xl">GMP</div>
            <div>
              <h5 className="font-bold text-slate-900 leading-tight">Certified Quality Standard</h5>
              <p className="text-xs text-slate-500 mt-1">Manufactured in climate-controlled, state-of-the-art FDA registered labs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
