import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  FileText, 
  AlertCircle, 
  Phone, 
  Building2,
  Calendar,
  Lock
} from 'lucide-react';
import { POLICIES, PolicyContent } from '../data/policies';
import { PolicyModalType } from '../types';

interface PolicyModalProps {
  initialTab: PolicyModalType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ initialTab, onClose }) => {
  const [activeTab, setActiveTab] = useState<PolicyModalType>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const tabs: { key: PolicyModalType; label: string; icon: React.ReactNode }[] = [
    { key: 'privacy', label: 'Privacy Policy', icon: <Lock className="w-4 h-4" /> },
    { key: 'returns', label: '30-Day Returns & Refunds', icon: <RotateCcw className="w-4 h-4" /> },
    { key: 'shipping', label: 'Shipping & Delivery', icon: <Truck className="w-4 h-4" /> },
    { key: 'disclaimer', label: 'Trademark Disclaimer', icon: <AlertCircle className="w-4 h-4" /> },
    { key: 'terms', label: 'Terms of Service', icon: <FileText className="w-4 h-4" /> },
    { key: 'contact', label: 'Company Transparency', icon: <Building2 className="w-4 h-4" /> },
  ];

  const currentPolicy: PolicyContent = POLICIES[activeTab] || POLICIES.privacy;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                Legal & Advertising Compliance Policies
              </h3>
              <p className="text-xs text-slate-500">
                Official disclosures aligned with Google Ads Advertising Policies
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Close policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-slate-100/70 border-b border-slate-200 px-6 py-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Policy Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* Header of Active Document */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                {currentPolicy.badge}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Last Updated: {currentPolicy.lastUpdated}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 font-display">
              {currentPolicy.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-medium bg-slate-50 p-3 rounded-lg border border-slate-200">
              {currentPolicy.summary}
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {currentPolicy.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  {section.heading}
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {section.body.map((pText, pIdx) => (
                    <p key={pIdx}>{pText}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trademark Disclaimer Callout for Google Ads */}
          {activeTab === 'disclaimer' && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
              <span className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Notice to Consumers & Google Ads Policy Reviewers
              </span>
              <p className="leading-relaxed">
                PrintTech Direct sells genuine physical printers, toner, ink, and associated hardware. We DO NOT offer or solicit consumer computer or printer phone technical repair services, nor do we run remote-access desktop repair operations.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Questions regarding our policies? Call <strong>1-800-555-PRINT</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
