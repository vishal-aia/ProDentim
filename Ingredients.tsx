import React from 'react';
import { motion } from 'motion/react';
import { Beaker, Droplets, Leaf, ShieldCheck } from 'lucide-react';

const primaryIngredients = [
  {
    name: "Lactobacillus Paracasei",
    benefits: ["Supports the health of your gums", "Helps your sinuses stay free and open"],
    icon: <Beaker className="w-6 h-6 text-blue-600" />
  },
  {
    name: "B.lactis BL-04®",
    benefits: ["Supports the balance of mouth bacteria", "Supports respiratory tract", "Maintains a healthy immune system"],
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    name: "Lactobacillus Reuteri",
    benefits: ["Helps with inflammation", "Supports a healthy mouth environment"],
    icon: <Leaf className="w-6 h-6 text-blue-600" />
  }
];

const proprietaryBlend = [
  "Inulin supports good bacteria",
  "Malic acid in strawberries helps maintain tooth whiteness",
  "Tricalcium Phosphate supports tooth health",
  "Peppermint is a natural anti-inflammatory"
];

export function Ingredients() {
  return (
    <section className="lg:col-span-12 bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
      <div className="mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Inside Every ProDentim You'll Find:
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            3.5 Billion Probiotics, along with 3 unique ingredients that are clinically proven to support the health of your teeth and gums.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {primaryIngredients.map((ingredient, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                {ingredient.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{ingredient.name}</h3>
              <ul className="space-y-3">
                {ingredient.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Droplets className="w-64 h-64 -mt-16 -mr-16" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Proprietary Blend of 4 Plants and Minerals</h3>
              <p className="text-blue-100 mb-6">
                Carefully selected to maximize the effectiveness of our probiotic strains.
              </p>
            </div>
            <div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {proprietaryBlend.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
