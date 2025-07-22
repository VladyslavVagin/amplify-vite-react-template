import { FC } from 'react';

import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem/CartItem';
import { formatPrice } from '../../services/pricingService';

const Cart: FC = () => {
  const { state, closeCart, getTotalItems, getTotalPrice } = useCart();

  const handlePay = () => {
    console.log('Cart Data:', {
      items: state.items,
      totalItems: getTotalItems(),
      totalPrice: getTotalPrice(),
      timestamp: new Date().toISOString()
    });
    closeCart();
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />
      
      {/* Cart Modal */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-base-100 shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-base-300">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-primary">🛒</span>
              Shopping Cart
            </h2>
            <button
              onClick={closeCart}
              className="btn btn-ghost btn-sm btn-circle"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-base-content/70">Add some metal plates to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-base-300 p-4 space-y-4">
              {/* Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Items ({getTotalItems()}):</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="divider my-2"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">{formatPrice(getTotalPrice())}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={handlePay}
                  className="btn btn-primary w-full"
                >
                  Pay Now
                </button>
                <button
                  onClick={closeCart}
                  className="btn btn-outline w-full"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart; 