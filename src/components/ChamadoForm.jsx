import { useContext, useState } from "react";
import { Link } from "react-router";
import { ChamadosContext } from "../context/ChamadosContext";

export default function ChamadoForm() {
  // O formulário não recebe mais onAddTicket por props: pega addTicket do contexto.
  const chamadosContext = useContext(ChamadosContext);
  const [form, setForm] = useState({ title: "", sector: "" });
  const [error, setError] = useState("");
  // Liga a mensagem "Chamado cadastrado." depois de um cadastro com sucesso.
  const [success, setSuccess] = useState(false);

  // Os hooks ficam todos acima desta verificação, sempre na mesma ordem.
  if (!chamadosContext) {
    throw new Error("ChamadoForm precisa estar dentro de ChamadosProvider.");
  }

  const { addTicket } = chamadosContext;

  function handleChange(event) {
    const { name, value } = event.target;

    // Começou a digitar outro chamado: a confirmação anterior some.
    setSuccess(false);

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
      setSuccess(false);
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
    setSuccess(true);
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

      {/* Link (e não <a href>) para ir à fila sem recarregar a aplicação. */}
      {success && (
        <p className="notice">
          Chamado cadastrado. <Link to="/">Ver a fila</Link>
        </p>
      )}

      <button type="submit">Cadastrar chamado</button>
    </form>
  );
}
