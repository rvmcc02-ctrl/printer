import React from 'react';
import { 
  X, 
  Trash2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ArrowRight, 
  Plus, 
  Minus,
  CheckCircle2
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (printerId: string, quantity: number) => void;
  onRemoveItem: (printerId: string) => void;
  onProceedToCheckout: () => void;
  onOpenPolicy: (key: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onOpenPolicy
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => {
    const itemTotal = item.printer.price * item.quantity;
    const warrantyTotal = item.extendedWarranty ? 49.99 * item.quantity : 0;
    return sum + itemTotal + warrantyTotal;
  }, 0);

  const freeShippingThreshold = 99.00;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingCost = isFreeShipping ? 0 : 7.95;
  const grandTotal = subtotal + shippingCost;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">Your Shopping Cart</h3>
            <p className="text-xs text-slate-500">{items.length} item(s) selected</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-3 bg-blue-50 border-b border-blue-100 text-xs">
          {subtotal >= freeShippingThreshold ? (
            <div className="flex items-center gap-1.5 text-blue-900 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Congratulations! Your order qualifies for <strong>FREE Expedited Shipping</strong>.</span>
            </div>
          ) : (
            <div className="text-blue-800">
              Add <strong>${(freeShippingThreshold - subtotal).toFixed(2)}</strong> more to qualify for <strong>FREE Shipping</strong>!
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-700">Your cart is currently empty</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Explore our catalog of laser, supertank, and multifunction office printers.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
              >
                Browse Printers
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div 
                key={item.printer.id}
                className="p-3 rounded-xl border border-slate-200 bg-white space-y-3"
              >
                <div className="flex gap-3">
                  <div className="w-18 h-18 rounded-lg bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center p-1">
                    <img 
                      src={item.printer.image} 
                      alt={item.printer.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase text-slate-500">
                        {item.printer.brand}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.printer.id)}
                        className="text-slate-400 hover:text-red-600 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.printer.name}
                    </h4>

                    <div className="text-xs font-extrabold text-blue-600 mt-0.5">
                      ${item.printer.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                {item.extendedWarranty && (
                  <div className="text-[11px] p-1.5 rounded bg-blue-50/70 border border-blue-200 text-blue-800 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      3-Yr Commercial Care Plan
                    </span>
                    <span className="font-bold">+$49.99</span>
                  </div>
                )}

                {/* Quantity Controls */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => onUpdateQuantity(item.printer.id, item.quantity - 1)}
                      className="px-2 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.printer.id, item.quantity + 1)}
                      className="px-2 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="text-xs font-bold text-slate-900">
                    Item Total: ${(item.printer.price * item.quantity + (item.extendedWarranty ? 49.99 * item.quantity : 0)).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary & Checkout CTA */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Expedited Shipping</span>
                <span className="font-semibold text-emerald-700">
                  {isFreeShipping ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Sales Tax</span>
                <span className="font-semibold text-slate-800">Calculated at checkout</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-extrabold text-slate-900">
                <span>Estimated Total</span>
                <span className="text-base text-blue-600">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onProceedToCheckout();
                onClose();
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Secure Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Compliance Guarantee Badges */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3 h-3 text-blue-600" />
                <button onClick={() => onOpenPolicy('returns')} className="underline">
                  30-Day Money Back
                </button>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>256-Bit SSL Encrypted</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
