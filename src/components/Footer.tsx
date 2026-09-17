import React from 'react';
import { 
  Printer as PrinterIcon, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Lock, 
  CreditCard,
  AlertTriangle
} from 'lucide-react';
import { PolicyModalType } from '../types';

interface FooterProps {
  onOpenPolicy: (type: PolicyModalType) => void;
  onOpenQuiz: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onOpenQuiz,
  onOpenCalculator
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <PrinterIcon className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PrintTech<span className="text-blue-500">Direct</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              PrintTech Direct Solutions LLC is an independent commercial retailer specializing in factory-sealed laser, eco-tank, and multifunction office printers. Fast nationwide shipping with direct manufacturer warranties.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>450 Technology Parkway, Suite 300, Peachtree Corners, GA 30092</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Toll-Free: 1-888-676-9138 (Mon-Fri 8am-8pm EST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Email: support@printtechdirect.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Printer Matchmaker Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cost-Per-Page TCO Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Order Tracking & Delivery Times
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bulk Fleet / PO Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Policies (Google Ads Requirement) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Policies & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-white transition-colors cursor-pointer underline text-left"
                >
                  Privacy Policy (CCPA / GDPR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('returns')}
                  className="hover:text-white transition-colors cursor-pointer underline text-left"
                >
                  30-Day Return & Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-white transition-colors cursor-pointer underline text-left"
                >
                  Shipping & Freight Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-white transition-colors cursor-pointer underline text-left"
                >
                  Terms & Conditions of Sale
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer underline text-left text-amber-300"
                >
                  Independent Retailer Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Security & Payment
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <Lock className="w-4 h-4 shrink-0" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <RotateCcw className="w-4 h-4 shrink-0" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Genuine Factory Warranties</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 mb-1.5">Accepted Payment Methods:</div>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-slate-300">
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">VISA</span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Mastercard</span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">AMEX</span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Discover</span>
                <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">PayPal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Google Ads Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[10px]">
            <AlertTriangle className="w-3.5 h-3.5" />
            Official Trademark Notice & Independent Retailer Disclosure
          </div>
          <p>
            PrintTech Direct is an independent commercial retailer and hardware distributor. We sell genuine factory-sealed printing equipment and supplies. We are not an official brand repair helpline or technical support service provider.
          </p>
          <p>
            All product names, logos, and brands (including Brother®, HP®, Canon®, Epson®, Xerox®, and others) are the registered trademarks of their respective owners. The use of these trademarks on this website is strictly for identification, product compatibility, and descriptive purposes under fair use doctrine and does not imply any direct affiliation, partnership, or endorsement by the trademark holders.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PrintTech Direct Solutions LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-slate-300">
              Privacy
            </button>
            <span>•</span>
            <button onClick={() => onOpenPolicy('terms')} className="hover:text-slate-300">
              Terms
            </button>
            <span>•</span>
            <button onClick={() => onOpenPolicy('returns')} className="hover:text-slate-300">
              Returns
            </button>
            <span>•</span>
            <button onClick={() => onOpenPolicy('disclaimer')} className="hover:text-slate-300">
              Disclaimers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
