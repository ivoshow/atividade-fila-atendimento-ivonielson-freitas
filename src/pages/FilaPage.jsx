import { useContext } from "react";
import ChamadoList from "../components/ChamadoList";
import Panel from "../components/Panel";
import { ChamadosContext } from "../context/ChamadosContext";

// Página "/": resumo + lista de chamados.
export default function FilaPage() {
  const chamadosContext = useContext(ChamadosContext);

  if (!chamadosContext) {
    throw new Error("FilaPage precisa estar dentro de ChamadosProvider.");
  }

  const { tickets, resolvedCount } = chamadosContext;

  // Fragmento (<>) para os painéis ficarem direto no grid do <main className="app">.
  return (
    <>
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <Panel title="Resumo">
        <p className="summary">
          {resolvedCount} de {tickets.length} chamados resolvidos.
        </p>
      </Panel>

      <Panel title="Chamados">
        <ChamadoList />
      </Panel>
    </>
  );
}
