import { Printer } from '../types';

export const PRINTERS_DATA: Printer[] = [
  {
    id: 'pt-hl-l3290',
    name: 'ProLaser 4200CDW All-in-One Color Laser Printer',
    brand: 'Brother',
    modelCode: 'HL-L3290CDW-RET',
    category: 'color-laser',
    technology: 'Color Laser',
    shortTagline: 'High-speed wireless color multifunction laser with duplex printing & cloud scanning',
    badge: 'Best Seller',
    price: 389.99,
    originalPrice: 449.99,
    inStock: true,
    stockCount: 24,
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80',
    description: 'Engineered for demanding small and medium business offices. Delivers laser-sharp rich color graphics and crisp black text at speeds up to 25 pages per minute. Includes versatile 250-sheet adjustable paper tray and flexible wireless mobile connectivity.',
    idealFor: 'Small offices, law firms, accounting desks, and medical clinics needing dependable color documents.',
    includedInBox: [
      'ProLaser 4200CDW Unit',
      'Pre-installed Starter Toner Cartridges (Black ~1,000 pgs, CMY ~1,000 pgs)',
      'Drum Unit Set',
      'AC Power Cord & USB 2.0 Cable',
      'Quick Setup Guide & CD-ROM Installer',
      'Official 1-Year Limited Hardware Warranty Registration'
    ],
    warranty: '1-Year Limited Manufacturer Warranty with Free Lifetime Phone Support',
    specs: {
      printSpeedPpm: 25,
      colorSpeedPpm: 25,
      monthlyDutyCycle: 30000,
      resolutionDpi: '2400 x 600 dpi',
      paperTrayCapacity: 250,
      duplexPrinting: true,
      adfCapacity: 50,
      connectivity: ['Wi-Fi 6', 'Ethernet (10/100)', 'AirPrint', 'Mopria', 'Hi-Speed USB 2.0'],
      inkYieldPages: {
        black: 3000,
        color: 2300,
      },
      costPerPageMono: 2.1,
      costPerPageColor: 8.4,
      dimensions: '16.1 x 18.7 x 16.3 in',
      weightLbs: 48.7
    },
    features: [
      'Automatic 2-Sided Printing (Duplex)',
      'Built-in 50-sheet Automatic Document Feeder',
      'Single-Pass Dual Scanner for fast archiving',
      'Secure Function Lock & Enterprise Security',
      'Mobile printing via Apple AirPrint & Brother iPrint&Scan'
    ]
  },
  {
    id: 'pt-et-4850',
    name: 'EcoTank Pro ET-4850 Supertank All-in-One Inkjet',
    brand: 'Epson',
    modelCode: 'ET-4850-COMM',
    category: 'supertank-inkjet',
    technology: 'Supertank Inkjet',
    shortTagline: 'Cartridge-free supertank printer with up to 2 years of ink in the box',
    badge: 'Lowest Cost Per Page',
    price: 499.99,
    originalPrice: 549.99,
    inStock: true,
    stockCount: 18,
    rating: 4.9,
    reviewCount: 428,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=900&q=80',
    description: 'Drastically reduce printing overhead with high-capacity refillable ink reservoirs. Print up to 7,500 black pages and 6,000 color pages right out of the box. Powered by PrecisionCore Heat-Free technology for crisp, instant-drying documents.',
    idealFor: 'Busy work-from-home pros, non-profits, and educational offices looking to slash ink costs by up to 85%.',
    includedInBox: [
      'EcoTank Pro ET-4850 All-in-One Unit',
      'Full Set of High-Capacity T502 EcoTank Ink Bottles (Black, Cyan, Magenta, Yellow)',
      'AC Power Cord',
      'Software CD-ROM & Quick Guide',
      '2-Year Limited Warranty with Product Registration'
    ],
    warranty: '2-Year Limited Hardware Warranty with Advance Exchange Protection',
    specs: {
      printSpeedPpm: 15.5,
      colorSpeedPpm: 8.5,
      monthlyDutyCycle: 20000,
      resolutionDpi: '4800 x 1200 optimized dpi',
      paperTrayCapacity: 250,
      duplexPrinting: true,
      adfCapacity: 35,
      connectivity: ['Wi-Fi Direct', 'Ethernet', 'Apple AirPrint', 'Mopria', 'Hi-Speed USB'],
      inkYieldPages: {
        black: 7500,
        color: 6000,
      },
      costPerPageMono: 0.3,
      costPerPageColor: 0.9,
      dimensions: '16.4 x 19.8 x 10.0 in',
      weightLbs: 15.8
    },
    features: [
      'Zero Cartridge Waste - Clean Keyed Bottle Refilling',
      '2.4-inch Color Touchscreen Navigation',
      'Automatic Two-Sided Printing & 35-Sheet ADF',
      'Ultra-Low Running Cost under 1¢ per page',
      'Voice-activated hands-free printing compatible'
    ]
  },
  {
    id: 'pt-lj-m404dn',
    name: 'LaserEnterprise M404 Heavy-Duty Monochrome Printer',
    brand: 'HP',
    modelCode: 'M404DN-CORP',
    category: 'mono-laser',
    technology: 'Monochrome Laser',
    shortTagline: 'Ultra-fast 40 PPM mono laser with enterprise hardware security',
    badge: 'Heavy Duty',
    price: 329.99,
    originalPrice: 379.99,
    inStock: true,
    stockCount: 35,
    rating: 4.7,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    description: 'Designed to keep high-volume offices moving forward. Blazing fast first-page-out time in as little as 6.1 seconds and speeds up to 40 pages per minute. Best-in-class embedded security helps detect and stop digital attacks at startup.',
    idealFor: 'Logistics fulfillment, legal document printing, medical records, and corporate workgroups with high volume monochrome demands.',
    includedInBox: [
      'LaserEnterprise M404dn Unit',
      'Pre-installed HP Black Original LaserJet Toner (~1,500 pgs)',
      'Getting Started Guide & Setup Poster',
      'Power Cable & Gigabit Ethernet Patch Cord',
      '1-Year Bench/Depot Commercial Warranty'
    ],
    warranty: '1-Year Commercial Warranty with Next-Business-Day Part Replacement',
    specs: {
      printSpeedPpm: 40,
      monthlyDutyCycle: 80000,
      resolutionDpi: '1200 x 1200 dpi HP FastRes',
      paperTrayCapacity: 350,
      duplexPrinting: true,
      connectivity: ['Gigabit Ethernet 10/100/1000', 'Hi-Speed USB 2.0 Host/Device', 'AirPrint'],
      inkYieldPages: {
        black: 10000, // High yield option
      },
      costPerPageMono: 1.2,
      dimensions: '15.0 x 14.0 x 8.5 in',
      weightLbs: 18.9
    },
    features: [
      'Lightning-Fast 40 Pages Per Minute',
      'Built-in Ethernet & Fleet Management Tools',
      'Deep Enterprise Security & PIN Code Print Release',
      'Compact footprint fits easily on front-office desks',
      'Energy Star 3.0 & EPEAT Silver Certified'
    ]
  },
  {
    id: 'pt-gx-7021',
    name: 'MegaTank GX7021 Business Duplex Wireless All-in-One',
    brand: 'Canon',
    modelCode: 'GX7021-MAX',
    category: 'supertank-inkjet',
    technology: 'Supertank Inkjet',
    shortTagline: 'Heavy-volume ink tank with dual 250-sheet cassettes & single-pass duplex scan',
    badge: 'Editor’s Choice',
    price: 649.99,
    originalPrice: 729.99,
    inStock: true,
    stockCount: 12,
    rating: 4.9,
    reviewCount: 164,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
    description: 'Built for high-volume commercial throughput without the toner premium. Features 4 pigment-based inks for smudge-resistant, highlighter-proof business proposals. Dual paper cassettes provide 600-sheet combined input capacity.',
    idealFor: 'Architects, engineering firms, real estate agencies, and graphic consultancies requiring sharp color charts and water-resistant prints.',
    includedInBox: [
      'MegaTank GX7021 All-in-One',
      'Complete Set of GI-26 Pigment Ink Bottles (Black, Cyan, Magenta, Yellow)',
      'Modular User-Replaceable Maintenance Cartridge',
      'Power Cord & RJ-11 Phone Cord for Fax',
      'Documentation & 3-Year/80,000-page Limited Warranty'
    ],
    warranty: '3-Year or 80,000-Page Limited Hardware Warranty',
    specs: {
      printSpeedPpm: 24,
      colorSpeedPpm: 15.5,
      monthlyDutyCycle: 45000,
      resolutionDpi: '600 x 1200 dpi',
      paperTrayCapacity: 600,
      duplexPrinting: true,
      adfCapacity: 50,
      connectivity: ['Dual Band Wi-Fi (2.4/5GHz)', 'Gigabit Ethernet', 'AirPrint', 'Mopria', 'USB'],
      inkYieldPages: {
        black: 9000,
        color: 14000, // in Economy Mode
      },
      costPerPageMono: 0.4,
      costPerPageColor: 1.1,
      dimensions: '15.8 x 16.2 x 12.4 in',
      weightLbs: 28.6
    },
    features: [
      'Dual 250-Sheet Bottom Cassettes + 100-Sheet Rear Tray',
      'Water-Resistant All-Pigment 4-Color Inks',
      'Single-Pass 2-Sided Duplex Document Scanning',
      'User-Replaceable Print Heads & Maintenance Box',
      'Comprehensive Fleet Management (SNMP, MIB support)'
    ]
  },
  {
    id: 'pt-c315-color',
    name: 'WorkCentre C315 Color Multifunction Laser System',
    brand: 'Xerox',
    modelCode: 'C315-DNI-GOV',
    category: 'color-laser',
    technology: 'Color Laser',
    shortTagline: 'Enterprise-grade color MFP with integrated fax, Wi-Fi & cloud connectivity',
    badge: 'Heavy Duty',
    price: 529.99,
    originalPrice: 599.99,
    inStock: true,
    stockCount: 16,
    rating: 4.8,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=900&q=80',
    description: 'Compact workhorse designed for workgroups that demand quiet operation, crisp vibrant color marketing collaterals, and intuitive 2.8-inch touchscreen controls. Includes robust mobile print support and standard automatic 2-sided output.',
    idealFor: 'Financial planners, consulting teams, and corporate departments needing professional-grade presentation prints.',
    includedInBox: [
      'WorkCentre C315 Multifunction Laser Printer',
      'Cyan, Magenta, Yellow & Black Starter Print Cartridges (~1,500 pgs)',
      'Software and Documentation Disc',
      'Power Cable & Phone Cord',
      'Standard 1-Year On-Site Manufacturer Warranty'
    ],
    warranty: '1-Year On-Site Service Warranty with Certified Technician Support',
    specs: {
      printSpeedPpm: 35,
      colorSpeedPpm: 35,
      monthlyDutyCycle: 65000,
      resolutionDpi: '1200 x 1200 dpi with 4800 Color Quality',
      paperTrayCapacity: 250,
      duplexPrinting: true,
      adfCapacity: 50,
      connectivity: ['Built-in Wi-Fi 802.11b/g/n', 'Gigabit Ethernet', 'AirPrint', 'Chromebook Ready', 'USB 2.0'],
      inkYieldPages: {
        black: 6000,
        color: 4500,
      },
      costPerPageMono: 1.8,
      costPerPageColor: 7.9,
      dimensions: '16.2 x 15.5 x 13.5 in',
      weightLbs: 45.5
    },
    features: [
      'Fast 35 PPM in both rich color and sharp monochrome',
      '2.8-inch color touchscreen with customizable shortcuts',
      'Integrated Wi-Fi Direct & Cloud Scan-to-Email/Dropbox',
      'Enterprise security suite with 256-bit encryption',
      'Ultra-quiet operation under 48 dBA in active print mode'
    ]
  },
  {
    id: 'pt-pixma-tr8620',
    name: 'HomeOffice TR8620a Wireless Compact All-in-One',
    brand: 'Canon',
    modelCode: 'TR8620A-HOME',
    category: 'compact-wireless',
    technology: 'Precision Inkjet',
    shortTagline: 'Space-saving 5-ink wireless office printer with 4.3" touch display & photo quality',
    badge: 'Best Value',
    price: 189.99,
    originalPrice: 229.99,
    inStock: true,
    stockCount: 42,
    rating: 4.6,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
    description: 'The ultimate compact work-from-home solution. Combines front and rear paper feeding, 20-sheet auto feeder, memory card slot, and exceptional 5-individual ink printing for both sharp text and borderless 8.5x11 photo prints.',
    idealFor: 'Remote workers, freelance creatives, home offices, and personal administrative desks.',
    includedInBox: [
      'TR8620a All-in-One Printer',
      'Complete 5-Color Starter Ink Tank Set (PGI-280 Pigment Black, CLI-281 Dye CMYK)',
      'Power Cord & RJ-11 Phone Cord',
      'Sample 4x6 Photo Paper Pack (3 sheets)',
      '1-Year InstantExchange Manufacturer Warranty'
    ],
    warranty: '1-Year Limited Warranty with InstantExchange Program',
    specs: {
      printSpeedPpm: 15,
      colorSpeedPpm: 10,
      monthlyDutyCycle: 5000,
      resolutionDpi: '4800 x 1200 dpi',
      paperTrayCapacity: 200,
      duplexPrinting: true,
      adfCapacity: 20,
      connectivity: ['Wi-Fi 5', 'Bluetooth 4.2 LE', 'Ethernet', 'AirPrint', 'SD Card Slot', 'USB'],
      inkYieldPages: {
        black: 600,
        color: 820,
      },
      costPerPageMono: 3.2,
      costPerPageColor: 11.5,
      dimensions: '17.3 x 13.8 x 7.5 in',
      weightLbs: 17.4
    },
    features: [
      'Intuitive 4.3-inch Responsive Color LCD Touchscreen',
      'Dual Paper Feeding (100 front cassette + 100 rear photo tray)',
      'SD Card Slot for direct photo preview & printing',
      'Auto duplex 2-sided document printing',
      'Seamless smart phone pairing via Canon PRINT app'
    ]
  },
  {
    id: 'pt-wf-7840',
    name: 'WorkForce Pro WF-7840 Wide-Format Color Multifunction',
    brand: 'Epson',
    modelCode: 'WF-7840-WIDE',
    category: 'wide-format',
    technology: 'Precision Inkjet',
    shortTagline: 'Wide-format printing up to 13" x 19" with 500-sheet capacity & 50-sheet ADF',
    price: 399.99,
    originalPrice: 469.99,
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviewCount: 224,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80',
    description: 'Empower your architectural blueprints, spreadsheets, and marketing flyers with wide-format prints up to 13 x 19 inches and copy/scan up to 11 x 17 inches (Tabloid size). Powered by state-of-the-art PrecisionCore heat-free technology.',
    idealFor: 'Architects, engineering firms, creative agencies, schools, and real estate marketing teams.',
    includedInBox: [
      'WorkForce Pro WF-7840 Unit',
      '4x T812 Initial Ink Cartridges (Black, Cyan, Magenta, Yellow)',
      'Power Cord & Telephone Cord',
      'User Manual & Drivers CD',
      '1-Year Limited Warranty'
    ],
    warranty: '1-Year Limited Commercial Warranty',
    specs: {
      printSpeedPpm: 25,
      colorSpeedPpm: 12,
      monthlyDutyCycle: 50000,
      resolutionDpi: '4800 x 2400 dpi',
      paperTrayCapacity: 500,
      duplexPrinting: true,
      adfCapacity: 50,
      connectivity: ['Wi-Fi 802.11 b/g/n/a/ac', 'Wi-Fi Direct', 'Ethernet (10/100/1000)', 'AirPrint', 'USB'],
      inkYieldPages: {
        black: 2200,
        color: 1100,
      },
      costPerPageMono: 2.4,
      costPerPageColor: 9.8,
      dimensions: '20.3 x 17.7 x 13.8 in',
      weightLbs: 45.4
    },
    features: [
      'Prints up to 13" x 19" & Scans up to 11" x 17" Tabloid size',
      'Dual 250-Sheet Paper Trays + 50-Sheet Rear Specialty Feed',
      '50-Sheet Auto 2-Sided Document Feeder (ADF)',
      '4.3-inch Color Touchscreen with Quick Shortcut Keys',
      'Water & smudge-resistant instant-drying pigment inks'
    ]
  },
  {
    id: 'pt-hl-l2370',
    name: 'CompactSpeed L2370DW Wireless Monochrome Laser',
    brand: 'Brother',
    modelCode: 'HL-L2370DW-RET',
    category: 'mono-laser',
    technology: 'Monochrome Laser',
    shortTagline: 'Ultra-reliable compact black & white laser with 36 PPM and wireless connectivity',
    badge: 'Best Value',
    price: 159.99,
    originalPrice: 179.99,
    inStock: true,
    stockCount: 50,
    rating: 4.8,
    reviewCount: 680,
    image: 'https://images.unsplash.com/photo-1589793463357-5fb813435467?auto=format&fit=crop&w=900&q=80',
    description: 'The definitive office desktop workhorse. Print at lightning speeds up to 36 pages per minute. Enjoy automatic two-sided printing, a generous 250-sheet paper capacity, and robust wireless or Ethernet networking.',
    idealFor: 'Home offices, college dorms, retail checkout stations, and shipping dispatch desks.',
    includedInBox: [
      'CompactSpeed HL-L2370DW Unit',
      'Starter Black Toner Cartridge (~700 pgs)',
      'DR-730 Drum Unit (~12,000 pgs)',
      'AC Power Cord',
      'Quick Setup Guide & CD-ROM',
      '1-Year Limited Warranty with Free Phone Support'
    ],
    warranty: '1-Year Limited Warranty with Free Lifetime Technical Support',
    specs: {
      printSpeedPpm: 36,
      monthlyDutyCycle: 15000,
      resolutionDpi: '2400 x 600 dpi class',
      paperTrayCapacity: 250,
      duplexPrinting: true,
      connectivity: ['Wi-Fi 802.11b/g/n', 'Ethernet (10/100)', 'AirPrint', 'Google Cloud Print ready', 'USB 2.0'],
      inkYieldPages: {
        black: 3000, // TN-760 high yield
      },
      costPerPageMono: 1.6,
      dimensions: '14.0 x 14.2 x 7.2 in',
      weightLbs: 15.9
    },
    features: [
      'Class-leading print speed of up to 36 PPM',
      'Automatic two-sided (Duplex) printing saves paper',
      '250-sheet capacity paper tray adjusts for letter or legal paper',
      'Manual feed slot handles envelopes and cardstock',
      'Toner Save mode helps reduce operating costs'
    ]
  }
];

