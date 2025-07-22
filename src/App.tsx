import { useState, useCallback } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MetalPlateConfigurator from "./components/MetalPlateConfigurator";
import { MetalPlateConfig } from "./interfaces/MetalPlate";
import Hero from "./components/Hero/Hero";

function App() {
  const [_, setCurrentConfig] = useState<MetalPlateConfig | null>(null);

  const handleConfigurationChange = useCallback((config: MetalPlateConfig) => {
    setCurrentConfig(config);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MetalPlateConfigurator onConfigurationChange={handleConfigurationChange} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
