import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('printtech_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('printtech_cookie_consent', 'accepted_all');
    setVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('printtech_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Cookie className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Cookie & Privacy Preferences
            </h4>
          </div>

          <button
            onClick={handleAcceptEssential}
            className="text-slate-400 hover:text-white p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          We use cookies and anonymized measurement tools to process orders securely, personalize product recommendations, and evaluate Google Ads marketing effectiveness under Google Consent standards.
        </p>

        <div className="flex items-center justify-between pt-1 text-xs">
          <button
            onClick={onOpenPrivacyPolicy}
            className="text-blue-400 hover:text-blue-300 underline font-medium cursor-pointer"
          >
            Read Privacy Policy
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAcceptEssential}
              className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium cursor-pointer transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
