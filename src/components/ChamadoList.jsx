import ChamadoCard from "./ChamadoCard";

export default function ChamadoList({ tickets, onToggle, onDelete }) {
  if (tickets.length === 0) {
    return <p>Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <ChamadoCard
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          sector={ticket.sector}
          resolved={ticket.resolved}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
