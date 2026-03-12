import React from 'react';
import { Check, X, ExternalLink, Zap } from 'lucide-react';

export default function ProductCard({ stove }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
      {/* Top Banner / Image Area */}
      <div className={`h-48 ${stove.imageColor} relative flex items-center justify-center p-6 group-hover:scale-[1.02] transition-transform duration-500`}>
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full absolute top-4 right-4 text-xs font-bold text-slate-700 uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <Zap size={14} className="text-orange-500" />
          {stove.wattage}W
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
          {stove.name}
        </h2>
        
        <div className="text-3xl font-extrabold text-slate-900 mb-6">
          ₹{stove.price.toLocaleString('en-IN')}
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pros</h3>
            <ul className="space-y-1.5">
              {stove.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Cons</h3>
            <ul className="space-y-1.5">
              {stove.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <X size={16} className="text-rose-400 mt-0.5 shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a 
          href="#"
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 flex justify-center items-center gap-2"
        >
          Check Price on Amazon
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
