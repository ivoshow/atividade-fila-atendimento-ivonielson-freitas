import "./App.css";

// PONTO DE PARTIDA: os três cartões abaixo estão escritos manualmente.
// O arquivo src/data/chamados.js contém quatro chamados.
// Os componentes, ações, formulário e persistência ainda não existem.

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
          <div className="ticket-list">
            <article className="ticket-card">
              <div>
                <h3>Wi-Fi não conecta</h3>
                <p>Setor: Recepção</p>
              </div>
              <span className="badge badge-open">Aberto</span>
            </article>

            <article className="ticket-card">
              <div>
                <h3>Impressora sem papel</h3>
                <p>Setor: Biblioteca</p>
              </div>
              <span className="badge badge-done">Resolvido</span>
            </article>

            <article className="ticket-card">
              <div>
                <h3>Acesso bloqueado</h3>
                <p>Setor: Laboratório</p>
              </div>
              <span className="badge badge-open">Aberto</span>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
