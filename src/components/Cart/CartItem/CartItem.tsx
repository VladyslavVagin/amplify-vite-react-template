import React from 'react';
import type { CartItem as CartItemType } from '../../../interfaces/MetalPlate.interface';
import { useCart } from '../../../contexts/CartContext';
import { formatPrice } from '../../../services/pricingService';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="card bg-base-200 shadow-sm">
      <div className="card-body p-4">
        {/* Item Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full border-2 border-base-content/20"
              style={{ backgroundColor: item.color.color }}
            />
            <div>
              <h4 className="font-medium">{item.color.name}</h4>
              <p className="text-sm text-base-content/70">{item.color.description}</p>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="btn btn-ghost btn-xs btn-circle text-error"
            aria-label="Remove item"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Item Details */}
        <div className="space-y-2 mb-3">
          <div className="flex justify-between text-sm">
            <span>Dimensions:</span>
            <span>{item.dimensions.length} × {item.dimensions.width} {item.dimensions.unit}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Area:</span>
            <span>{(item.dimensions.length * item.dimensions.width).toFixed(2)} {item.dimensions.unit}²</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Price per unit:</span>
            <span>{formatPrice(item.price)}</span>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="btn btn-sm btn-circle btn-outline"
              disabled={item.quantity <= 1}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="btn btn-sm btn-circle btn-outline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="text-right">
            <div className="font-bold text-primary">
              {formatPrice(item.price * item.quantity)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 