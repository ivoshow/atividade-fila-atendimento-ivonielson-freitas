import ChamadoCard from "./ChamadoCard";

export default function ChamadoList({ tickets }) {
  if (tickets.length === 0) {
    return <p>Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <ChamadoCard
          key={ticket.id}
          title={ticket.title}
          sector={ticket.sector}
          resolved={ticket.resolved}
        />
      ))}
    </div>
  );
}
