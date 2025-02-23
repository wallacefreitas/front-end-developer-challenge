import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TalentProvider } from "./context/TalentContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TalentProvider>
      <App />
    </TalentProvider>
  </StrictMode>
);
