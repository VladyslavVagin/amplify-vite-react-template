// Interface for metal plate dimensions
export interface PlateDimensions {
  length: number;
  width: number;
  unit: 'cm' | 'mm';
}

// Interface for metal plate color/material options
export interface PlateColor {
  id: string;
  name: string;
  description: string;
  color: string; // CSS color value for preview
  priceMultiplier: number; // Price multiplier for this material
}

// Interface for the complete metal plate configuration
export interface MetalPlateConfig {
  dimensions: PlateDimensions;
  color: PlateColor;
  id: string;
  createdAt: Date;
}

// Interface for pricing calculation
export interface PriceCalculation {
  basePrice: number;
  materialPrice: number;
  totalPrice: number;
  currency: string;
}

// Interface for cart items
export interface CartItem extends MetalPlateConfig {
  quantity: number;
  price: number;
} 