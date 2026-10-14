import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { ChamadosProvider } from "./context/ChamadosContext";
import "./index.css";

// BrowserRouter por fora: liga a aplicação à URL do navegador.
// O Provider envolve o App inteiro: assim qualquer componente
// lá dentro, em qualquer página, consegue ler os chamados pelo contexto.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChamadosProvider>
        <App />
      </ChamadosProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
