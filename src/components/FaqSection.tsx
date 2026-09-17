import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How do I get help with printer setup, unboxing, Wi-Fi pairing, and driver installation?',
    answer: 'Every printer package includes standard OEM quick-start setup guides and driver installation manuals. If you need step-by-step assistance with unboxing, removing protective shipping locks, wireless Wi-Fi pairing, or computer driver downloads, our equipment support team is available toll-free at 1-888-676-9138.'
  },
  {
    question: 'Are all printers brand new and factory sealed with toner/ink included?',
    answer: 'Yes, 100%. Every printer sold by PrintTech Direct is brand new, factory sealed in original OEM packaging, and includes standard initial starter supplies (toner cartridges for lasers or high-yield ink bottles for Supertank models), power cables, setup guides, and manufacturer warranty registration documents.'
  },
  {
    question: 'What is your 30-Day Return and Refund Policy?',
    answer: 'We provide an unconditional 30-calendar-day return window from your confirmed delivery date. If an item arrives damaged or defective, we provide an immediate prepaid return shipping label and issue a 100% full refund or replacement with zero restocking fees.'
  },
  {
    question: 'How fast do orders ship, and how much is shipping?',
    answer: 'Shipping is 100% FREE on all hardware orders of $99 or more throughout the contiguous 48 states. Orders placed before 3:00 PM EST (Monday–Friday) are dispatched the exact same business day via FedEx or UPS Ground. Real-time courier tracking numbers are emailed as soon as the package is scanned.'
  },
  {
    question: 'How do manufacturer warranties work?',
    answer: 'All equipment includes official 1-year to 3-year manufacturer limited hardware warranties. Your serial numbers are recorded at dispatch. You can service hardware directly through certified brand warranty repair centers or reach out to our Peachtree Corners support desk for assistance.'
  },
  {
    question: 'Is PrintTech Direct an independent retailer or official technical support repair?',
    answer: 'PrintTech Direct is an independent commercial equipment retailer and distributor of office hardware, copiers, and consumables. We do NOT provide paid consumer phone tech-support services or remote desktop virus repairs. All brand names (HP, Brother, Canon, Epson, Xerox) are trademarks of their respective owners and used solely for compatibility and product identification.'
  },
  {
    question: 'Can I request a commercial purchase order (PO) or tax-exempt quote?',
    answer: 'Absolutely. We support commercial net-30 terms, educational institutions, government contracts, and volume fleet deployments. Use our "Request Bulk Fleet Quote" button or contact enterprise@printtechdirect.com.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Buyer Questions & Policy Clarifications
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Everything you need to know about delivery, warranties, toner yields, and return policies.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white transition-colors">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pre-purchase call support highlight */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Still have questions before ordering?</div>
              <div className="text-xs text-slate-500">Speak directly with an equipment specialist: Mon-Fri 8am-8pm EST</div>
            </div>
          </div>
          <a
            href="tel:18886769138"
            className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors shadow-xs"
          >
            Call 1-888-676-9138
          </a>
        </div>
      </div>
    </section>
  );
};
