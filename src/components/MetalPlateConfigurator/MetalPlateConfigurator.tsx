import React, { useState, useEffect, useMemo } from 'react';
import { PlateDimensions, PlateColor, MetalPlateConfig } from '../../interfaces/MetalPlate';
import { METAL_PLATE_COLORS, DEFAULT_DIMENSIONS, DIMENSION_CONSTRAINTS } from '../../services/metalPlateData';
import { calculatePlatePrice, formatPrice } from '../../services/pricingService';
import PlatePreview from './PlatePreview/PlatePreview';

interface MetalPlateConfiguratorProps {
  onConfigurationChange?: (config: MetalPlateConfig) => void;
}

const MetalPlateConfigurator: React.FC<MetalPlateConfiguratorProps> = ({ 
  onConfigurationChange 
}) => {
  // State for plate dimensions
  const [dimensions, setDimensions] = useState<PlateDimensions>(DEFAULT_DIMENSIONS);
  
  // State for selected color/material
  const [selectedColor, setSelectedColor] = useState<PlateColor>(METAL_PLATE_COLORS[0]);

  // Calculate price using useMemo to avoid unnecessary recalculations
  const priceCalculation = useMemo(() => 
    calculatePlatePrice(dimensions, selectedColor), 
    [dimensions, selectedColor]
  );

  // Create configuration object using useMemo
  const config = useMemo(() => ({
    dimensions,
    color: selectedColor,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date()
  }), [dimensions, selectedColor]);

  // Update parent component when configuration changes
  useEffect(() => {
    onConfigurationChange?.(config);
  }, [config, onConfigurationChange]);

  // Handle dimension changes
  const handleDimensionChange = (field: 'length' | 'width', value: number) => {
    setDimensions(prev => ({
      ...prev,
      [field]: Math.max(DIMENSION_CONSTRAINTS[`min${field.charAt(0).toUpperCase() + field.slice(1)}` as keyof typeof DIMENSION_CONSTRAINTS], 
                       Math.min(DIMENSION_CONSTRAINTS[`max${field.charAt(0).toUpperCase() + field.slice(1)}` as keyof typeof DIMENSION_CONSTRAINTS], value))
    }));
  };

  // Handle unit change
  const handleUnitChange = (unit: 'cm' | 'mm') => {
    if (unit === dimensions.unit) return;
    
    setDimensions(prev => ({
      ...prev,
      unit,
      length: unit === 'mm' ? prev.length * 10 : prev.length / 10,
      width: unit === 'mm' ? prev.width * 10 : prev.width / 10
    }));
  };

  // Handle color selection
  const handleColorSelect = (color: PlateColor) => {
    setSelectedColor(color);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">
                <span className="text-primary">⚙️</span> Plate Configuration
              </h2>
              
              {/* Dimensions Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dimensions</h3>
                
                {/* Unit Selection */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Unit</span>
                  </label>
                  <div className="btn-group">
                    <button
                      className={`btn ${dimensions.unit === 'cm' ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => handleUnitChange('cm')}
                    >
                      Centimeters (cm)
                    </button>
                    <button
                      className={`btn ${dimensions.unit === 'mm' ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => handleUnitChange('mm')}
                    >
                      Millimeters (mm)
                    </button>
                  </div>
                </div>

                {/* Length and Width Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Length ({dimensions.unit})</span>
                    </label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      value={dimensions.length}
                      onChange={(e) => handleDimensionChange('length', parseFloat(e.target.value) || 0)}
                      min={DIMENSION_CONSTRAINTS.minLength}
                      max={DIMENSION_CONSTRAINTS.maxLength}
                      step={dimensions.unit === 'cm' ? 0.1 : 1}
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Width ({dimensions.unit})</span>
                    </label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      value={dimensions.width}
                      onChange={(e) => handleDimensionChange('width', parseFloat(e.target.value) || 0)}
                      min={DIMENSION_CONSTRAINTS.minWidth}
                      max={DIMENSION_CONSTRAINTS.maxWidth}
                      step={dimensions.unit === 'cm' ? 0.1 : 1}
                    />
                  </div>
                </div>

                {/* Area Display */}
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Total Area</div>
                    <div className="stat-value text-primary">
                      {(dimensions.length * dimensions.width).toFixed(2)}
                    </div>
                    <div className="stat-desc">{dimensions.unit}²</div>
                  </div>
                </div>
              </div>

              {/* Material Selection */}
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-semibold">Material & Finish</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {METAL_PLATE_COLORS.map((color) => (
                    <div
                      key={color.id}
                      className={`card cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        selectedColor.id === color.id 
                          ? 'ring-2 ring-primary bg-primary/5' 
                          : 'bg-base-200 hover:bg-base-300'
                      }`}
                      onClick={() => handleColorSelect(color)}
                    >
                      <div className="card-body p-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-8 h-8 rounded-full border-2 border-base-content/20"
                            style={{ backgroundColor: color.color }}
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{color.name}</h4>
                            <p className="text-sm text-base-content/70">{color.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel with Pricing */}
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold mb-4">
                <span className="text-primary">👁️</span> Plate Preview
              </h3>
              <PlatePreview 
                dimensions={dimensions}
                color={selectedColor}
              />
            </div>
          </div>

          {/* Pricing Section - Moved here */}
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
                <button className="btn btn-primary btn-wide">
                  <span className="text-lg">🛒</span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalPlateConfigurator; 