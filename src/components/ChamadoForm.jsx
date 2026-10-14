import { useContext, useState } from "react";
import { ChamadosContext } from "../context/ChamadosContext";

export default function ChamadoForm() {
  // O formulário não recebe mais onAddTicket por props: pega addTicket do contexto.
  const chamadosContext = useContext(ChamadosContext);
  const [form, setForm] = useState({ title: "", sector: "" });
  const [error, setError] = useState("");

  // Os hooks ficam todos acima desta verificação, sempre na mesma ordem.
  if (!chamadosContext) {
    throw new Error("ChamadoForm precisa estar dentro de ChamadosProvider.");
  }

  const { addTicket } = chamadosContext;

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

    addTicket({
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
