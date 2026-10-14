import { useContext } from "react";
import { ChamadosContext } from "../context/ChamadosContext";
import ChamadoCard from "./ChamadoCard";

export default function ChamadoList() {
  // A lista não recebe mais nada por props: busca direto no contexto.
  const chamadosContext = useContext(ChamadosContext);

  // Fora do Provider o contexto vem null; aviso com uma mensagem clara.
  if (!chamadosContext) {
    throw new Error("ChamadoList precisa estar dentro de ChamadosProvider.");
  }

  const { tickets, toggleTicket, deleteTicket } = chamadosContext;

  if (tickets.length === 0) {
    return <p>Nenhum chamado cadastrado.</p>;
  }

  // O ChamadoCard continua recebendo dados e ações por props.
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <ChamadoCard
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          sector={ticket.sector}
          resolved={ticket.resolved}
          onToggle={toggleTicket}
          onDelete={deleteTicket}
        />
      ))}
    </div>
  );
}
