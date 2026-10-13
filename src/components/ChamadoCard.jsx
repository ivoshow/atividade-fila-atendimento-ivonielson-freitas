export default function ChamadoCard({ title, sector, resolved }) {
  return (
    <article className="ticket-card">
      <div>
        <h3>{title}</h3>
        <p>Setor: {sector}</p>
      </div>

      <span className={`badge ${resolved ? "badge-done" : "badge-open"}`}>
        {resolved ? "Resolvido" : "Aberto"}
      </span>
    </article>
  );
}
