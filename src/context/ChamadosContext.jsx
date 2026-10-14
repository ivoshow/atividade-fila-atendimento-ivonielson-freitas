import { createContext, useEffect, useState } from "react";
import { initialTickets } from "../data/chamados";

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

// O contexto é só o "canal". Começa com null de propósito:
// se alguém ler o contexto fora do Provider, recebe null e eu consigo
// detectar isso e mostrar um erro claro.
export const ChamadosContext = createContext(null);

// O Provider é um componente comum que guarda o estado dos chamados
// e entrega dados + ações para todos os componentes que estão dentro dele.
export function ChamadosProvider({ children }) {
  // A lista de chamados agora mora aqui, e não mais no App.
  // Passo loadTickets sem parênteses para o React chamar só na primeira renderização.
  const [tickets, setTickets] = useState(loadTickets);

  // O contador continua sendo calculado a partir da lista, não é outro estado.
  const resolvedCount = tickets.filter((ticket) => ticket.resolved).length;

  // Toda vez que a lista mudar, salvo uma cópia no localStorage.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  }, [tickets]);

  // Recebe o chamado novo já validado pelo formulário e coloca no final da lista.
  function addTicket(newTicket) {
    setTickets((currentTickets) => [...currentTickets, newTicket]);
  }

  // Inverte o "resolved" só do chamado com esse id (Resolver/Reabrir).
  function toggleTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId
          ? { ...ticket, resolved: !ticket.resolved }
          : ticket,
      ),
    );
  }

  // Fico com todos os chamados, menos o do id clicado.
  function deleteTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.filter((ticket) => ticket.id !== ticketId),
    );
  }

  // Tudo o que os componentes podem ler ou chamar pelo contexto.
  const value = {
    tickets,
    resolvedCount,
    addTicket,
    toggleTicket,
    deleteTicket,
  };

  return (
    <ChamadosContext.Provider value={value}>
      {children}
    </ChamadosContext.Provider>
  );
}
