import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';

import App from "./App.tsx";
import "./index.css";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import { CartProvider } from "./contexts/CartContext";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Authenticator>
        <App />
      </Authenticator>
    </CartProvider>
  </React.StrictMode>
);
