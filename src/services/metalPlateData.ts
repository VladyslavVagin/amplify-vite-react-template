import type { PlateColor } from '../interfaces/MetalPlate.interface';

/**
 * Predefined metal plate color/material options
 * Each option includes visual representation and pricing information
 */
export const METAL_PLATE_COLORS: PlateColor[] = [
  {
    id: 'raw-steel',
    name: 'Raw Steel',
    description: 'Natural steel finish, untreated surface',
    color: '#8B8B8B',
    priceMultiplier: 1.0
  },
  {
    id: 'black',
    name: 'Black',
    description: 'Black painted finish, corrosion resistant',
    color: '#1A1A1A',
    priceMultiplier: 1.2
  },
  {
    id: 'galvanized',
    name: 'Galvanized',
    description: 'Zinc-coated for enhanced corrosion protection',
    color: '#D3D3D3',
    priceMultiplier: 1.4
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    description: 'Premium stainless steel, highly corrosion resistant',
    color: '#C0C0C0',
    priceMultiplier: 2.1
  },
  {
    id: 'aluminum',
    name: 'Aluminum',
    description: 'Lightweight aluminum, excellent for outdoor use',
    color: '#A8A8A8',
    priceMultiplier: 1.8
  },
  {
    id: 'copper',
    name: 'Copper',
    description: 'Premium copper finish, distinctive appearance',
    color: '#B87333',
    priceMultiplier: 3.2
  },
  {
    id: 'brass',
    name: 'Brass',
    description: 'Elegant brass finish, decorative applications',
    color: '#CD7F32',
    priceMultiplier: 2.8
  }
];

/**
 * Default plate dimensions
 */
export const DEFAULT_DIMENSIONS = {
  length: 10,
  width: 10,
  unit: 'cm' as const
};

/**
 * Validation constraints for plate dimensions
 */
export const DIMENSION_CONSTRAINTS = {
  minLength: 1,
  maxLength: 500,
  minWidth: 1,
  maxWidth: 500
}; 