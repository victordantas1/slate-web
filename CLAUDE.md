# CLAUDE.md

## Visão do projeto

`slate-web` é o front do Slate, app de finanças domésticas. Angular (standalone
components, signals) mobile-first: o uso principal é lançar uma compra no celular, na
hora. A API é o repositório `slate-api`, separado; o contrato é o `openapi.json` na
raiz dele.

## Setup

```
npm ci
```

O `.npmrc` tem `legacy-peer-deps=true` porque o resolvedor de peers do npm 10 quebra
com `vitest`/`jsdom` (erro `edgesOut`). Remova quando o npm do ambiente corrigir.

## Comandos de gate

```
npm run lint
npm run build
npm test -- --watch=false
```

Os três precisam passar antes de qualquer commit. `--no-verify` nunca é aceitável.

## Rodar localmente

```
npm start
```

## Estrutura

| Pasta (`src/app`) | Papel |
| --- | --- |
| `core/` | Serviços singleton: auth, cliente de API, interceptors, guards |
| `features/` | Uma pasta por área de tela, carregada com lazy routes (`*.page.ts`) |
| `shared/` | Layout e componentes de UI reutilizáveis, sem dependência de feature |

Estilos globais e tokens (cores, espaçamento) ficam em `src/styles.scss` como
variáveis CSS, com tema claro e escuro. Layout base testado em 360px de largura.

## Convenções

- Base de todo PR: `main`.
- Commits em português, Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`).
- `git add` caminho a caminho, nunca `-A`.
- Componentes standalone, seletor com prefixo `app`, estado com signals.
- Tipos da API são gerados do `openapi.json`, nunca escritos à mão (issue #3).

## Onde as decisões moram

Requisitos são as issues do GitHub. Planos ficam em `docs/plans/<numero>-<slug>.md`,
um por issue.
