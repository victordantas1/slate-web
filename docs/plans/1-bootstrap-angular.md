# Plano — #1 Bootstrap do projeto Angular

Issue: https://github.com/victordantas1/slate-web/issues/1 · M1 · Fundação · P0

> A spec citada (`docs/superpowers/specs/2026-08-22-slate-design.md` §8) não existe no
> repo; implementado a partir da issue.

## 1. Objetivo

Projeto Angular executável, mobile-first, com lint, teste e build de produção
passando e layout base responsivo em 360px.

## 2. Arquivos

- `package.json`, `angular.json`, `tsconfig*.json`, `.npmrc`, `.editorconfig`, `.prettierrc`, `.gitignore`
- `eslint.config.js`
- `src/index.html`, `src/main.ts`, `src/styles.scss`
- `src/app/app.ts`, `app.config.ts`, `app.routes.ts`, `app.spec.ts`
- `src/app/shared/layout/shell.component.*` — topo + navegação inferior
- `src/app/shared/ui/page-placeholder.component.ts`
- `src/app/features/{month,commitments,settings}/*.page.ts` — placeholders das telas futuras
- `src/app/core/` — reservado (auth e cliente de API)
- `CLAUDE.md`

## 3. Tarefas

1. Gerar o workspace com Angular CLI 21 (o 22 exige Node ≥ 22.22.3).
2. Configurar ESLint com angular-eslint e script `lint`.
3. Criar estrutura `core/ features/ shared/` e rotas lazy.
4. Criar o shell responsivo (tokens CSS, nav inferior, safe-area).
5. Testes do shell e do componente raiz.
6. Escrever `CLAUDE.md` com os gates reais.

## 4. Pressupostos

- Angular 21 e Vitest (runner padrão do CLI) em vez de Karma.
- SCSS, sem biblioteca de componentes.
- Navegação inferior com Mês / Compromissos / Configuração; as páginas são
  placeholders substituídos pelas issues #4, #8 e #12–#14.
- `.npmrc` com `legacy-peer-deps=true` por bug do npm 10 com vitest/jsdom.
- Sem workflow de CI: pertence à issue de deploy (#16).

## 5. Testes

- Build de produção: `npm run build`.
- Lint e teste: `npm run lint`, `npm test -- --watch=false`.
- 360px: verificado em Chromium, sem scroll horizontal (`scrollWidth == clientWidth`).
