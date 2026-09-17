export interface PolicyContent {
  title: string;
  lastUpdated: string;
  badge: string;
  summary: string;
  sections: {
    heading: string;
    body: string[];
  }[];
}

export const POLICIES: Record<string, PolicyContent> = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'September 1, 2026',
    badge: 'GDPR & CCPA Compliant',
    summary: 'PrintTech Direct is committed to protecting consumer privacy and maintaining absolute transparency regarding how personal information is collected, processed, and secured in strict compliance with Google Ads standards, CCPA, and GDPR.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'We collect information necessary to fulfill purchases and provide customer service. This includes name, company name, billing/shipping address, email address, telephone number, and payment transaction details.',
          'Payment card numbers are processed directly through certified PCI-DSS Level 1 payment gateways (Stripe / Authorized merchant processors). We never store full card numbers or security CVV codes on our servers.',
          'Technical data collected automatically includes IP addresses, browser types, device identifiers, and pages visited for site analytics, fraud prevention, and Google Ads conversion measurement.'
        ]
      },
      {
        heading: '2. How Information Is Used',
        body: [
          'To process, pack, insure, and dispatch hardware orders and toner supplies to your address.',
          'To communicate real-time shipment tracking, delivery confirmations, and invoice receipts.',
          'To register official manufacturer hardware warranties with your consent.',
          'To measure advertising performance on Google Ads and optimize search relevant landing experiences.'
        ]
      },
      {
        heading: '3. Data Sharing & Third-Party Disclosure',
        body: [
          'We do NOT sell, rent, monetize, or trade your personal data to any third-party brokers or advertisers.',
          'Data is shared exclusively with necessary service partners: freight couriers (FedEx, UPS) for physical package delivery, payment processors for transaction authorization, and Google Analytics / Google Ads for privacy-compliant conversion tracking with anonymized identifiers.'
        ]
      },
      {
        heading: '4. Cookie Policy & Your Privacy Rights',
        body: [
          'You may opt out of cookie tracking at any time via your browser settings or our on-site Cookie Preferences banner.',
          'Under the California Consumer Privacy Act (CCPA) and European General Data Protection Regulation (GDPR), you have the right to request access to your data, request deletion of your records, or opt out of promotional communications with zero penalty.'
        ]
      }
    ]
  },
  returns: {
    title: '30-Day Return & Refund Policy',
    lastUpdated: 'September 1, 2026',
    badge: 'Hassle-Free 30-Day Guarantee',
    summary: 'We want you to purchase with complete confidence. PrintTech Direct offers a transparent 30-calendar-day return window on all printer hardware and consumables.',
    sections: [
      {
        heading: '1. 30-Day Return Window',
        body: [
          'You may initiate a return within 30 calendar days from the confirmed delivery date of your item.',
          'Items eligible for full refund: Unopened printers in original manufacturer packaging with all factory seals intact, or open-box units returned in like-new condition with all original cables, manuals, power cords, and starter supplies.'
        ]
      },
      {
        heading: '2. Defective on Arrival (DOA) & Transit Damage',
        body: [
          'If your printer arrives damaged from freight transit or exhibits a hardware defect within the first 30 days, PrintTech Direct will provide an immediate prepaid return shipping label and issue your choice of a free express replacement or 100% full refund.',
          'No restocking fees or shipping deductions apply to defective, damaged, or incorrectly shipped equipment.'
        ]
      },
      {
        heading: '3. Return Authorization (RMA) Process',
        body: [
          'Step 1: Contact our support desk at support@printtechdirect.com or call 1-888-676-9138 to request a Return Merchandise Authorization (RMA) number.',
          'Step 2: Securely repack the unit in its original box with internal foam supports and affix the provided RMA return label.',
          'Step 3: Drop off at any authorized FedEx / UPS depot or schedule a complimentary freight pickup for units over 50 lbs.'
        ]
      },
      {
        heading: '4. Refund Processing Timelines',
        body: [
          'Once received at our Peachtree Corners, GA logistics facility, our technicians inspect the unit within 48 business hours.',
          'Refunds are processed back to the original method of payment within 3 to 5 business days. Your banking institution may take an additional 1-2 billing days to reflect the credit.'
        ]
      }
    ]
  },
  shipping: {
    title: 'Shipping & Delivery Policy',
    lastUpdated: 'September 1, 2026',
    badge: 'Fast Nationwide Delivery',
    summary: 'All orders are carefully inspected, padded for electronics transport, and dispatched from our domestic fulfillment centers with full tracking.',
    sections: [
      {
        heading: '1. Shipping Rates & Thresholds',
        body: [
          'Standard Shipping: FREE on all printer hardware orders totaling $99.00 or more within the contiguous United States (48 states).',
          'Orders below $99.00 ship at a flat rate of $7.95.',
          'Expedited 2-Day Air is available at checkout for an additional $24.95.'
        ]
      },
      {
        heading: '2. Order Handling & Dispatch Time',
        body: [
          'Orders placed before 3:00 PM Eastern Time (Monday through Friday) are processed and dispatched the SAME business day.',
          'Orders received after 3:00 PM EST or over weekends/holidays will ship on the following business day.',
          'Tracking numbers are automatically emailed within 2 hours of courier pickup.'
        ]
      },
      {
        heading: '3. Delivery Carriers & Large Freight',
        body: [
          'Standard orders are delivered via FedEx Ground or UPS Ground (estimated 2 to 4 business days transit).',
          'Heavy commercial multifunction units exceeding 70 lbs ship via specialized LTL freight with liftgate service and scheduled delivery appointments.'
        ]
      },
      {
        heading: '4. Signature Confirmation on High-Value Items',
        body: [
          'To protect our customers against package theft, orders valued over $400.00 require direct signature confirmation upon delivery.'
        ]
      }
    ]
  },
  terms: {
    title: 'Terms & Conditions of Sale',
    lastUpdated: 'September 1, 2026',
    badge: 'Commercial Terms',
    summary: 'These Terms of Service govern the purchase of hardware, toner supplies, and related equipment from PrintTech Direct.',
    sections: [
      {
        heading: '1. Pricing & Order Acceptance',
        body: [
          'All prices are listed in United States Dollars (USD) and reflect actual current inventory pricing.',
          'We do not engage in bait-and-switch pricing or hidden fees. Taxes and shipping are clearly calculated before final payment confirmation.',
          'Order confirmation emails represent receipt of your purchase intent; acceptance occurs upon dispatch of goods from our warehouse.'
        ]
      },
      {
        heading: '2. Manufacturer Warranties & Support',
        body: [
          'All hardware sold by PrintTech Direct is brand new, factory sealed, and includes full original manufacturer warranty coverage (ranging from 1 to 3 years depending on model).',
          'Warranty claims may be fulfilled directly through the respective OEM manufacturer service network or coordinated via our dedicated customer care team.'
        ]
      },
      {
        heading: '3. Limitation of Liability',
        body: [
          'PrintTech Direct shall not be liable for any indirect, incidental, or consequential damages resulting from downtime, delayed shipping caused by weather, or normal wear and tear of consumables.'
        ]
      }
    ]
  },
  disclaimer: {
    title: 'Independent Retailer & Trademark Notice',
    lastUpdated: 'September 1, 2026',
    badge: 'Google Ads Policy Compliance',
    summary: 'PrintTech Direct is an independent commercial retailer of office technology hardware and supplies.',
    sections: [
      {
        heading: '1. Independent Retailer Status',
        body: [
          'PrintTech Direct is an independent authorized distributor and value-added reseller of commercial office printing equipment, genuine toner, and consumables.',
          'We are NOT an official direct consumer telephone technical repair service, nor do we claim to be the exclusive brand headquarters for any third-party manufacturer.',
          'Our business model focuses on physical equipment sales, fleet procurement, and genuine consumables distribution.'
        ]
      },
      {
        heading: '2. Third-Party Trademarks',
        body: [
          'All product names, brand names, logos, trademarks, and registered trademarks (including Brother®, HP®, Canon®, Epson®, Xerox®, and others) are the property of their respective trademark holders.',
          'The use of these trademarks on this website is strictly for identification, product compatibility, and descriptive purposes under fair use doctrine. Use does not imply any official endorsement, sponsorship, or affiliation unless expressly specified.'
        ]
      },
      {
        heading: '3. Technical Support Scope',
        body: [
          'PrintTech Direct provides pre-sales consultation, hardware warranty coordination, and setup documentation for products purchased through our store. For driver updates, proprietary firmware, or out-of-warranty servicing, customers are directed to the respective official OEM support portals.'
        ]
      }
    ]
  },
  contact: {
    title: 'Company Information & Customer Service',
    lastUpdated: 'September 1, 2026',
    badge: 'Verified Business Transparency',
    summary: 'We believe in 100% operational transparency. Our corporate offices, warehouse, and customer support team are based in Peachtree Corners, Georgia.',
    sections: [
      {
        heading: 'Corporate Headquarters & Logistics Depot',
        body: [
          'Legal Entity: PrintTech Direct Solutions LLC',
          'Physical Address: 450 Technology Parkway, Suite 300, Peachtree Corners, GA 30092, United States',
          'Warehouse Loading Dock: Bay 14-18, Technology Logistics Hub, GA 30092'
        ]
      },
      {
        heading: 'Direct Communication Channels',
        body: [
          'Toll-Free Customer Line: 1-888-676-9138',
          'Commercial Sales Desk: (770) 555-0198',
          'Customer Support Email: support@printtechdirect.com',
          'Wholesale & Corporate Inquiries: enterprise@printtechdirect.com'
        ]
      },
      {
        heading: 'Hours of Operation (Eastern Time)',
        body: [
          'Monday through Friday: 8:00 AM – 8:00 PM EST',
          'Saturday: 9:00 AM – 5:00 PM EST',
          'Sunday: Closed (Orders process automatically, shipping resumes Monday morning)',
          'Average Email Response Time: Under 45 minutes during business hours.'
        ]
      }
    ]
  }
};
