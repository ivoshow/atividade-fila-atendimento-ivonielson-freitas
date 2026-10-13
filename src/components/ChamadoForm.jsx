import { useState } from "react";

export default function ChamadoForm({ onAddTicket }) {
  const [form, setForm] = useState({ title: "", sector: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = form.title.trim();
    const sector = form.sector.trim();

    if (!title || !sector) {
      setError("Preencha o assunto e o setor.");
      return;
    }

    onAddTicket({
      id: crypto.randomUUID(),
      title,
      sector,
      resolved: false,
    });

    setForm({ title: "", sector: "" });
    setError("");
  }

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Assunto</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Ex.: Projetor não liga"
        />
      </div>

      <div className="field">
        <label htmlFor="sector">Setor</label>
        <input
          id="sector"
          name="sector"
          value={form.sector}
          onChange={handleChange}
          placeholder="Ex.: Sala de reuniões"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Cadastrar chamado</button>
    </form>
  );
}
