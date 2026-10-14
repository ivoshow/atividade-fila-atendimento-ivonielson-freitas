# Fila de Atendimento — Atividade integradora React

**ITEAM · Módulo 04 · Aulas 01–08**

Projeto inicial para uma atividade prática individual. O objetivo é transformar
uma tela estática em uma aplicação com componentes, estado, formulário e persistência.

**Aluno(a):** Ivonielson Freitas

## Começar

1. Crie um repositório próprio a partir destes arquivos.
2. No terminal, execute:

```bash
npm install
npm run dev
```

3. Abra o endereço indicado pelo Vite.
4. Leia [ATIVIDADE.md](./ATIVIDADE.md) e siga as etapas na ordem.

**O que já está pronto:** estrutura Vite/React, três cartões estáticos, um arquivo
com quatro chamados e CSS para as telas.

**O que falta:** toda a lógica da atividade. Não há gabarito nem componentes
implementados no projeto inicial.

## Parte 2 — Aulas 07 e 08

- **E7 · Context:** `src/context/ChamadosContext.jsx` exporta `ChamadosContext` e
  `ChamadosProvider`, que guarda os chamados, a leitura inicial, a persistência e as
  ações de cadastrar, resolver/reabrir e excluir.
- **E8 · Rotas:** React Router no modo declarativo (`npm install react-router`).

| URL      | Página              | Conteúdo                       |
| -------- | ------------------- | ------------------------------ |
| `/`      | `FilaPage`          | Resumo e Chamados              |
| `/novo`  | `NovoChamadoPage`   | Cadastre um chamado            |
| `/sobre` | `SobrePage`         | Fila de Atendimento            |
| outra    | `NaoEncontradaPage` | 404 · Página não encontrada    |
