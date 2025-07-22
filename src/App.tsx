import { useState, useCallback, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MetalPlateConfigurator from "./components/MetalPlateConfigurator";
import { MetalPlateConfig } from "./interfaces/MetalPlate";
import Hero from "./components/Hero/Hero";
import Cart from "./components/Cart/Cart";
import Toast from "./components/Common/Toast";
import { useCart } from "./contexts/CartContext";

function App() {
  const [_, setCurrentConfig] = useState<MetalPlateConfig | null>(null);
  const { state, hideToast } = useCart();

  const handleConfigurationChange = useCallback((config: MetalPlateConfig) => {
    setCurrentConfig(config);
  }, []);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (state.toast.isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.toast.isVisible, hideToast]);

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
}

export default App;
