export type PrinterCategory = 
  | 'all'
  | 'color-laser'
  | 'mono-laser'
  | 'supertank-inkjet'
  | 'compact-wireless'
  | 'wide-format';

export type PrintTechnology = 'Color Laser' | 'Monochrome Laser' | 'Supertank Inkjet' | 'Precision Inkjet';

export interface PrinterSpec {
  printSpeedPpm: number; // pages per minute
  colorSpeedPpm?: number;
  monthlyDutyCycle: number; // recommended or max pages
  resolutionDpi: string; // e.g., "1200 x 1200 dpi"
  paperTrayCapacity: number; // sheets
  duplexPrinting: boolean;
  adfCapacity?: number; // Automatic Document Feeder sheets
  connectivity: string[]; // ['Wi-Fi 6', 'Ethernet', 'AirPrint', 'USB 3.0', 'NFC']
  inkYieldPages: {
    black: number;
    color?: number;
  };
  costPerPageMono: number; // in cents, e.g. 0.9
  costPerPageColor?: number; // in cents, e.g. 5.8
  dimensions: string; // e.g., "16.1 x 15.6 x 11.2 in"
  weightLbs: number;
}

export interface Printer {
  id: string;
  name: string;
  brand: 'Brother' | 'HP' | 'Canon' | 'Epson' | 'Xerox';
  modelCode: string;
  category: PrinterCategory;
  technology: PrintTechnology;
  shortTagline: string;
  badge?: 'Best Seller' | 'Editor’s Choice' | 'Lowest Cost Per Page' | 'Heavy Duty' | 'Best Value';
  price: number;
  originalPrice: number;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  idealFor: string;
  includedInBox: string[];
  warranty: string;
  specs: PrinterSpec;
  features: string[];
}

export interface CartItem {
  printer: Printer;
  quantity: number;
  extendedWarranty: boolean; // optional 3-year protection
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verifiedBuyer: boolean;
  printerModel: string;
}

export interface FilterState {
  searchQuery: string;
  category: PrinterCategory;
  brand: string;
  technology: string;
  maxPrice: number;
  minPpm: number;
  duplexOnly: boolean;
  wirelessOnly: boolean;
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'speed-desc' | 'rating-desc';
}

export type PolicyModalType = 
  | 'privacy' 
  | 'terms' 
  | 'returns' 
  | 'shipping' 
  | 'disclaimer' 
  | 'contact';

export interface QuizAnswers {
  primaryUse: string;
  colorNeed: string;
  monthlyVolume: string;
  mustHaveFeatures: string[];
  budgetRange: string;
}
