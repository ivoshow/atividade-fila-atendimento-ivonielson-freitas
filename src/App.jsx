import { useEffect, useState } from "react";
import "./App.css";
import ChamadoForm from "./components/ChamadoForm";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { initialTickets } from "./data/chamados";

const STORAGE_KEY = "iteam:fila-atendimento";

function loadTickets() {
  const savedTickets = localStorage.getItem(STORAGE_KEY);

  if (!savedTickets) return initialTickets;

  try {
    const parsedTickets = JSON.parse(savedTickets);
    return Array.isArray(parsedTickets) ? parsedTickets : initialTickets;
  } catch {
    return initialTickets;
  }
}

export default function App() {
  const [tickets, setTickets] = useState(loadTickets);

  const resolvedCount = tickets.filter((ticket) => ticket.resolved).length;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${resolvedCount}/${tickets.length} chamados resolvidos`;

    return () => {
      document.title = previousTitle;
    };
  }, [resolvedCount, tickets.length]);

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
