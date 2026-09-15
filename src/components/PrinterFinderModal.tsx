import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  Star, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';
import { Printer, QuizAnswers } from '../types';

interface PrinterFinderModalProps {
  printers: Printer[];
  onClose: () => void;
  onSelectPrinter: (printer: Printer) => void;
  onAddToCart: (printer: Printer) => void;
}

export const PrinterFinderModal: React.FC<PrinterFinderModalProps> = ({
  printers,
  onClose,
  onSelectPrinter,
  onAddToCart
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    primaryUse: '',
    colorNeed: '',
    monthlyVolume: '',
    mustHaveFeatures: [],
    budgetRange: ''
  });

  const toggleFeature = (feat: string) => {
    if (answers.mustHaveFeatures.includes(feat)) {
      setAnswers({
        ...answers,
        mustHaveFeatures: answers.mustHaveFeatures.filter(f => f !== feat)
      });
    } else {
      setAnswers({
        ...answers,
        mustHaveFeatures: [...answers.mustHaveFeatures, feat]
      });
    }
  };

  const calculateMatches = () => {
    return printers.map(printer => {
      let score = 50;

      // Color vs mono
      if (answers.colorNeed === 'mono' && printer.technology.toLowerCase().includes('monochrome')) {
        score += 25;
      } else if (answers.colorNeed === 'color' && !printer.technology.toLowerCase().includes('monochrome')) {
        score += 25;
      }

      // Volume
      if (answers.monthlyVolume === 'high' && printer.specs.monthlyDutyCycle >= 30000) {
        score += 20;
      } else if (answers.monthlyVolume === 'low' && printer.specs.monthlyDutyCycle <= 20000) {
        score += 15;
      }

      // Low ink cost priority
      if (answers.mustHaveFeatures.includes('Lowest Ink Cost') && printer.category === 'supertank-inkjet') {
        score += 25;
      }

      // Speed priority
      if (answers.mustHaveFeatures.includes('High Print Speed') && printer.specs.printSpeedPpm >= 30) {
        score += 20;
      }

      // Duplex priority
      if (answers.mustHaveFeatures.includes('Auto Duplex (2-sided)') && printer.specs.duplexPrinting) {
        score += 10;
      }

      return {
        printer,
        score: Math.min(score, 99)
      };
    }).sort((a, b) => b.score - a.score).slice(0, 2);
  };

  const matched = calculateMatches();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">Printer Matchmaker Quiz</h3>
              <p className="text-xs text-slate-500">Answer 4 quick questions for the ideal model match</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Close Quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Steps */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 1 of 4</span>
                <span className="text-xs text-slate-400">Step 1</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">What is your primary printing environment?</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'home', title: 'Home Office / Remote Work', desc: 'Bills, personal documents, assignments & occasional photos' },
                  { id: 'small-biz', title: 'Small Business (2-10 Users)', desc: 'Client invoices, proposals, presentations & day-to-day admin' },
                  { id: 'enterprise', title: 'Busy Enterprise / Department', desc: 'High-speed heavy volume contracts, reports & logistics forms' },
                  { id: 'creative', title: 'Creative Studio / Architecture', desc: 'Color graphics, marketing materials or wide-format blueprints' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAnswers({ ...answers, primaryUse: item.id });
                      setStep(2);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.primaryUse === item.id
                        ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-500'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-sm font-bold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 2 of 4</span>
                <button onClick={() => setStep(1)} className="text-xs text-slate-500 hover:text-slate-800">Back</button>
              </div>
              <h4 className="text-lg font-bold text-slate-900">Do you need Color, or is Monochrome (Black & White) sufficient?</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    setAnswers({ ...answers, colorNeed: 'mono' });
                    setStep(3);
                  }}
                  className="p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 text-left transition-all cursor-pointer"
                >
                  <div className="text-sm font-bold text-slate-900">Black & White Only (Monochrome)</div>
                  <div className="text-xs text-slate-500 mt-1">Faster printing, lowest hardware cost, maximum toner yield for text documents.</div>
                </button>

                <button
                  onClick={() => {
                    setAnswers({ ...answers, colorNeed: 'color' });
                    setStep(3);
                  }}
                  className="p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 text-left transition-all cursor-pointer"
                >
                  <div className="text-sm font-bold text-slate-900">Full Color Printing</div>
                  <div className="text-xs text-slate-500 mt-1">Essential for sales collateral, charts, photos, marketing flyers, and color letterheads.</div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 3 of 4</span>
                <button onClick={() => setStep(2)} className="text-xs text-slate-500 hover:text-slate-800">Back</button>
              </div>
              <h4 className="text-lg font-bold text-slate-900">Estimated monthly pages printed:</h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'low', title: 'Light Volume', desc: 'Under 500 pages/mo' },
                  { id: 'med', title: 'Moderate Volume', desc: '500 – 2,500 pages/mo' },
                  { id: 'high', title: 'Heavy Commercial', desc: '2,500+ pages/mo' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAnswers({ ...answers, monthlyVolume: item.id });
                      setStep(4);
                    }}
                    className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 text-left transition-all cursor-pointer"
                  >
                    <div className="text-sm font-bold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Question 4 of 4</span>
                <button onClick={() => setStep(3)} className="text-xs text-slate-500 hover:text-slate-800">Back</button>
              </div>
              <h4 className="text-lg font-bold text-slate-900">Which features are most important to you? (Select all that apply)</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Lowest Ink Cost',
                  'High Print Speed',
                  'Auto Duplex (2-sided)',
                  'Auto Document Feeder (ADF)',
                  'Wireless AirPrint / Wi-Fi',
                  'Compact Footprint'
                ].map((feat) => (
                  <button
                    key={feat}
                    onClick={() => toggleFeature(feat)}
                    className={`p-3 rounded-lg border text-left text-xs font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                      answers.mustHaveFeatures.includes(feat)
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{feat}</span>
                    {answers.mustHaveFeatures.includes(feat) && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-end">
                <button
                  onClick={() => setStep(5)}
                  className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>See My Recommendations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Your Top Printer Matches
                </span>
                <h4 className="text-xl font-bold text-slate-900 font-display">Recommended For Your Specific Needs</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matched.map(({ printer, score }) => (
                  <div key={printer.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[11px] font-bold">
                          {score}% Match
                        </span>
                        <span className="text-xs font-bold text-slate-800">${printer.price.toFixed(2)}</span>
                      </div>

                      <div className="h-32 rounded-lg bg-white overflow-hidden p-2 flex items-center justify-center border border-slate-200 mb-2">
                        <img src={printer.image} alt={printer.name} className="h-full object-contain" referrerPolicy="no-referrer" />
                      </div>

                      <h5 className="text-sm font-bold text-slate-900 line-clamp-1">{printer.name}</h5>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{printer.idealFor}</p>

                      <div className="mt-2 text-[11px] text-slate-600 space-y-1">
                        <div className="flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-blue-600" />
                          <span>Speed: {printer.specs.printSpeedPpm} PPM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                          <span>{printer.rating} ({printer.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                      <button
                        onClick={() => {
                          onSelectPrinter(printer);
                          onClose();
                        }}
                        className="py-1.5 px-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg text-center cursor-pointer"
                      >
                        View Specs
                      </button>
                      <button
                        onClick={() => {
                          onAddToCart(printer);
                          onClose();
                        }}
                        className="py-1.5 px-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center cursor-pointer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Quiz</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
