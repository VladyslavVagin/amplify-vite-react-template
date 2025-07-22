import { PlateDimensions, PlateColor, PriceCalculation } from '../interfaces/MetalPlate';

// Base pricing constants
const BASE_PRICE_PER_CM2 = 0.15; // Base price per square centimeter
const BASE_PRICE_PER_MM2 = 0.0015; // Base price per square millimeter

/**
 * Calculate the price for a metal plate based on dimensions and material
 * @param dimensions - The plate dimensions
 * @param color - The selected material/color
 * @returns PriceCalculation object with breakdown
 */
export const calculatePlatePrice = (
  dimensions: PlateDimensions,
  color: PlateColor
): PriceCalculation => {
  // Calculate area based on unit
  const area = dimensions.length * dimensions.width;
  
  // Calculate base price
  const basePricePerUnit = dimensions.unit === 'cm' ? BASE_PRICE_PER_CM2 : BASE_PRICE_PER_MM2;
  const basePrice = area * basePricePerUnit;
  
  // Calculate material price
  const materialPrice = basePrice * (color.priceMultiplier - 1);
  
  // Calculate total price
  const totalPrice = basePrice + materialPrice;
  
  return {
    basePrice: Math.round(basePrice * 100) / 100,
    materialPrice: Math.round(materialPrice * 100) / 100,
    totalPrice: Math.round(totalPrice * 100) / 100,
    currency: 'EUR'
  };
};

/**
 * Format price for display
 * @param price - The price to format
 * @param currency - The currency code
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency: string = 'EUR'): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}; 