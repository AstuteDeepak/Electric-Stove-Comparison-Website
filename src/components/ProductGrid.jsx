import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ stoves }) {
  if (stoves.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        No stoves match your current filter.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-16">
      {stoves.map(stove => (
        <ProductCard key={stove.id} stove={stove} />
      ))}
    </div>
  );
}
