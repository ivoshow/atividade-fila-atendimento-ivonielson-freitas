import "./App.css";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { initialTickets } from "./data/chamados";

export default function App() {
  const resolvedCount = initialTickets.filter(
    (ticket) => ticket.resolved,
  ).length;

  function handleToggleTicket(ticketId) {
    const ticket = initialTickets.find((item) => item.id === ticketId);

    if (ticket) {
      window.alert(`Chamado "${ticket.title}" (id: ${ticket.id})`);
    }
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <Panel title="Resumo">
        <p className="summary">
          {resolvedCount} de {initialTickets.length} chamados resolvidos.
        </p>
      </Panel>

      <Panel title="Chamados">
        <ChamadoList tickets={initialTickets} onToggle={handleToggleTicket} />
      </Panel>
    </main>
  );
}
