import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ProviderProvider from "./components/Provider";

import App from "./components/App/App";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderProvider>
      <App />
    </ProviderProvider>
  </StrictMode>
);
