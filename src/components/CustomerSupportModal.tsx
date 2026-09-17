import React, { useState } from 'react';
import { 
  X, 
  HelpCircle, 
  PhoneCall, 
  Mail, 
  Sparkles, 
  Calculator, 
  ShieldCheck, 
  Clock,
  Printer as PrinterIcon,
  Wrench,
  Wifi,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { PolicyModalType } from '../types';

interface CustomerSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuiz: () => void;
  onOpenCalculator: () => void;
  onOpenPolicy: (type: PolicyModalType) => void;
  onScrollToContact: () => void;
}

export const CustomerSupportModal: React.FC<CustomerSupportModalProps> = ({
  isOpen,
  onClose,
  onOpenQuiz,
  onOpenCalculator,
  onOpenPolicy,
  onScrollToContact
}) => {
  const [activeTab, setActiveTab] = useState<'support' | 'setup'>('support');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-200 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
              <PrinterIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold font-display text-white leading-tight">
                PrintTech Customer & Setup Help
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300">
                Equipment Specs, Orders & Printer Setup Assistance
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Close assistant pop-up"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex border-b border-slate-200 bg-slate-100 p-1 gap-1 shrink-0">
          <button
            onClick={() => setActiveTab('support')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'support'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Order & Sales Support</span>
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'setup'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Printer Setup Help</span>
          </button>
        </div>

        {/* Content Body - Scrollable on phone screens */}
        <div className="p-4 sm:p-6 space-y-4 text-xs text-slate-600 overflow-y-auto flex-1">
          {/* Main Call Bar */}
          <a
            href="tel:18886769138"
            className="block w-full p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 shadow-md hover:shadow-lg transition-all text-center cursor-pointer font-bold active:scale-[0.99]"
          >
            <div className="flex items-center justify-center gap-2 text-base sm:text-xl font-extrabold">
              <PhoneCall className="w-5 h-5 text-slate-950 animate-bounce shrink-0" />
              <span>Call Toll-Free: 1-888-676-9138</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-950 font-bold mt-1 uppercase tracking-wide">
              Call for your printer help
            </p>
          </a>

          {activeTab === 'setup' ? (
            /* Printer Setup Assistance View */
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                <div className="font-bold text-xs flex items-center gap-1.5 text-emerald-800">
                  <Wrench className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Step-by-Step Printer Installation & Driver Assistance</span>
                </div>
                <p className="text-[11px] leading-relaxed text-emerald-800">
                  Need help unboxing, installing ink/toner, or connecting your printer to your home or office Wi-Fi network? Our support desk can walk you through setup.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-slate-800 text-xs">Quick Setup Checklist:</div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">1. Unboxing & Protective Tape:</strong> Remove all orange shipping lock tabs and protective film inside the cartridge tray.
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
                    <Wifi className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">2. Wi-Fi & Network Pairing:</strong> Connect to your 2.4GHz / 5GHz Wi-Fi using the printer screen or WPS button pairing.
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
                    <FileText className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">3. Driver Downloads & Alignment:</strong> Download original drivers from official brand sites and run an initial test print page.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Standard Customer Support View */
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuiz();
                  }}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-300 text-left transition-all cursor-pointer space-y-0.5 min-h-[44px]"
                >
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>60s Printer Quiz</span>
                  </div>
                  <p className="text-[10px] text-slate-500 line-clamp-1">
                    Match laser or supertank models
                  </p>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenCalculator();
                  }}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/60 hover:border-emerald-300 text-left transition-all cursor-pointer space-y-0.5 min-h-[44px]"
                >
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-xs">
                    <Calculator className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cost Calculator</span>
                  </div>
                  <p className="text-[10px] text-slate-500 line-clamp-1">
                    Calculate 3-year running costs
                  </p>
                </button>
              </div>

              {/* Printer Setup Banner Link */}
              <button
                onClick={() => setActiveTab('setup')}
                className="w-full p-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors text-left flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold">Need Help Setting Up Your Printer?</div>
                    <div className="text-[10px] text-slate-300">View installation guides & Wi-Fi pairing help</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400 underline">View Guide</span>
              </button>
            </div>
          )}

          {/* Official Contact Info Box */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="font-bold text-slate-900 flex items-center justify-between text-[11px]">
              <span>Official PrintTech Direct Support</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                <Clock className="w-3 h-3 text-emerald-600" />
                24/7 Hotline Support
              </span>
            </div>

            <div className="space-y-1 text-[11px]">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <PhoneCall className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Toll-Free Phone: 1-888-676-9138</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Email Support: support@printtechdirect.com</span>
              </div>
            </div>
          </div>

          {/* Policy Links */}
          <div className="pt-1 flex items-center justify-between gap-2 text-[11px]">
            <button
              onClick={() => {
                onClose();
                onOpenPolicy('returns');
              }}
              className="text-blue-600 hover:underline font-semibold flex items-center gap-1 cursor-pointer min-h-[36px]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>30-Day Return Policy</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenPolicy('contact');
              }}
              className="text-slate-600 hover:text-slate-900 font-medium underline cursor-pointer min-h-[36px]"
            >
              Company Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
