# Padrao de Commits

Este projeto adota commits semanticos inspirados em Conventional Commits e no guia iuricode/padroes-de-commits.

## Guias Relacionados

- Publicacoes e fluxo editorial: docs/PADRAO_PUBLICACOES.md
- Versionamento da estrutura do projeto: docs/VERSIONAMENTO.md

## Formato

Use o formato abaixo no titulo do commit:

```text
<tipo>(escopo-opcional): descricao curta
```

Exemplos:

```text
feat(posts): adicionar pagina de tags
fix(theme): corrigir alternancia do tema
docs(readme): atualizar instrucoes de execucao
```

## Regras Gerais

- Escreva a descricao no imperativo: adicionar, corrigir, remover, refatorar.
- Escreva o texto do commit em portugues brasileiro (pt-BR).
- Comece com letra minuscula apos os dois pontos.
- Seja objetivo no titulo (ideal ate 72 caracteres).
- Use escopo quando ajudar no contexto: theme, posts, layout, ci, docs.
- Evite commits grandes com assuntos misturados.

Exemplo de idioma esperado:

```text
feat(posts): adicionar secao de referencias tecnicas
```

## Tipos Aceitos

| Tipo | Quando usar | SemVer |
| --- | --- | --- |
| feat | novo recurso | MINOR |
| fix | correcao de bug | PATCH |
| docs | mudanca apenas de documentacao | - |
| style | formatacao/estilo sem alterar logica | - |
| refactor | refatoracao sem mudar comportamento esperado | - |
| test | criacao ou ajuste de testes | - |
| build | build, deps, bundling, tooling | - |
| ci | pipeline, workflow, automacao de CI/CD | - |
| chore | tarefas de manutencao/config geral | - |
| perf | melhoria de performance | - |
| raw | dados, configs brutas, parametros | - |
| cleanup | limpeza tecnica (codigo morto, comentarios obsoletos) | - |
| remove | remocao de arquivos/feature obsoleta | - |

## Emojis (Opcional)

O uso de emoji no inicio e opcional. Se usar, mantenha consistencia.

Sugestao:

- feat: :sparkles:
- fix: :bug:
- docs: :books:
- refactor: :recycle:
- perf: :zap:
- test: :test_tube:
- ci: :bricks:
- cleanup: :broom:
- remove: :wastebasket:

Exemplo com emoji:

```text
:sparkles: feat(posts): adicionar filtro por tag
:bug: fix(theme): corrigir flicker no carregamento
```

## Corpo e Rodape (Recomendado)

Use corpo quando precisar explicar motivacao, impacto e contexto.

```text
feat(posts): adicionar pagina de tags

Cria listagem por tag para facilitar navegacao entre artigos.
Inclui geracao de slug e ordenacao por data.

Refs #123
Reviewed-by: Nome Sobrenome
```

Para mudancas incompativeis:

```text
feat(api)!: alterar formato de resposta de posts

BREAKING CHANGE: campo "author" agora e obrigatorio.
```

## Checklist Antes de Commitar

- O tipo escolhido representa corretamente a mudanca.
- O titulo esta claro e objetivo.
- O commit contem apenas uma intencao principal.
- Build/testes relevantes executaram com sucesso.

## Exemplos Rapidos

```text
feat(layout): criar cabecalho responsivo
fix(posts): corrigir ordenacao por data
refactor(utils): simplificar parse de tags
chore(deps): atualizar astro para versao estavel
ci(actions): ajustar cache de dependencias
remove(legacy): excluir css nao utilizado
```
