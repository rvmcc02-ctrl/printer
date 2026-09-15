import React from 'react';
import { 
  Star, 
  Check, 
  Zap, 
  Layers, 
  Wifi, 
  Plus, 
  Scale, 
  CheckCircle,
  Clock,
  Eye,
  Building2
} from 'lucide-react';
import { Printer } from '../types';

interface PrinterCardProps {
  printer: Printer;
  onSelect: (printer: Printer) => void;
  onAddToCart: (printer: Printer) => void;
  onToggleCompare: (printer: Printer) => void;
  isCompared: boolean;
  onRequestQuote: (printer: Printer) => void;
}

export const PrinterCard: React.FC<PrinterCardProps> = ({
  printer,
  onSelect,
  onAddToCart,
  onToggleCompare,
  isCompared,
  onRequestQuote
}) => {
  const savings = printer.originalPrice - printer.price;
  const savingsPercent = Math.round((savings / printer.originalPrice) * 100);

  return (
    <div className="group relative bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden">
      {/* Product Image & Badges */}
      <div className="relative w-full h-52 bg-slate-100/70 overflow-hidden flex items-center justify-center p-4">
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {printer.badge && (
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-blue-600 text-white shadow-xs">
              {printer.badge}
            </span>
          )}
          <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-800 text-slate-100">
            {printer.brand}
          </span>
        </div>

        {/* Compare Toggle Button */}
        <button
          onClick={() => onToggleCompare(printer)}
          title={isCompared ? 'Remove from compare' : 'Add to compare'}
          className={`absolute top-3 right-3 z-10 p-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1 ${
            isCompared 
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' 
              : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isCompared ? 'Comparing' : 'Compare'}</span>
        </button>

        {/* Product Image */}
        <img
          src={printer.image}
          alt={printer.name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-2 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-md flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-blue-600" />
            Click for Full Technical Specs
          </span>
        </div>
      </div>

      {/* Main Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating & Model Code */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-800">{printer.rating.toFixed(1)}</span>
              <span className="text-slate-400">({printer.reviewCount})</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">SKU: {printer.modelCode}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(printer)}
            className="text-base font-bold text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer"
          >
            {printer.name}
          </h3>

          <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {printer.shortTagline}
          </p>

          {/* Quick Technical Specs Pills */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-slate-50 border border-slate-200/60">
              <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="font-semibold text-slate-800">{printer.specs.printSpeedPpm} PPM</span>
              <span className="text-slate-400">Speed</span>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-slate-50 border border-slate-200/60">
              <Layers className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{printer.specs.duplexPrinting ? 'Auto Duplex' : 'Manual 2-Sided'}</span>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-slate-50 border border-slate-200/60">
              <Wifi className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="truncate">{printer.specs.connectivity[0]}</span>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-md bg-slate-50 border border-slate-200/60">
              <span className="font-bold text-emerald-700">{printer.specs.costPerPageMono}¢</span>
              <span className="text-slate-500">/page cost</span>
            </div>
          </div>
        </div>

        {/* Pricing, Shipping Status & Actions */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          {/* Price line */}
          <div className="flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  ${printer.price.toFixed(2)}
                </span>
                {savings > 0 && (
                  <span className="text-xs text-slate-400 line-through">
                    ${printer.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <span className="inline-block text-[11px] font-semibold text-emerald-700">
                  Save ${savings.toFixed(2)} ({savingsPercent}%)
                </span>
              )}
            </div>

            {/* In-Stock & Dispatch */}
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                In Stock ({printer.stockCount})
              </span>
              <div className="text-[10px] text-slate-500 flex items-center justify-end gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                Ships Same Day
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(printer)}
              className="w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center"
            >
              Full Specs
            </button>

            <button
              onClick={() => onAddToCart(printer)}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Corporate Quote link */}
          <button
            onClick={() => onRequestQuote(printer)}
            className="w-full text-center text-[11px] text-slate-500 hover:text-blue-600 font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <Building2 className="w-3 h-3" />
            Request Bulk Fleet / Tax-Exempt Quote
          </button>
        </div>
      </div>
    </div>
  );
};
