import React, { useState } from 'react';
import { 
  Printer as PrinterIcon, 
  Search, 
  PhoneCall, 
  ShoppingCart, 
  Scale, 
  Sparkles, 
  Calculator, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Menu,
  X
} from 'lucide-react';
import { PrinterCategory } from '../types';

interface HeaderProps {
  activeCategory: PrinterCategory;
  onSelectCategory: (category: PrinterCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenQuiz: () => void;
  onOpenCalculator: () => void;
  onOpenPolicy: (policyKey: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  compareCount,
  onOpenCompare,
  onOpenQuiz,
  onOpenCalculator,
  onOpenPolicy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories: { id: PrinterCategory; label: string }[] = [
    { id: 'all', label: 'All Printers' },
    { id: 'color-laser', label: 'Color Laser' },
    { id: 'mono-laser', label: 'Monochrome Laser' },
    { id: 'supertank-inkjet', label: 'EcoTank / Supertank' },
    { id: 'compact-wireless', label: 'Compact Home Office' },
    { id: 'wide-format', label: 'Wide-Format (11x17+)' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Compliance & Trust Ribbon for Google Ads Quality Score */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Truck className="w-3.5 h-3.5" />
              Free Expedited Delivery on Orders $99+
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
              30-Day Hassle-Free Returns
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Genuine Factory Sealed OEM Hardware
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => onOpenPolicy('disclaimer')}
              className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
            >
              Independent Retailer Notice
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => onOpenPolicy('contact')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Order Tracking & Help
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Actions Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onSelectCategory('all'); }} 
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
                <PrinterIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                  PrintTech<span className="text-blue-600">Direct</span>
                </span>
                <span className="block text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                  Commercial Printer Marketplace
                </span>
              </div>
            </a>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search models, brands (Brother, HP, Canon, Epson)..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100/80 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Call Us & Utility CTAs */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Phone support for Google Ads verification & high trust */}
            <a 
              href="tel:18005557746"
              id="header-phone-cta"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all text-left"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-500">Sales & Specs Hotline</div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">1-800-555-PRINT</div>
              </div>
            </a>

            {/* Quiz matchmaker button */}
            <button
              id="btn-printer-quiz"
              onClick={onOpenQuiz}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Printer Matchmaker</span>
            </button>

            {/* Ink Calculator button */}
            <button
              id="btn-tco-calculator"
              onClick={onOpenCalculator}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-600" />
              <span>Ink Cost Calc</span>
            </button>

            {/* Compare items button */}
            {compareCount > 0 && (
              <button
                id="btn-header-compare"
                onClick={onOpenCompare}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors cursor-pointer"
              >
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>Compare ({compareCount})</span>
              </button>
            )}

            {/* Shopping Cart button */}
            <button
              id="btn-header-cart"
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 flex items-center justify-center text-[11px] font-bold bg-amber-400 text-slate-950 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search input */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search printers (Brother, HP, Canon, etc.)..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-nav-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2 shadow-lg">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-xs text-slate-600">Questions? Talk to an expert:</div>
            <a href="tel:18005557746" className="text-xs font-bold text-blue-600">1-800-555-PRINT</a>
          </div>
          <button
            onClick={() => { onOpenQuiz(); setMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg"
          >
            <Sparkles className="w-4 h-4" />
            Printer Matchmaker Quiz
          </button>
          <button
            onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
          >
            <Calculator className="w-4 h-4" />
            Total Cost of Ownership Calculator
          </button>
        </div>
      )}
    </header>
  );
};
