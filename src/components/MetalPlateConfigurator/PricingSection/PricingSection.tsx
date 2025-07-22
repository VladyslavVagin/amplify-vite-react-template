import { FC } from "react"

import { formatPrice } from "../../../services/pricingService"
import type { PriceCalculation, MetalPlateConfig } from "../../../interfaces/MetalPlate.interface";
import { useCart } from "../../../contexts/CartContext";

interface PricingSectionProps {
    priceCalculation: PriceCalculation;
    config: MetalPlateConfig;
}

const PricingSection: FC<PricingSectionProps> = ({ priceCalculation, config }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(config, priceCalculation);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h3 className="card-title text-xl font-bold mb-4">
        <span className="text-primary">💰</span> Pricing
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Base Price:</span>
          <span>{formatPrice(priceCalculation.basePrice)}</span>
        </div>
        <div className="flex justify-between">
          <span>Material Cost:</span>
          <span>{formatPrice(priceCalculation.materialPrice)}</span>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total Price:</span>
          <span className="text-primary">{formatPrice(priceCalculation.totalPrice)}</span>
        </div>
      </div>

      <div className="card-actions justify-end mt-4">
        <button 
          className="btn btn-accent btn-wide"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default PricingSection