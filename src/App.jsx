import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import { stovesData } from './data/stoves';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStoves = useMemo(() => {
    return stovesData.filter(stove => {
      if (activeFilter === 'under-2000') {
        return stove.price < 2000;
      }
      if (activeFilter === 'commercial') {
        return stove.wattage >= 2000;
      }
      return true; // 'all'
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-rose-100 selection:text-rose-900">
      <div className="max-w-7xl mx-auto py-6">
        <Hero />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <ProductGrid stoves={filteredStoves} />
      </div>
    </div>
  );
}

export default App;
