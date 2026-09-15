import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Truck, 
  RotateCcw, 
  CheckCircle2, 
  CreditCard, 
  Building, 
  Printer as PrinterIcon,
  Download,
  ArrowRight
} from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  items: CartItem[];
  onClose: () => void;
  onClearCart: () => void;
  onOpenPolicy: (key: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  items,
  onClose,
  onClearCart,
  onOpenPolicy
}) => {
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'free' | 'overnight'>('free');
  
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    company: 'Morgan Commercial Logistics LLC',
    email: 'alex.m@morganlogistics.com',
    phone: '(404) 555-0142',
    address: '1250 Innovation Boulevard',
    city: 'Atlanta',
    state: 'GA',
    zip: '30309',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    expDate: '12/28',
    cvv: '•••',
    agreedToTerms: true
  });

  const subtotal = items.reduce((sum, item) => {
    const itemTotal = item.printer.price * item.quantity;
    const warrantyTotal = item.extendedWarranty ? 49.99 * item.quantity : 0;
    return sum + itemTotal + warrantyTotal;
  }, 0);

  const shippingCost = shippingMethod === 'overnight' ? 24.95 : 0;
  const tax = subtotal * 0.06; // 6% GA sales tax
  const grandTotal = subtotal + shippingCost + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `PT-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderComplete(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">
                {orderComplete ? 'Order Confirmation' : 'Secure Express Checkout'}
              </h3>
              <p className="text-xs text-slate-500">
                {orderComplete ? 'Thank you for your business' : '256-Bit SSL Encrypted & Google Safe Browsing Certified'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex-1">
          {orderComplete ? (
            <div className="space-y-6 text-center max-w-lg mx-auto py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Order Reference: <strong className="font-mono text-slate-900">{orderId}</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Confirmation Sent To:</span>
                  <span className="font-bold text-slate-800">{formData.email}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Shipping Carrier:</span>
                  <span className="font-bold text-slate-800">FedEx Commercial Ground</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Estimated Delivery:</span>
                  <span className="font-bold text-emerald-700">2 Business Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Order Total:</span>
                  <span className="font-extrabold text-slate-900 text-sm">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs text-left">
                <strong>Warranty Registration Notice:</strong> Your serial numbers and official manufacturer warranties are automatically activated under your name upon dispatch.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.print()}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Print Official Invoice
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
                >
                  Return to Storefront
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Shipping & Payment Info */}
              <div className="lg:col-span-7 space-y-6">
                {/* Shipping Details */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    1. Shipping & Delivery Address
                  </h4>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block text-slate-600 font-semibold mb-1">Company / Organization (Optional)</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Business Email (For Tracking)</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block text-slate-600 font-semibold mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">State</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">ZIP Code</label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Option */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    2. Select Shipping Method
                  </h4>
                  <div className="space-y-2 text-xs">
                    <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer ${
                      shippingMethod === 'free' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'free'}
                          onChange={() => setShippingMethod('free')}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <div className="font-bold text-slate-900">Standard Expedited Freight (2-3 Business Days)</div>
                          <div className="text-slate-500 text-[11px]">Free delivery on orders over $99</div>
                        </div>
                      </div>
                      <span className="font-bold text-emerald-700">FREE</span>
                    </label>

                    <label className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer ${
                      shippingMethod === 'overnight' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingMethod === 'overnight'}
                          onChange={() => setShippingMethod('overnight')}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <div className="font-bold text-slate-900">Priority Overnight Air (Next Business Day)</div>
                          <div className="text-slate-500 text-[11px]">Guaranteed next morning delivery</div>
                        </div>
                      </div>
                      <span className="font-bold text-slate-900">$24.95</span>
                    </label>
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    3. Secure Payment Method
                  </h4>

                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1">Card Number</label>
                      <input
                        type="text"
                        disabled
                        value={formData.cardNumber}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Expiration</label>
                        <input
                          type="text"
                          disabled
                          value={formData.expDate}
                          className="w-full p-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1">Security Code (CVV)</label>
                        <input
                          type="text"
                          disabled
                          value={formData.cvv}
                          className="w-full p-2 bg-white border border-slate-300 rounded-lg text-slate-700"
                        />
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Payment processing is protected by certified PCI-DSS Level 1 compliance. Simulated card shown for demo testing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary & Review */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 sticky top-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Order Summary ({items.length} Items)
                  </h4>

                  <div className="divide-y divide-slate-200 max-h-52 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.printer.id} className="py-2.5 flex items-center justify-between text-xs">
                        <div className="min-w-0 pr-2">
                          <span className="font-bold text-slate-900 truncate block">{item.printer.name}</span>
                          <span className="text-slate-500">Qty: {item.quantity} {item.extendedWarranty && '• w/ 3-Yr Protection'}</span>
                        </div>
                        <span className="font-extrabold text-slate-900 shrink-0">
                          ${(item.printer.price * item.quantity + (item.extendedWarranty ? 49.99 * item.quantity : 0)).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping</span>
                      <span className="font-semibold text-emerald-700">
                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Estimated Sales Tax</span>
                      <span className="font-semibold text-slate-800">${tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-extrabold text-slate-900">
                      <span>Grand Total</span>
                      <span className="text-blue-600">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Policy Consent Checkbox */}
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300"
                    />
                    <span>
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={() => onOpenPolicy('terms')}
                        className="text-blue-600 underline"
                      >
                        Terms of Service
                      </button>{' '}
                      and acknowledge the{' '}
                      <button
                        type="button"
                        onClick={() => onOpenPolicy('returns')}
                        className="text-blue-600 underline"
                      >
                        30-Day Return & Refund Policy
                      </button>.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Complete Purchase (${grandTotal.toFixed(2)})</span>
                  </button>

                  <div className="space-y-1.5 text-[11px] text-slate-500 pt-2">
                    <div className="flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
                      <span>30-Day Unconditional Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Orders before 3PM EST ship today with tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
