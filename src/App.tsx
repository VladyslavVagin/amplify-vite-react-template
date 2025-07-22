import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import { ProtectedRoute } from "./components/Auth";
import { useCart } from "./contexts/CartContext";

function App() {
  const { state, hideToast } = useCart();

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
    <Authenticator.Provider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Authenticator.Provider>
  );
}

export default App;
