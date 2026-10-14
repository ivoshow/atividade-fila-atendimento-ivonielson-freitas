import Panel from "../components/Panel";

// Página "/sobre": informação estática sobre o projeto.
// Tudo aqui é texto fixo no JSX; não depende do contexto nem de dados externos.
export default function SobrePage() {
  return (
    <Panel title="Fila de Atendimento">
      <div className="about">
        <p className="summary">
          Aplicação para organizar os chamados de suporte recebidos pelos
          setores. Desenvolvida na atividade integradora do Módulo 04
          (Desenvolvimento Front-end com React) da ITEAM.
        </p>

        <h3>O que dá para fazer</h3>
        <ul>
          <li>Ver a fila de chamados e quantos já foram resolvidos.</li>
          <li>Cadastrar um chamado informando assunto e setor.</li>
          <li>Resolver, reabrir e excluir chamados.</li>
          <li>Fechar ou atualizar a página sem perder os dados.</li>
        </ul>

        <h3>Páginas</h3>
        <ul>
          <li><strong>Fila</strong> (/): resumo e lista de chamados.</li>
          <li><strong>Novo chamado</strong> (/novo): formulário de cadastro.</li>
          <li><strong>Sobre</strong> (/sobre): esta página.</li>
        </ul>

        <h3>Como foi construído</h3>
        <ul>
          <li>React com Vite.</li>
          <li>Context (ChamadosProvider) para compartilhar os chamados entre as páginas.</li>
          <li>React Router no modo declarativo para a navegação.</li>
          <li>localStorage para guardar os chamados no navegador.</li>
        </ul>

        <p className="about-author">Desenvolvido por Ivonielson Freitas</p>
      </div>
    </Panel>
  );
}