export const REVIEWS_DATA = [
  {
    id: 'rev-1',
    author: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Vance & Sterling Legal Group',
    rating: 5,
    date: 'August 28, 2026',
    title: 'Flawless throughput for our court filings',
    content: 'We ordered four LaserEnterprise M404 units for our litigation team. The speed is phenomenal, duplexing is rock-solid without jams, and PrintTech Direct delivered within 48 hours. Transparent billing and genuine hardware.',
    verifiedBuyer: true,
    printerModel: 'LaserEnterprise M404'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    role: 'Operations Director',
    company: 'Evergreen Accounting Services',
    rating: 5,
    date: 'September 2, 2026',
    title: 'Cut our quarterly ink costs by over 70%',
    content: 'Switching to the EcoTank ET-4850 has been a game changer for tax season. The ink bottles seem to last forever and the clarity on tax forms is razor sharp. Ordering was seamless with zero hidden fees.',
    verifiedBuyer: true,
    printerModel: 'EcoTank Pro ET-4850'
  },
  {
    id: 'rev-3',
    author: 'David Chen',
    role: 'Lead Architect',
    company: 'Studio Chen Architecture',
    rating: 5,
    date: 'August 14, 2026',
    title: 'Exceptional wide-format fidelity for client schematics',
    content: 'The WorkForce WF-7840 produces crisp 13x19 tabloid prints for presentation day. Customer support answered my pre-purchase spec questions in under 10 minutes. Highly recommended vendor for commercial gear.',
    verifiedBuyer: true,
    printerModel: 'WorkForce Pro WF-7840'
  }
];
