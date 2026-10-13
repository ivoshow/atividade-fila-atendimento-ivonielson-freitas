import { useEffect, useState } from "react";
import "./App.css";
import ChamadoForm from "./components/ChamadoForm";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { initialTickets } from "./data/chamados";

// Nome da "gaveta" do navegador onde os chamados ficam guardados.
const STORAGE_KEY = "iteam:fila-atendimento";

// Busca os chamados salvos da última vez que a página foi usada.
// Se não tiver nada, ou se o que estiver lá vier estragado,
// a gente volta para os 4 chamados iniciais em vez de quebrar a tela.
function loadTickets() {
  const savedTickets = localStorage.getItem(STORAGE_KEY);

  // Primeira visita: ainda não existe nada salvo.
  if (!savedTickets) return initialTickets;

  try {
    const parsedTickets = JSON.parse(savedTickets);
    // Mesmo sendo um JSON válido, só aceito se for uma lista.
    return Array.isArray(parsedTickets) ? parsedTickets : initialTickets;
  } catch {
    // Texto inválido (tipo "{oops"): o JSON.parse falha e caímos aqui.
    return initialTickets;
  }
}

export default function App() {
  // A lista de chamados mora aqui no App, e só aqui.
  // Passo a função loadTickets (sem parênteses) para o React chamar
  // só na primeira renderização, e não toda vez que a tela atualiza.
  const [tickets, setTickets] = useState(loadTickets);

  // Não preciso de um estado só para o contador:
  // dá para contar os resolvidos direto da lista a cada renderização.
  const resolvedCount = tickets.filter((ticket) => ticket.resolved).length;

  // Toda vez que a lista mudar, salvo uma cópia no localStorage.
  // É isso que faz os chamados continuarem lá depois do F5.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  }, [tickets]);

  // Mostra o progresso no título da aba, ex.: "2/4 chamados resolvidos".
  // Guardo o título antigo para devolver ele na limpeza do efeito.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${resolvedCount}/${tickets.length} chamados resolvidos`;

    return () => {
      document.title = previousTitle;
    };
  }, [resolvedCount, tickets.length]);

  // Chamado pelo formulário quando um chamado novo passa na validação.
  // Monto uma lista nova com o chamado no final, sem usar push.
  function handleAddTicket(newTicket) {
    setTickets((currentTickets) => [...currentTickets, newTicket]);
  }

  // Chamado pelo botão Resolver/Reabrir do cartão, que me manda o id.
  // Só o chamado com esse id ganha uma cópia com "resolved" invertido;
  // os outros continuam exatamente como estavam.
  function handleToggleTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, resolved: !ticket.resolved }
          : ticket,
      ),
    );
  }

  // Chamado pelo botão Excluir: fico com todos menos o do id clicado.
  function handleDeleteTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.filter((ticket) => ticket.id !== ticketId),
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      {/* O Panel é só a moldura; o conteúdo de cada um vai como children. */}
      <Panel title="Resumo">
        <p className="summary">
          {resolvedCount} de {tickets.length} chamados resolvidos.
        </p>
      </Panel>

      {/* O formulário recebe a função para me avisar quando tiver chamado novo. */}
      <Panel title="Novo chamado">
        <ChamadoForm onAddTicket={handleAddTicket} />
      </Panel>

      {/* A lista recebe os dados e as funções que os botões dos cartões vão chamar. */}
      <Panel title="Chamados">
        <ChamadoList
          tickets={tickets}
          onToggle={handleToggleTicket}
          onDelete={handleDeleteTicket}
        />
      </Panel>
    </main>
  );
}
