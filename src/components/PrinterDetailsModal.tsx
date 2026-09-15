import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Check, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Download, 
  ShoppingCart, 
  FileText, 
  Layers, 
  Zap, 
  Wifi, 
  Box, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { Printer } from '../types';

interface PrinterDetailsModalProps {
  printer: Printer | null;
  onClose: () => void;
  onAddToCart: (printer: Printer, extendedWarranty: boolean) => void;
  onRequestQuote: (printer: Printer) => void;
  onOpenPolicy: (key: string) => void;
}

export const PrinterDetailsModal: React.FC<PrinterDetailsModalProps> = ({
  printer,
  onClose,
  onAddToCart,
  onRequestQuote,
  onOpenPolicy
}) => {
  const [includeProtection, setIncludeProtection] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);

  if (!printer) return null;

  const protectionPlanPrice = 49.99;
  const totalPrice = printer.price + (includeProtection ? protectionPlanPrice : 0);

  const handleDownloadSpecSheet = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-blue-600 text-white">
              {printer.brand}
            </span>
            <span className="text-xs font-mono text-slate-500">Model: {printer.modelCode}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Top Section: Photo & Primary Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center p-4">
                <img
                  src={printer.image}
                  alt={printer.name}
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
                {printer.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase rounded-md bg-blue-600 text-white shadow-xs">
                    {printer.badge}
                  </span>
                )}
              </div>

              {/* Spec sheet download button */}
              <button
                onClick={handleDownloadSpecSheet}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Official OEM Spec Sheet (PDF)</span>
              </button>

              {downloadNotice && (
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Spec sheet for {printer.modelCode} generated successfully.</span>
                </div>
              )}
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm font-bold text-slate-800">{printer.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-xs text-slate-400">({printer.reviewCount} customer reviews)</span>
                  <span className="text-xs text-emerald-700 font-semibold ml-auto flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> In Stock & Verified
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 leading-tight font-display">
                  {printer.name}
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {printer.description}
                </p>
              </div>

              {/* Pricing breakdown */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-slate-900">
                      ${printer.price.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm text-slate-400 line-through">
                      ${printer.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-100 text-emerald-800">
                    Free 2-Day Shipping
                  </span>
                </div>

                {/* Optional Extended Warranty Checkbox */}
                <label className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-200 hover:border-blue-400 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={includeProtection}
                    onChange={(e) => setIncludeProtection(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      Add 3-Year PrintTech Commercial Care Protection (+${protectionPlanPrice.toFixed(2)})
                    </div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Zero-deductible advance replacement, roller repair, and power surge coverage.
                    </div>
                  </div>
                </label>

                {/* Checkout & Quote CTA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => {
                      onAddToCart(printer, includeProtection);
                      onClose();
                    }}
                    className="py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart (${totalPrice.toFixed(2)})</span>
                  </button>

                  <button
                    onClick={() => {
                      onRequestQuote(printer);
                      onClose();
                    }}
                    className="py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm transition-colors cursor-pointer text-center"
                  >
                    Request Bulk Fleet Quote
                  </button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
                  <button onClick={() => onOpenPolicy('returns')} className="underline hover:text-slate-900">
                    30-Day Money-Back Guarantee
                  </button>
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" />
                  <button onClick={() => onOpenPolicy('shipping')} className="underline hover:text-slate-900">
                    Ships in 24 Hours
                  </button>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Factory Sealed OEM</span>
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Technical Specifications Table */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Comprehensive Technical Specifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Print Speed (Black)</span>
                <span className="font-bold text-slate-900">{printer.specs.printSpeedPpm} Pages Per Minute (PPM)</span>
              </div>

              {printer.specs.colorSpeedPpm && (
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Print Speed (Color)</span>
                  <span className="font-bold text-slate-900">{printer.specs.colorSpeedPpm} Pages Per Minute (PPM)</span>
                </div>
              )}

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Monthly Duty Cycle</span>
                <span className="font-bold text-slate-900">{printer.specs.monthlyDutyCycle.toLocaleString()} pages / month</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Print Resolution</span>
                <span className="font-bold text-slate-900">{printer.specs.resolutionDpi}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Paper Tray Capacity</span>
                <span className="font-bold text-slate-900">{printer.specs.paperTrayCapacity} sheets (standard tray)</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Automatic Duplex</span>
                <span className="font-bold text-slate-900">{printer.specs.duplexPrinting ? 'Yes (Auto 2-Sided)' : 'Manual'}</span>
              </div>

              {printer.specs.adfCapacity && (
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Auto Document Feeder (ADF)</span>
                  <span className="font-bold text-slate-900">{printer.specs.adfCapacity} sheets</span>
                </div>
              )}

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Est. Cost Per Page (Mono)</span>
                <span className="font-bold text-emerald-700">{printer.specs.costPerPageMono}¢ / page</span>
              </div>

              {printer.specs.costPerPageColor && (
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Est. Cost Per Page (Color)</span>
                  <span className="font-bold text-emerald-700">{printer.specs.costPerPageColor}¢ / page</span>
                </div>
              )}

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Connectivity Interfaces</span>
                <span className="font-bold text-slate-900">{printer.specs.connectivity.join(', ')}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Unit Dimensions</span>
                <span className="font-bold text-slate-900">{printer.specs.dimensions}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Hardware Weight</span>
                <span className="font-bold text-slate-900">{printer.specs.weightLbs} lbs</span>
              </div>
            </div>
          </div>

          {/* Key Product Features */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Core Capabilities & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {printer.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's in the Box & Warranty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Box className="w-4 h-4 text-blue-600" />
                Factory Box Contents
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {printer.includedInBox.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                Official Manufacturer Warranty
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {printer.warranty}
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Hardware is registered with the manufacturer upon delivery. Service can be completed directly through certified OEM service centers or coordinated via PrintTech Direct.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Need technical compatibility help? Call toll-free: <strong>1-800-555-PRINT</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
