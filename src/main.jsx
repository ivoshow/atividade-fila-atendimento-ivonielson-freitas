import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChamadosProvider } from "./context/ChamadosContext";
import "./index.css";

// O Provider envolve o App inteiro: assim qualquer componente
// lá dentro consegue ler os chamados pelo contexto.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChamadosProvider>
      <App />
    </ChamadosProvider>
  </React.StrictMode>,
);
