# Quintela

Blog tecnico em Astro com foco em performance, legibilidade e tipografia editorial.

## Stack

- Astro 5
- Content Collections (Markdown e MDX)
- Tailwind CSS
- @tailwindcss/typography
- Tema Light/Dark com persistencia em localStorage

## Pre-requisitos

- Node.js 20+
- npm 10+

No Ubuntu:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

## Como rodar

```bash
npm install
npm run dev
```

Aplicacao em desenvolvimento: `http://localhost:4321`

## Scripts

- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: gera build estatico em `dist/`
- `npm run preview`: sobe preview local da build
- `npm run check`: checagem de tipos e projeto Astro

## Estrutura principal

```text
src/
  content/
    blog/
      linha-de-producao-qa-vs-qc.md
    config.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    [slug].astro
    tags/
      index.astro
      [tag].astro
  styles/
    global.css
  utils/
    tags.ts
```

## Rotas

- `/`: listagem de artigos, ordenados por data decrescente
- `/:slug`: pagina de artigo
- `/tags`: indice de tags
- `/tags/:tag`: filtro por tag

## Como criar um novo post

1. Crie um arquivo `.md` ou `.mdx` em `src/content/blog/`.
2. Use frontmatter com os campos obrigatorios:

```yaml
---
title: "Titulo do artigo"
pubDate: 2026-06-01
description: "Resumo curto do artigo"
tags:
  - qualidade
  - performance
---
```

1. Salve o arquivo. O Astro gera automaticamente a rota com base no nome do arquivo (`slug`).

Exemplo:

- `src/content/blog/meu-artigo.mdx` -> `/meu-artigo`

## Validacao de conteudo (Zod)

O schema da collection `blog` esta em `src/content/config.ts` e valida:

- `title`: string com minimo de 3 caracteres
- `pubDate`: data valida
- `description`: string com minimo de 10 caracteres
- `tags`: array de strings com pelo menos 1 item

Se algum campo estiver invalido, o erro aparece no build/dev.

## Funcionalidades implementadas

- Layout base com header, nav e footer
- Script anti-FOUC para tema dark no `<head>`
- Botao de alternancia de tema (Light/Dark)
- Tipografia editorial com `prose` + `dark:prose-invert`
- Botao `Copiar` em blocos de codigo dos artigos
- Filtro de tags na home e paginas de tag dedicadas

## Observacoes

- A tipografia de interface usa Inter.
- Titulos usam pilha serifada com Georgia.
- Blocos de codigo usam Fira Code.
- O highlight de codigo de Markdown/MDX e feito pelo pipeline do Astro (Shiki).
