import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PRINTERS_DATA } from './data/printers';
import { Printer, PrinterCategory, FilterState, CartItem, PolicyModalType } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FiltersBar } from './components/FiltersBar';
import { PrinterCard } from './components/PrinterCard';
import { PrinterDetailsModal } from './components/PrinterDetailsModal';
import { PrinterFinderModal } from './components/PrinterFinderModal';
import { TcoCalculator } from './components/TcoCalculator';
import { CompareModal } from './components/CompareModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal } from './components/PolicyModal';
import { QuoteModal } from './components/QuoteModal';
import { CookieBanner } from './components/CookieBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  HelpCircle, 
  Sparkles, 
  Calculator, 
  CheckCircle2, 
  SearchX,
  AlertCircle
} from 'lucide-react';

export default function App() {
  // Navigation & Category
  const [activeCategory, setActiveCategory] = useState<PrinterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'all',
    brand: '',
    technology: '',
    maxPrice: 750,
    minPpm: 0,
    duplexOnly: false,
    wirelessOnly: false,
    inStockOnly: true,
    sortBy: 'featured'
  });

  // Modals & Panels State
  const [selectedPrinterForDetails, setSelectedPrinterForDetails] = useState<Printer | null>(null);
  const [selectedPrinterForQuote, setSelectedPrinterForQuote] = useState<Printer | null>(null);
  const [comparedPrinters, setComparedPrinters] = useState<Printer[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<PolicyModalType | null>(null);

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('printtech_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('printtech_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const catalogRef = useRef<HTMLDivElement>(null);

  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Cart operations
  const handleAddToCart = (printer: Printer, extendedWarranty: boolean = false) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.printer.id === printer.id && item.extendedWarranty === extendedWarranty);
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [...prev, { printer, quantity: 1, extendedWarranty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (printerId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(printerId);
      return;
    }
    setCartItems(prev => prev.map(item => item.printer.id === printerId ? { ...item, quantity } : item));
  };

  const handleRemoveCartItem = (printerId: string) => {
    setCartItems(prev => prev.filter(item => item.printer.id !== printerId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Compare operations
  const handleToggleCompare = (printer: Printer) => {
    setComparedPrinters(prev => {
      const exists = prev.some(p => p.id === printer.id);
      if (exists) {
        return prev.filter(p => p.id !== printer.id);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 models at a time.');
        return prev;
      }
      return [...prev, printer];
    });
  };

  const handleRemoveCompare = (printerId: string) => {
    setComparedPrinters(prev => prev.filter(p => p.id !== printerId));
  };

  // Category change wrapper
  const handleSelectCategory = (cat: PrinterCategory) => {
    setActiveCategory(cat);
    setFilters(f => ({ ...f, category: cat }));
  };

  // Filtered & Sorted printers
  const filteredPrinters = useMemo(() => {
    return PRINTERS_DATA.filter(printer => {
      // Category check
      if (activeCategory !== 'all' && printer.category !== activeCategory) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = printer.name.toLowerCase().includes(q);
        const matchesBrand = printer.brand.toLowerCase().includes(q);
        const matchesModel = printer.modelCode.toLowerCase().includes(q);
        const matchesTag = printer.shortTagline.toLowerCase().includes(q);
        const matchesTech = printer.technology.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesModel && !matchesTag && !matchesTech) {
          return false;
        }
      }

      // Brand filter
      if (filters.brand && printer.brand !== filters.brand) {
        return false;
      }

      // Technology filter
      if (filters.technology && printer.technology !== filters.technology) {
        return false;
      }

      // Price filter
      if (printer.price > filters.maxPrice) {
        return false;
      }

      // Duplex check
      if (filters.duplexOnly && !printer.specs.duplexPrinting) {
        return false;
      }

      // Wireless check
      if (filters.wirelessOnly) {
        const hasWireless = printer.specs.connectivity.some(c => 
          c.toLowerCase().includes('wi-fi') || c.toLowerCase().includes('airprint')
        );
        if (!hasWireless) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'speed-desc') return b.specs.printSpeedPpm - a.specs.printSpeedPpm;
      if (filters.sortBy === 'rating-desc') return b.rating - a.rating;
      // Default: featured (preserve data order with bestsellers prioritized)
      return 0;
    });
  }, [activeCategory, searchQuery, filters]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setFilters({
      searchQuery: '',
      category: 'all',
      brand: '',
      technology: '',
      maxPrice: 750,
      minPpm: 0,
      duplexOnly: false,
      wirelessOnly: false,
      inStockOnly: true,
      sortBy: 'featured'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header with Navigation and Compliance Bar */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        compareCount={comparedPrinters.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenPolicy={(key) => setActivePolicyModal(key as PolicyModalType)}
      />

      {/* Hero Banner with Direct Google Ads Trust Factors */}
      <Hero
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onScrollToCatalog={scrollToCatalog}
        onOpenPolicy={(key) => setActivePolicyModal(key as PolicyModalType)}
      />

      {/* Main Catalog Body */}
      <main ref={catalogRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 flex-1 w-full">
        {/* Policy Clarity Notice */}
        <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Transparent Shopping Guarantee:</strong> Every unit is brand new, includes OEM starter ink/toner, and is covered by our <strong>30-day money-back guarantee</strong>.
            </span>
          </div>
          <button
            onClick={() => setActivePolicyModal('returns')}
            className="text-blue-700 hover:text-blue-900 font-bold underline whitespace-nowrap cursor-pointer"
          >
            Review 30-Day Return Terms
          </button>
        </div>

        {/* Filters and Sorting Controls */}
        <FiltersBar
          filters={filters}
          onChangeFilters={setFilters}
          onResetFilters={handleResetFilters}
          totalCount={filteredPrinters.length}
        />

        {/* Product Cards Grid */}
        {filteredPrinters.length === 0 ? (
          <div className="py-16 text-center space-y-4 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              No printers match your current filter selection
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your max budget slider, clearing brand filters, or switching category tabs.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPrinters.map(printer => (
              <PrinterCard
                key={printer.id}
                printer={printer}
                onSelect={(p) => setSelectedPrinterForDetails(p)}
                onAddToCart={(p) => handleAddToCart(p, false)}
                onToggleCompare={handleToggleCompare}
                isCompared={comparedPrinters.some(p => p.id === printer.id)}
                onRequestQuote={(p) => setSelectedPrinterForQuote(p)}
              />
            ))}
          </div>
        )}

        {/* Interactive Value Teaser: TCO & Ink Savings Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
              Cost-Per-Page Insights
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight font-display">
              Wondering whether Laser or Supertank saves more money?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Use our interactive 3-Year Total Cost of Ownership calculator to simulate toner versus bottle refills for your exact monthly printing volume.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Ink Cost Calculator</span>
            </button>
            <button
              onClick={() => setIsQuizOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Take 60s Matchmaker</span>
            </button>
          </div>
        </div>

        {/* Commercial Buyer Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Direct Warehouse Freight</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Heavy equipment is crated and secured with foam padding. Nationwide courier tracking is assigned immediately upon shipment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Zero Restocking Fee Guarantee</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              If an item is damaged or defective upon arrival, we provide an immediate prepaid return label and 100% full refund or replacement.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Registered OEM Warranties</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              You receive genuine manufacturer coverage (1 to 3 years) with access to authorized repair depot networks across the United States.
            </p>
          </div>
        </div>
      </main>

      {/* Verified Reviews Section */}
      <ReviewsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Business Transparency & Contact Section */}
      <ContactSection />

      {/* Comprehensive Legal & Compliance Footer */}
      <Footer
        onOpenPolicy={(policy) => setActivePolicyModal(policy)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Modals & Slide-outs */}
      <PrinterDetailsModal
        printer={selectedPrinterForDetails}
        onClose={() => setSelectedPrinterForDetails(null)}
        onAddToCart={handleAddToCart}
        onRequestQuote={(p) => setSelectedPrinterForQuote(p)}
        onOpenPolicy={(policy) => setActivePolicyModal(policy as PolicyModalType)}
      />

      {isQuizOpen && (
        <PrinterFinderModal
          printers={PRINTERS_DATA}
          onClose={() => setIsQuizOpen(false)}
          onSelectPrinter={(p) => setSelectedPrinterForDetails(p)}
          onAddToCart={(p) => handleAddToCart(p, false)}
        />
      )}

      {isCalculatorOpen && (
        <TcoCalculator
          onClose={() => setIsCalculatorOpen(false)}
          onFilterSupertank={() => handleSelectCategory('supertank-inkjet')}
          onFilterLaser={() => handleSelectCategory('color-laser')}
        />
      )}

      {isCompareOpen && (
        <CompareModal
          printers={comparedPrinters}
          onClose={() => setIsCompareOpen(false)}
          onRemove={handleRemoveCompare}
          onSelectPrinter={(p) => setSelectedPrinterForDetails(p)}
          onAddToCart={(p) => handleAddToCart(p, false)}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        onOpenPolicy={(policy) => setActivePolicyModal(policy as PolicyModalType)}
      />

      {isCheckoutOpen && (
        <CheckoutModal
          items={cartItems}
          onClose={() => setIsCheckoutOpen(false)}
          onClearCart={handleClearCart}
          onOpenPolicy={(policy) => setActivePolicyModal(policy as PolicyModalType)}
        />
      )}

      {selectedPrinterForQuote && (
        <QuoteModal
          printer={selectedPrinterForQuote}
          onClose={() => setSelectedPrinterForQuote(null)}
        />
      )}

      {activePolicyModal && (
        <PolicyModal
          initialTab={activePolicyModal}
          onClose={() => setActivePolicyModal(null)}
        />
      )}

      {/* Cookie Consent Banner for Google Ads / Google Consent Mode compliance */}
      <CookieBanner
        onOpenPrivacyPolicy={() => setActivePolicyModal('privacy')}
      />
    </div>
  );
}
