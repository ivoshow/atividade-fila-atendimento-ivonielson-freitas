import "./App.css";
import ChamadoList from "./components/ChamadoList";
import { initialTickets } from "./data/chamados";

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h2>Chamados</h2>
        </div>
        <div className="panel-content">
          <ChamadoList tickets={initialTickets} />
        </div>
      </section>
    </main>
  );
}
