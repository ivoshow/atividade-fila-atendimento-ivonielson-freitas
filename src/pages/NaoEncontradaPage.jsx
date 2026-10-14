import { Link } from "react-router";
import Panel from "../components/Panel";

// Página para qualquer endereço que não bateu com as outras rotas (path="*").
export default function NaoEncontradaPage() {
  return (
    <Panel title="404">
      <p className="summary">Página não encontrada</p>
      <p>
        {/* Link navega sem recarregar a página, então os chamados não se perdem. */}
        <Link to="/">Voltar à fila</Link>
      </p>
    </Panel>
  );
}
