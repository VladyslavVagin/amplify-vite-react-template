import React from 'react';
import { useCart } from '../../../contexts/CartContext';

const CartIcon: React.FC = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={toggleCart}
      className="btn btn-ghost btn-circle relative"
      aria-label="Open shopping cart"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
        />
      </svg>
      
      {/* Item count badge */}
      {totalItems > 0 && (
        <div className="absolute -top-1 -right-1 bg-primary text-primary-content text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {totalItems > 99 ? '99+' : totalItems}
        </div>
      )}
    </button>
  );
};

export default CartIcon; 