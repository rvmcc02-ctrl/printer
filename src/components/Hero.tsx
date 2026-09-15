import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Calculator, 
  CheckCircle2, 
  Award,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenCalculator: () => void;
  onScrollToCatalog: () => void;
  onOpenPolicy: (key: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuiz,
  onOpenCalculator,
  onScrollToCatalog,
  onOpenPolicy
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-12 lg:py-16">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Independent Commercial Equipment Distributor</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
              Commercial & Office Printers Built for Real Workloads.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Shop genuine factory-sealed laser, eco-tank, and multifunction systems with transparent pricing, full manufacturer warranties, and free expedited 2-day delivery over $99.
            </p>

            {/* Google Ads Policy Compliance Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <RotateCcw className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">30-Day Guarantee</div>
                  <div className="text-[11px] text-slate-400">Risk-free return window with no hidden fees</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Fast 2-Day Shipping</div>
                  <div className="text-[11px] text-slate-400">Orders before 3PM EST dispatch same day</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">OEM Warranties</div>
                  <div className="text-[11px] text-slate-400">1 to 3-year factory coverage included</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-btn-catalog"
                onClick={onScrollToCatalog}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Browse All Printers</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-quiz"
                onClick={onOpenQuiz}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Help Me Choose (60s)</span>
              </button>

              <button
                id="hero-btn-calc"
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Calculate Ink Cost Per Page</span>
              </button>
            </div>
          </div>

          {/* Quick Value Card / Featured Highlight */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-xl space-y-4 backdrop-blur-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Buyer Assurance Checklist
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  Verified Merchant
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>100% Factory Sealed:</strong> Genuine new hardware with uncompromised seals.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Transparent Pricing:</strong> Stated prices include all standard starter toner & cords.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>No Forced Subscriptions:</strong> You own the printer and buy ink on your terms.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Live U.S. Phone & Email Support:</strong> Call 1-800-555-PRINT during business hours.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                <span>Peachtree Corners, GA Warehouse</span>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
                >
                  Privacy & Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
