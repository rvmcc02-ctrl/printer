import React from 'react';
import { X, Scale, Trash2, ShoppingCart, Zap, Check, CheckCircle2 } from 'lucide-react';
import { Printer } from '../types';

interface CompareModalProps {
  printers: Printer[];
  onClose: () => void;
  onRemove: (printerId: string) => void;
  onSelectPrinter: (printer: Printer) => void;
  onAddToCart: (printer: Printer) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  printers,
  onClose,
  onRemove,
  onSelectPrinter,
  onAddToCart
}) => {
  if (printers.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Side-by-Side Model Comparison ({printers.length} selected)
              </h3>
              <p className="text-xs text-slate-500">
                Direct technical specifications & consumable cost evaluation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Close comparison"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto p-6 flex-1">
          <div className="min-w-[650px]">
            <div className="grid grid-cols-4 gap-4 pb-4 border-b border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-8">
                Model Details
              </div>

              {printers.map((p) => (
                <div key={p.id} className="relative p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
                  <button
                    onClick={() => onRemove(p.id)}
                    className="absolute top-2 right-2 text-slate-400 hover:text-red-600 p-1"
                    title="Remove from comparison"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="h-24 flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="h-full object-contain" referrerPolicy="no-referrer" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                      {p.brand}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 mt-1 line-clamp-1">{p.name}</h4>
                    <div className="text-sm font-extrabold text-blue-600 mt-1">${p.price.toFixed(2)}</div>
                  </div>

                  <button
                    onClick={() => onAddToCart(p)}
                    className="w-full py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}

              {Array.from({ length: 3 - printers.length }).map((_, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-xs text-slate-400 text-center">
                  Select another printer to compare
                </div>
              ))}
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-slate-100 text-xs">
              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Print Speed</span>
                {printers.map((p) => (
                  <span key={p.id} className="font-bold text-slate-900">
                    {p.specs.printSpeedPpm} PPM (Black) {p.specs.colorSpeedPpm ? `/ ${p.specs.colorSpeedPpm} PPM (Color)` : ''}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Technology</span>
                {printers.map((p) => (
                  <span key={p.id} className="text-slate-800">{p.technology}</span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Duplex (2-Sided)</span>
                {printers.map((p) => (
                  <span key={p.id} className="text-slate-800">
                    {p.specs.duplexPrinting ? 'Automatic' : 'Manual'}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Monthly Duty Cycle</span>
                {printers.map((p) => (
                  <span key={p.id} className="text-slate-800">
                    {p.specs.monthlyDutyCycle.toLocaleString()} pages
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Paper Capacity</span>
                {printers.map((p) => (
                  <span key={p.id} className="text-slate-800">
                    {p.specs.paperTrayCapacity} sheets
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Est. Mono Cost / Page</span>
                {printers.map((p) => (
                  <span key={p.id} className="font-bold text-emerald-700">
                    {p.specs.costPerPageMono}¢
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Connectivity</span>
                {printers.map((p) => (
                  <span key={p.id} className="text-slate-700 text-[11px]">
                    {p.specs.connectivity.slice(0, 3).join(', ')}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-4 py-3">
                <span className="font-semibold text-slate-600">Warranty Included</span>
                {printers.map((p) => (
                  <span key={p.id} className="text-slate-700 text-[11px]">
                    {p.warranty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Need specific dimension advice? Call 1-800-555-PRINT</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
