# Atividade integradora — Fila de Atendimento

**Módulo 04 · Desenvolvimento Front-end com React · Aulas 01–06**  
**Formato:** individual · **Valor:** 10,0 pontos · **Entrega:** link do repositório pessoal.

## Desafio

O setor de suporte precisa acompanhar chamados simples: assunto, setor solicitante
e situação (**Aberto** ou **Resolvido**). A tela inicial tem três cartões escritos
manualmente. O arquivo `src/data/chamados.js` já possui **quatro chamados**.

Transforme esse ponto de partida em uma aplicação funcional. A solução deve usar
somente os conceitos estudados nas seis primeiras aulas.

**Não é para copiar o My Daily Habits e trocar os nomes.** A estrutura e as
funções da aplicação devem ser construídas por você. O CSS já está preparado.

## Etapas obrigatórias

### E1 — Preparar o projeto (Aula 01 · 1,0 ponto)
- [ ] `npm install` e `npm run dev` funcionam.
- [ ] Identifique no projeto a função de `App.jsx`, `main.jsx` e `package.json`.
- [ ] Substitua a identificação do aluno em `README.md` e envie o primeiro commit.

**Teste:** a tela inicial abre sem erro e o commit aparece no seu GitHub.

### E2 — Montar a lista (Aula 02 · 1,5 ponto)
- [ ] Crie os componentes `ChamadoCard` e `ChamadoList`, cada um em seu arquivo.
- [ ] Use os dados de `src/data/chamados.js` para exibir os **quatro** chamados.
- [ ] Gere os cartões com `map()` e uma `key` estável baseada no `id`.
- [ ] Mostre **Aberto** ou **Resolvido** conforme o dado, com aparência diferente.
- [ ] Quando a lista estiver vazia, mostre `Nenhum chamado cadastrado.`.

**Teste:** quatro cartões vindos do array; nenhum aviso de `key` no console.

### E3 — Ligar os componentes (Aula 03 · 1,5 ponto)
- [ ] Os cartões recebem dados por props, sem alterá-los.
- [ ] Crie um componente `Panel` que receba `title` e `children`.
- [ ] Use o `Panel` para a lista e para a área de resumo da página.
- [ ] Coloque um botão em cada cartão. Ao clicar, a ação deve chegar ao `App`
      por uma função passada por props, recebendo o `id` correto.

**Teste:** cada botão identifica apenas o chamado clicado; nenhum evento dispara sozinho ao abrir a página.

### E4 — Atualizar os chamados (Aula 04 · 2,0 pontos)
- [ ] Guarde o array de chamados em `useState`.
- [ ] O botão alterna **Resolver** ↔ **Reabrir**, atualizando o chamado correto.
- [ ] Inclua uma ação **Excluir** que remova somente o chamado escolhido.
- [ ] Não altere diretamente o array nem seus objetos.
- [ ] Mostre no resumo `X de Y chamados resolvidos`. Calcule os totais a
      partir do array, sem criar outro estado para o contador.

**Teste:** resolva, reabra e exclua o segundo chamado. Os demais continuam
corretos e o contador acompanha todas as mudanças.

### E5 — Cadastrar um chamado (Aula 05 · 2,0 pontos)
- [ ] Crie `ChamadoForm` com dois campos controlados: **Assunto** e **Setor**.
- [ ] Um estado em objeto guarda os campos; use `name` e um `handleChange`.
- [ ] Envie pelo `onSubmit` do formulário, sem recarregar a página.
- [ ] Remova espaços das extremidades e rejeite campos vazios ou só com espaços.
- [ ] Mostre um erro na tela, preservando a digitação quando o envio falhar.
- [ ] Ao validar, adicione um chamado com `id` único e `resolved: false`.
- [ ] Após o sucesso, limpe os campos e a mensagem de erro.
- [ ] Mostre o formulário dentro de um segundo/novo `Panel`.

**Teste:** envio vazio não cadastra; envio válido cria um chamado aberto que
também pode ser resolvido, reaberto e excluído.

### E6 — Manter os dados após F5 (Aula 06 · 2,0 pontos)
- [ ] Leia os dados do `localStorage` para inicializar `useState`, sem
      reler o armazenamento em toda renderização.
- [ ] Use `useEffect` para salvar as mudanças na chave `iteam:fila-atendimento`.
- [ ] Trate ausência de dados, JSON inválido e valor que não é array:
      nesses casos, volte aos chamados iniciais sem tela branca.
- [ ] Atualize o título da aba para `X/Y chamados resolvidos` usando `useEffect`.
- [ ] Inclua a função de limpeza que restaura o título anterior.
- [ ] Declare corretamente as dependências dos efeitos.

**Teste:** cadastre, resolva e exclua, depois pressione F5. Tudo permanece.
Altere manualmente o valor armazenado para `{oops` e pressione F5: a
aplicação volta aos dados iniciais sem travar.

## Critérios finais

- [ ] `npm run dev` e `npm run build` terminam sem erro.
- [ ] Não há tela branca nem erros de JavaScript no console.
- [ ] A interface funciona com os quatro dados iniciais e com novos chamados.
- [ ] Há **um commit por etapa** (mínimo de seis), enviado ao repositório próprio.
- [ ] `node_modules`, `dist` e `.env` não foram enviados.
- [ ] O aluno consegue explicar o caminho **evento → callback → estado →
      renderização → persistência**.

## Entrega e regras

Entregue **somente o link do seu repositório GitHub**. Não envie ZIP,
capturas de tela nem relatórios. Trabalho parcial também deve ser entregue.

Consulta liberada: apostila, [mapa das aulas](https://github.com/virgiliojr94/iteam-react-modulo-04)
e documentação oficial do React. Assistentes de IA podem ser usados para
explicar conceitos e ajudar a interpretar erros, mas não substituem a
implementação nem a explicação do aluno.

**Fora do escopo:** React Router, Context, APIs, Axios, backend e bibliotecas
de gerenciamento de estado. Não é necessário criar layout novo.

**Avaliação:** funcionamento demonstrável em cada etapa e explicação oral das
decisões do código.
