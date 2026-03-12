import React from 'react';

export default function FilterBar({ activeFilter, setActiveFilter }) {
  const filters = [
    { id: 'all', label: 'All Stoves' },
    { id: 'under-2000', label: 'Under ₹2000' },
    { id: 'commercial', label: 'Commercial (2000W+)' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 my-8 px-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-200 ease-in-out whitespace-nowrap shadow-sm hover:shadow-md ${
            activeFilter === filter.id
              ? 'bg-rose-500 text-white shadow-rose-500/30'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
