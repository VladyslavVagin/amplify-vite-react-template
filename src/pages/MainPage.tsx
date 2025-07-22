import { useState, useCallback } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MetalPlateConfigurator from "../components/MetalPlateConfigurator";
import type { MetalPlateConfig } from "../interfaces/MetalPlate.interface";
import Hero from "../components/Hero/Hero";
import Cart from "../components/Cart/Cart";
import Toast from "../components/Common/Toast";
import { useCart } from "../contexts/CartContext";

const MainPage = () => {
  const [_, setCurrentConfig] = useState<MetalPlateConfig | null>(null);
  const { state } = useCart();

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
      <Cart />
      <Toast 
        message={state.toast.message}
        isVisible={state.toast.isVisible}
        type={state.toast.type}
      />
    </div>
  );
};

export default MainPage; 