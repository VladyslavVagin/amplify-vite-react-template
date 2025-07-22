import React from 'react';
import { PlateDimensions, PlateColor } from '../../../interfaces/MetalPlate';

interface PlatePreviewProps {
  dimensions: PlateDimensions;
  color: PlateColor;
}

const PlatePreview: React.FC<PlatePreviewProps> = ({ dimensions, color }) => {
  // Calculate preview dimensions (scaled for display)
  const maxPreviewSize = 300; // Maximum preview size in pixels
  const minPreviewSize = 50; // Minimum preview size in pixels
  const maxAspectRatio = 8; // Maximum aspect ratio to prevent extreme shapes
  
  const aspectRatio = dimensions.length / dimensions.width;
  
  let previewWidth: number;
  let previewHeight: number;
  
  // Limit aspect ratio to prevent extreme shapes
  const limitedAspectRatio = Math.max(1 / maxAspectRatio, Math.min(maxAspectRatio, aspectRatio));
  
  if (limitedAspectRatio > 1) {
    // Landscape orientation
    previewWidth = maxPreviewSize;
    previewHeight = maxPreviewSize / limitedAspectRatio;
  } else {
    // Portrait orientation
    previewHeight = maxPreviewSize;
    previewWidth = maxPreviewSize * limitedAspectRatio;
  }

  // Ensure minimum size for very small plates
  if (previewWidth < minPreviewSize) {
    previewWidth = minPreviewSize;
    previewHeight = minPreviewSize / limitedAspectRatio;
  }
  if (previewHeight < minPreviewSize) {
    previewHeight = minPreviewSize;
    previewWidth = minPreviewSize * limitedAspectRatio;
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Plate Visualization */}
      <div className="relative">
        {/* Plate Shadow */}
        <div
          className="absolute rounded-lg bg-black/20"
          style={{
            width: previewWidth + 8,
            height: previewHeight + 8,
            top: 4,
            left: 4,
            transform: 'rotate(2deg)'
          }}
        />
        
        {/* Main Plate */}
        <div
          className="relative rounded-lg border-2 border-base-content/20 shadow-lg"
          style={{
            width: previewWidth,
            height: previewHeight,
            backgroundColor: color.color,
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
            `
          }}
        >
          {/* Dimension Labels */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white drop-shadow-lg">
              <div className="text-sm font-bold">
                {dimensions.length} × {dimensions.width}
              </div>
              <div className="text-xs opacity-80">
                {dimensions.unit}
              </div>
            </div>
          </div>
          
          {/* Corner indicators for better visualization */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Plate Information */}
      <div className="text-center space-y-2">
        <div className="badge badge-primary badge-lg">
          {color.name}
        </div>
        <p className="text-sm text-base-content/70 max-w-xs">
          {color.description}
        </p>
      </div>

      {/* Scale Indicator */}
      <div className="flex items-center space-x-2 text-xs text-base-content/60">
        <div className="w-8 h-0.5 bg-base-content/40"></div>
        <span>
          Scale: 1:{Math.round(maxPreviewSize / Math.max(dimensions.length, dimensions.width))}
          {aspectRatio > maxAspectRatio || aspectRatio < 1 / maxAspectRatio ? ' (aspect ratio limited)' : ''}
        </span>
      </div>
    </div>
  );
};

export default PlatePreview; 