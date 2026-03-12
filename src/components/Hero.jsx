import React from 'react';
import { Flame } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-slate-900 text-white rounded-3xl mx-4 mt-6 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10">
        <Flame size={200} />
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
        Beat the Gas Crisis: Top Electric Stoves for Every Kitchen
      </h1>
      <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto relative z-10 font-medium">
        Compare the best induction cooktops to save money, cook faster, and keep your kitchen cool.
      </p>
    </div>
  );
}
