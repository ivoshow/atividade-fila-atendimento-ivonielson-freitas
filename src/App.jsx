import { useState } from "react";
import "./App.css";
import ChamadoForm from "./components/ChamadoForm";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { initialTickets } from "./data/chamados";

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);

  const resolvedCount = tickets.filter((ticket) => ticket.resolved).length;

  function handleAddTicket(newTicket) {
    setTickets((currentTickets) => [...currentTickets, newTicket]);
  }

  function handleToggleTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, resolved: !ticket.resolved }
          : ticket,
      ),
    );
  }

  function handleDeleteTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.filter((ticket) => ticket.id !== ticketId),
    );
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
          {resolvedCount} de {tickets.length} chamados resolvidos.
        </p>
      </Panel>

      <Panel title="Novo chamado">
        <ChamadoForm onAddTicket={handleAddTicket} />
      </Panel>

      <Panel title="Chamados">
        <ChamadoList
          tickets={tickets}
          onToggle={handleToggleTicket}
          onDelete={handleDeleteTicket}
        />
      </Panel>
    </main>
  );
}
