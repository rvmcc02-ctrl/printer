import React, { useState } from 'react';
import { X, Calculator, ArrowRight, DollarSign, TrendingDown, CheckCircle2 } from 'lucide-react';

interface TcoCalculatorProps {
  onClose: () => void;
  onFilterSupertank: () => void;
  onFilterLaser: () => void;
}

export const TcoCalculator: React.FC<TcoCalculatorProps> = ({
  onClose,
  onFilterSupertank,
  onFilterLaser
}) => {
  const [monthlyPages, setMonthlyPages] = useState<number>(1000);
  const [colorPercent, setColorPercent] = useState<number>(30); // 30% color, 70% mono

  // 3-year total pages:
  const totalPages3Years = monthlyPages * 36;
  const colorPages = Math.round(totalPages3Years * (colorPercent / 100));
  const monoPages = totalPages3Years - colorPages;

  // Comparison models:
  // 1. Traditional Cartridge Laser: Mono ~2.8c, Color ~12.5c, Hardware ~$350
  const cartridgeLaserHardware = 350;
  const cartridgeLaserConsumables = (monoPages * 0.028) + (colorPages * 0.125);
  const cartridgeLaserTotal = cartridgeLaserHardware + cartridgeLaserConsumables;

  // 2. Supertank EcoTank Inkjet: Mono ~0.3c, Color ~0.9c, Hardware ~$499
  const supertankHardware = 499;
  const supertankConsumables = (monoPages * 0.003) + (colorPages * 0.009);
  const supertankTotal = supertankHardware + supertankConsumables;

  // 3. High-Efficiency Enterprise Laser: Mono ~1.4c, Color ~7.5c, Hardware ~$550
  const enterpriseLaserHardware = 550;
  const enterpriseConsumables = (monoPages * 0.014) + (colorPages * 0.075);
  const enterpriseLaserTotal = enterpriseLaserHardware + enterpriseConsumables;

  const supertankSavingsVsCartridge = Math.max(0, cartridgeLaserTotal - supertankTotal);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                3-Year Total Cost of Ownership (TCO) Calculator
              </h3>
              <p className="text-xs text-slate-500">
                Compare initial hardware price plus toner/ink expense over 36 months
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Close Calculator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                <span>Estimated Monthly Pages</span>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                  {monthlyPages.toLocaleString()} pages/mo
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={monthlyPages}
                onChange={(e) => setMonthlyPages(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>100 (Home)</span>
                <span>2,500 (Office)</span>
                <span>5,000+ (High Volume)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                <span>Color vs Monochrome Ratio</span>
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">
                  {colorPercent}% Color / {100 - colorPercent}% Mono
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={colorPercent}
                onChange={(e) => setColorPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>0% (Mono Text Only)</span>
                <span>50% (Mixed Reports)</span>
                <span>100% (All Color)</span>
              </div>
            </div>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Supertank (EcoTank) */}
            <div className="p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/30 flex flex-col justify-between relative shadow-xs">
              <span className="absolute -top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Lowest Running Cost
              </span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Supertank / EcoTank</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Refillable ink bottle reservoirs</p>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Avg Hardware:</span>
                    <span className="font-semibold text-slate-800">${supertankHardware}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3-Yr Ink Cost:</span>
                    <span className="font-semibold text-emerald-700">${supertankConsumables.toFixed(0)}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200">
                  <div className="text-[11px] text-slate-500">3-Year Projected Total:</div>
                  <div className="text-2xl font-extrabold text-emerald-800 font-display">
                    ${supertankTotal.toFixed(0)}
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 mt-1 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Saves ${supertankSavingsVsCartridge.toFixed(0)} vs Cartridge
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onFilterSupertank();
                  onClose();
                }}
                className="mt-4 w-full py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg text-center cursor-pointer transition-colors"
              >
                Browse Supertank Models
              </button>
            </div>

            {/* 2. Enterprise Laser */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Enterprise High-Yield Laser</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Fast toner drums for heavy duty</p>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Avg Hardware:</span>
                    <span className="font-semibold text-slate-800">${enterpriseLaserHardware}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3-Yr Toner Cost:</span>
                    <span className="font-semibold text-slate-800">${enterpriseConsumables.toFixed(0)}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500">3-Year Projected Total:</div>
                  <div className="text-2xl font-extrabold text-slate-900 font-display">
                    ${enterpriseLaserTotal.toFixed(0)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Best for 30+ PPM speed & heavy workgroups
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onFilterLaser();
                  onClose();
                }}
                className="mt-4 w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center cursor-pointer transition-colors"
              >
                Browse Laser Models
              </button>
            </div>

            {/* 3. Standard Cartridge Laser */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Standard Cartridge</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Lower entry cost, higher page cost</p>

                <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Avg Hardware:</span>
                    <span className="font-semibold text-slate-800">${cartridgeLaserHardware}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3-Yr Cartridge Cost:</span>
                    <span className="font-semibold text-slate-800">${cartridgeLaserConsumables.toFixed(0)}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500">3-Year Projected Total:</div>
                  <div className="text-2xl font-extrabold text-slate-900 font-display">
                    ${cartridgeLaserTotal.toFixed(0)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Ideal primarily for light printing (&lt;300 pgs/mo)
                  </div>
                </div>
              </div>

              <div className="mt-4 py-2 px-3 text-xs text-center text-slate-400 bg-slate-50 rounded-lg">
                High Consumable Overhead
              </div>
            </div>
          </div>

          {/* Explanation note for Google Ads transparency */}
          <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-blue-900 space-y-1">
            <span className="font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Consumable Calculation Methodology & Transparency Note
            </span>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              Calculations assume standard ISO/IEC 24711 5% page coverage across estimated manufacturer yields. All printers sold by PrintTech Direct include starter supplies and support standard OEM replacement supplies.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
