import { useContext, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import { ChamadosContext } from "./context/ChamadosContext";
import FilaPage from "./pages/FilaPage";
import NaoEncontradaPage from "./pages/NaoEncontradaPage";
import NovoChamadoPage from "./pages/NovoChamadoPage";
import SobrePage from "./pages/SobrePage";

export default function App() {
  // O App não guarda a lista nem os handlers: só lê o contexto
  // para atualizar o título da aba.
  const chamadosContext = useContext(ChamadosContext);

  if (!chamadosContext) {
    throw new Error("App precisa estar dentro de ChamadosProvider.");
  }

  const { tickets, resolvedCount } = chamadosContext;

  // O título fica aqui no App porque o App aparece em todas as páginas,
  // então a aba continua atualizada não importa a rota aberta.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${resolvedCount}/${tickets.length} chamados resolvidos`;

    return () => {
      document.title = previousTitle;
    };
  }, [resolvedCount, tickets.length]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <strong>Fila de Atendimento</strong>

        {/* NavLink coloca a classe "active" sozinho no link da rota atual.
            O "end" no "/" evita que ele fique ativo em todas as rotas. */}
        <nav aria-label="Navegação principal">
          <NavLink to="/" end>Fila</NavLink>
          <NavLink to="/novo">Novo chamado</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>

      <main className="app">
        {/* Routes olha a URL e mostra só a Route que corresponde.
            O "*" pega qualquer endereço que não bateu com as anteriores. */}
        <Routes>
          <Route path="/" element={<FilaPage />} />
          <Route path="/novo" element={<NovoChamadoPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<NaoEncontradaPage />} />
        </Routes>
      </main>
    </div>
  );
}
