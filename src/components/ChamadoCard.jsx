export default function ChamadoCard({
  id,
  title,
  sector,
  resolved,
  onToggle,
  onDelete,
}) {
  return (
    <article className="ticket-card">
      <div>
        <h3>{title}</h3>
        <p>Setor: {sector}</p>
      </div>

      <div className="ticket-actions">
        <span className={`badge ${resolved ? "badge-done" : "badge-open"}`}>
          {resolved ? "Resolvido" : "Aberto"}
        </span>

        <button type="button" onClick={() => onToggle(id)}>
          {resolved ? "Reabrir" : "Resolver"}
        </button>

        <button type="button" className="secondary" onClick={() => onDelete(id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}
