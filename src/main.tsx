import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';

import App from "./App.tsx";
import "./index.css";
import outputs from "../amplify_outputs.json";
import { CartProvider } from "./contexts/CartContext";
import { CustomAuthenticator } from "./components/Auth";

// Configure Amplify
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <CustomAuthenticator>
        <App />
      </CustomAuthenticator>
    </CartProvider>
  </React.StrictMode>
);
