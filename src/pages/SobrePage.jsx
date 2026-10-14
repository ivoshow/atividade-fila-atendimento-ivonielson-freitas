import Panel from "../components/Panel";

// Página "/sobre": informação estática sobre o projeto.
export default function SobrePage() {
  return (
    <Panel title="Fila de Atendimento">
      <p className="summary">
        Projeto da atividade integradora do Módulo 04 (React) da ITEAM.
        Permite cadastrar, resolver, reabrir e excluir chamados dos setores.
        Os dados ficam guardados no navegador e são compartilhados entre as
        páginas por Context; a navegação usa React Router.
      </p>
    </Panel>
  );
}
