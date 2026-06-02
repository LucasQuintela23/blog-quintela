# Versionamento do Projeto

Este guia define como versionar a estrutura tecnica do blog (motor, tema, configuracoes e dependencias) com Semantic Versioning.

## Escopo

SemVer aqui se aplica a:

- arquitetura e estrutura do projeto
- layouts e tema
- configuracoes de build/deploy
- dependencias e plugins
- automacoes de CI/CD

SemVer nao se aplica a cada artigo individual. Conteudo segue o guia de publicacoes:

- docs/PADRAO_PUBLICACOES.md

## Padrao SemVer

Formato:

```text
MAJOR.MINOR.PATCH
```

Referencia:

```text
v1.0.0
```

## Quando Atualizar

### MAJOR
Use quando houver quebra relevante de estrutura ou compatibilidade.

Exemplos:

- troca completa de tema
- reestruturacao ampla da base
- mudanca que exige ajuste manual em varios pontos do projeto

Versao exemplo: v2.0.0

### MINOR
Use para novas funcionalidades sem quebra de compatibilidade.

Exemplos:

- adicao de busca
- adicao de comentarios
- novo plugin opcional
- nova secao ou capacidade no site

Versao exemplo: v1.1.0

### PATCH
Use para correcoes e ajustes incrementais sem novos recursos grandes.

Exemplos:

- bug visual
- ajuste de CSS
- link quebrado
- correcao de script/config existente

Versao exemplo: v1.0.1

## Relacao com Commits

O tipo de commit ajuda a orientar incremento de versao:

- feat tende a MINOR
- fix tende a PATCH
- refactor/perf podem impactar PATCH ou MINOR conforme escopo
- mudanca com quebra deve usar indicacao explicita de breaking change

Exemplo de commit com quebra:

```text
feat(layout)!: alterar estrutura de navegacao
```

## Processo de Release Recomendado

1. Consolidar mudancas na main via PR.
2. Definir incremento (MAJOR, MINOR ou PATCH).
3. Criar tag anotada:

```bash
git tag -a vX.Y.Z -m "release vX.Y.Z"
git push origin vX.Y.Z
```

4. Publicar notas de versao com resumo das mudancas.

## Boas Praticas

- Nao criar versao nova para ajustes editoriais de texto.
- Fazer release com historico legivel e commits semanticos.
- Evitar misturar mudanca estrutural e conteudo no mesmo release.
- Em caso de duvida, escolha o menor incremento seguro e descreva impactos no changelog.

## Checklist de Release

- Incremento SemVer definido com criterio.
- Build e checks executados sem erro.
- Tag de release criada e enviada.
- Notas de versao publicadas.
