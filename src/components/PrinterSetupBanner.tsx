import React from 'react';
import { Wrench, PhoneCall, Wifi, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PrinterSetupBannerProps {
  onOpenSupportModal: () => void;
}

export const PrinterSetupBanner: React.FC<PrinterSetupBannerProps> = ({ onOpenSupportModal }) => {
  return (
    <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5 text-blue-400" />
              <span>Printer Setup & Installation Assistance</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Need Assistance Setting Up Your New Printer?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Whether you bought an Epson EcoTank, Brother Laser, or HP LaserJet, our technical specialists provide step-by-step unboxing, Wi-Fi connectivity, and driver configuration guidance.
            </p>
          </div>

          <a
            href="tel:18886769138"
            className="px-5 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2.5 shrink-0 active:scale-95 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-slate-950 animate-bounce" />
            <span>Call Setup Help: 1-888-676-9138</span>
          </a>
        </div>

        {/* 4 Step Setup Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Unboxing & Tapes</span>
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Safely strip all protective shipping tape, styrofoam locks, and orange transport tab clips from internal bays.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>Ink / Toner Prep</span>
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Fill Supertank ink wells or unseal toner cartridges. Ensure seal strip tape is completely removed before insertion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Wi-Fi & Network</span>
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Pair your printer wirelessly to your router using WPS mode, screen Wi-Fi wizard, or USB setup connection.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Drivers & Print Test</span>
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Install original manufacturer drivers for Windows or Mac and run a test alignment page for crisp printing.
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-slate-800">
          <div className="text-slate-400 text-[11px] text-center sm:text-left">
            Have questions about error codes, paper jams, or wireless pairing? Speak with our desk anytime.
          </div>
          <button
            onClick={onOpenSupportModal}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Launch Setup Assistance Popup
          </button>
        </div>
      </div>
    </section>
  );
};
