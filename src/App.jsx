import { useContext, useEffect } from "react";
import "./App.css";
import ChamadoForm from "./components/ChamadoForm";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { ChamadosContext } from "./context/ChamadosContext";

export default function App() {
  // O App não guarda mais a lista nem os handlers: só lê o contexto
  // para mostrar o resumo e atualizar o título da aba.
  const chamadosContext = useContext(ChamadosContext);

  if (!chamadosContext) {
    throw new Error("App precisa estar dentro de ChamadosProvider.");
  }

  const { tickets, resolvedCount } = chamadosContext;

  // Mostra o progresso no título da aba, ex.: "2/4 chamados resolvidos".
  // Guardo o título antigo para devolver ele na limpeza do efeito.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${resolvedCount}/${tickets.length} chamados resolvidos`;

    return () => {
      document.title = previousTitle;
    };
  }, [resolvedCount, tickets.length]);

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      {/* O Panel é só a moldura; o conteúdo de cada um vai como children. */}
      <Panel title="Resumo">
        <p className="summary">
          {resolvedCount} de {tickets.length} chamados resolvidos.
        </p>
      </Panel>

      {/* Formulário e lista buscam o que precisam direto no contexto. */}
      <Panel title="Novo chamado">
        <ChamadoForm />
      </Panel>

      <Panel title="Chamados">
        <ChamadoList />
      </Panel>
    </main>
  );
}
