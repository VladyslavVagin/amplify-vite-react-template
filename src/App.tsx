import { useState, useCallback } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MetalPlateConfigurator from "./components/MetalPlateConfigurator";
import { MetalPlateConfig } from "./interfaces/MetalPlate";

function App() {
  const [currentConfig, setCurrentConfig] = useState<MetalPlateConfig | null>(null);

  const handleConfigurationChange = useCallback((config: MetalPlateConfig) => {
    setCurrentConfig(config);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Welcome Section */}
        <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-primary">⚙️</span> Metal Plate Configurator
              </h1>
              <p className="text-xl mb-8">
                Design your custom metal plate with precision. Choose dimensions, materials, 
                and finishes to create the perfect plate for your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="badge badge-primary badge-lg">Custom Dimensions</div>
                <div className="badge badge-secondary badge-lg">Multiple Materials</div>
                <div className="badge badge-accent badge-lg">Real-time Pricing</div>
                <div className="badge badge-neutral badge-lg">3D Preview</div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Section */}
        <MetalPlateConfigurator onConfigurationChange={handleConfigurationChange} />

        {/* Configuration Summary (if available) */}
        {currentConfig && (
          <div className="container mx-auto px-4 py-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold mb-4">
                  <span className="text-primary">📋</span> Current Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat">
                    <div className="stat-title">Dimensions</div>
                    <div className="stat-value text-primary">
                      {currentConfig.dimensions.length} × {currentConfig.dimensions.width}
                    </div>
                    <div className="stat-desc">{currentConfig.dimensions.unit}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Material</div>
                    <div className="stat-value text-secondary">{currentConfig.color.name}</div>
                    <div className="stat-desc">{currentConfig.color.description}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Configuration ID</div>
                    <div className="stat-value text-accent text-sm font-mono">
                      {currentConfig.id.slice(-8)}
                    </div>
                    <div className="stat-desc">
                      {currentConfig.createdAt.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
