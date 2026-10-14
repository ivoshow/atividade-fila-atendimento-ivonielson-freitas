import ChamadoForm from "../components/ChamadoForm";
import Panel from "../components/Panel";

// Página "/novo": só o formulário. Ele mesmo busca addTicket no contexto.
export default function NovoChamadoPage() {
  return (
    <>
      <header className="hero">
        <h1>Novo chamado</h1>
        <p>Informe o assunto e o setor que precisa de atendimento.</p>
      </header>

      <Panel title="Cadastre um chamado">
        <ChamadoForm />
      </Panel>
    </>
  );
}
