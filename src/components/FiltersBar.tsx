import React from 'react';
import { Filter, SlidersHorizontal, RotateCcw, Check } from 'lucide-react';
import { FilterState, PrinterCategory } from '../types';

interface FiltersBarProps {
  filters: FilterState;
  onChangeFilters: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  totalCount: number;
}

export const FiltersBar: React.FC<FiltersBarProps> = ({
  filters,
  onChangeFilters,
  onResetFilters,
  totalCount
}) => {
  const brands = ['All', 'Brother', 'HP', 'Canon', 'Epson', 'Xerox'];
  const technologies = ['All', 'Color Laser', 'Monochrome Laser', 'Supertank Inkjet', 'Precision Inkjet'];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-4">
      {/* Top Filter Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Filter & Refine Printers
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
            {totalCount} models available
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-medium">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => onChangeFilters({ ...filters, sortBy: e.target.value as any })}
              className="p-1.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-semibold focus:ring-1 focus:ring-blue-500 text-xs"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="speed-desc">Print Speed (Fastest First)</option>
              <option value="rating-desc">Highest Customer Rating</option>
            </select>
          </div>

          <button
            onClick={onResetFilters}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Filter Row Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Brand selector */}
        <div>
          <label className="block text-slate-600 font-bold mb-1.5">Manufacturer Brand</label>
          <div className="flex flex-wrap gap-1">
            {brands.map((b) => {
              const active = (b === 'All' && !filters.brand) || filters.brand === b;
              return (
                <button
                  key={b}
                  onClick={() => onChangeFilters({ ...filters, brand: b === 'All' ? '' : b })}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology selector */}
        <div>
          <label className="block text-slate-600 font-bold mb-1.5">Print Technology</label>
          <select
            value={filters.technology || 'All'}
            onChange={(e) => onChangeFilters({ ...filters, technology: e.target.value === 'All' ? '' : e.target.value })}
            className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs"
          >
            {technologies.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Max Price slider */}
        <div>
          <div className="flex justify-between items-center mb-1.5 font-bold text-slate-600">
            <span>Max Hardware Budget</span>
            <span className="text-blue-600 font-extrabold">${filters.maxPrice}</span>
          </div>
          <input
            type="range"
            min="150"
            max="750"
            step="25"
            value={filters.maxPrice}
            onChange={(e) => onChangeFilters({ ...filters, maxPrice: Number(e.target.value) })}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>$150</span>
            <span>$450</span>
            <span>$750+</span>
          </div>
        </div>

        {/* Quick Checkbox Toggles */}
        <div className="flex flex-col justify-center space-y-2 pt-1 sm:pt-0">
          <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-medium">
            <input
              type="checkbox"
              checked={filters.duplexOnly}
              onChange={(e) => onChangeFilters({ ...filters, duplexOnly: e.target.checked })}
              className="w-4 h-4 text-blue-600 rounded border-slate-300"
            />
            <span>Auto 2-Sided (Duplex) Only</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-medium">
            <input
              type="checkbox"
              checked={filters.wirelessOnly}
              onChange={(e) => onChangeFilters({ ...filters, wirelessOnly: e.target.checked })}
              className="w-4 h-4 text-blue-600 rounded border-slate-300"
            />
            <span>Wi-Fi / AirPrint Wireless Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};
