import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "reactflow/dist/style.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" />
    <App />
  </StrictMode>
);
