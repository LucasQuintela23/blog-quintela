# Padrao de Publicacoes

Este guia define como publicar e atualizar conteudo tecnico neste blog com foco em consistencia editorial, historico limpo e preservacao de URL.

## Objetivo

- Padronizar criacao de novos posts.
- Organizar fluxo de trabalho com branches dedicadas.
- Evitar quebra de links antigos durante revisoes tecnicas.

## Convencao para Novos Arquivos (CalVer)

Para novos posts, use data no nome do arquivo em formato ISO + slug:

```text
YYYY-MM-DD-slug-do-artigo.md
```

Exemplos:

```text
2026-06-02-api-testing.md
2026-07-10-playwright-fixtures.mdx
```

Local dos posts:

```text
src/content/blog/
```

## Branches para Conteudo

Ao iniciar ou revisar um artigo, use branch dedicada a partir da main:

- Rascunho de post novo:

```text
draft/YYYY-MM-DD-slug-do-artigo
```

- Atualizacao de post ja publicado:

```text
update/YYYY-MM-DD-slug-do-artigo
```

Exemplos:

```text
draft/2026-06-02-api-testing
update/2026-06-02-api-testing
```

## Fluxo de Publicacao (GitHub Flow Adaptado)

1. Main protegida
A branch main representa producao. Todo merge nela deve estar pronto para deploy.

2. Isolamento do trabalho
Crie branch de conteudo a partir da main usando o padrao draft/ ou update/.

3. Validacao local
Antes do PR, valide formatacao, links, metadados e build:

```bash
npm run check
npm run build
```

4. Publicacao via Pull Request
Abra PR para a main para registrar aprovacao e momento de publicacao.

## Front Matter Obrigatorio

O schema atual exige os campos abaixo:

- title
- pubDate
- description
- tags

Exemplo valido:

```yaml
---
title: "Estrategias de teste com Playwright"
pubDate: 2026-06-02T10:00:00
description: "Como estruturar testes E2E confiaveis com fixtures e isolamento."
tags:
  - testes
  - playwright
---
```

## Atualizacao de Post Antigo (Sem Quebrar URL)

Em revisoes profundas de post publicado:

- Nao renomeie o arquivo original.
- Mantenha slug e URL historica.
- Registre evolucao do conteudo no front matter.

Campos opcionais recomendados para revisao:

- updated: data da ultima atualizacao relevante.
- revision: numero incremental da revisao.

Exemplo:

```yaml
---
title: "Estrategias de teste com Playwright"
pubDate: 2026-04-10T09:00:00
updated: 2026-06-02T14:30:00
revision: 2
description: "Guia de praticas para testes E2E com foco em confiabilidade."
tags:
  - testes
  - qualidade
---
```

## Regras de Ouro

- Use naming com data apenas para novos posts.
- Evite misturar mudancas estruturais com edicao de conteudo no mesmo PR.
- Prefira PR pequeno e focado por artigo.
- Sempre valide localmente antes de abrir PR.

## Checklist de Publicacao

- Nome do arquivo segue padrao CalVer para novos posts.
- Branch segue padrao draft/ ou update/.
- Front matter completo e valido.
- npm run check e npm run build executados com sucesso.
- PR aberto para main com resumo do que mudou.
