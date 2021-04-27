<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Criando um dashboard dinâmico e reutilizável com SOLID + React + TypeScript

Desenvolver usando React é fácil. Dividir os componentes também é fácil. Fazer isso para que seja fácil the ler e entender, reutilizável, dinâmico e fácil de dar manutenção... É outra conversa.

Nesse exemplo entramos de cabeça no submundo dos componentes reutilizáveis e mostramos como fazer isso seguindo os pricípios SOLID.

## O que faz esse componente?

Cria multiplos dashboards, de maneira dinâmica, e de acordo com os dados que você passa para o componente ele vai criar widgets dinâmicos que podem ter posições diferentes, templates diferentes, tamanhos diferentes e cores diferentes. E tudo de maneira simples para que você precise editar o mínimo possível os arquivos principais do projeto.

## Como instalar e rodar o projeto?

1. `yarn`: para instalar após clonar o repositório.
2. `yarn start` após installar o projeto.

## Como eu instalei o projeto?

Utilizei o `create-react-app` padrão recomendado na [documentação oficial](https://create-react-app.dev/docs/adding-typescript/).
```
npx create-react-app my-app --template typescript
```
or
```
yarn create react-app my-app --template typescript
```

## Organização dos arquivos

- `src/components/Dashboard-initial`: versão inicial do componente.
- `src/components/Dashboard`: versão final do component.


## Pequena melhoria no código após gravação do vídeo

Separei a configuração das posições no CSS. Antes estava tudo dentro do arquivo `src/components/Dashboard/styles/layouts/_widget.scss` mas como os próprios princípios SOLID sugerem, devemos dar independência aos elementes/modificadores e separar eles do código principal. Então agora você encontra eles dentro da pasta `src/components/Dashboard/styles/position`.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/35148593?v=4" width="75px;"/>](https://github.com/rafaelperozin) |
| :-----------------------------------------------------------------------------------------------------------------: |
|                                 [Rafael Perozin](https://github.com/rafaelperozin)                                  |


## Informações Complementares

Artigo completo no Linkedin com mais detalhes sobre os principios SOLID usados com React Functional (em Inglês):

https://www.linkedin.com/pulse/reusable-share-button-using-solid-principles-react-rafael-perozin/

Canal no Youtube onde o Rafael Perozin vai além do código e fala de soft skills e tudo que um desenvolvedor precisa para se diferenciar no mercado e se tornar um profissional de sucesso.:

https://www.youtube.com/c/rafaelperozin

## Configurações usadas no projeto

Você pode ver tudo nos arquivos que estão na raiz do projeto.
- `.prettierrc`
- `.tsconfig.json`
- `.editorconfig`
- `package.json`


### Customização do meu VSCode:
```
{
  "editor.renderWhitespace": "selection",
  "editor.renderControlCharacters": true,
  "files.insertFinalNewline": true,
  "window.zoomLevel": 0,
  "editor.fontSize": 13,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.detectIndentation": true,
  "html.format.wrapLineLength": 140,
  "[jsonc]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[xml]": {
    "editor.defaultFormatter": "mikeburgh.xml-format"
  },
  "workbench.startupEditor": "newUntitledFile",
  "[json]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "better-comments.multilineComments": true,
  "better-comments.highlightPlainText": false,
  "better-comments.tags": [
    {
      "tag": "fixme:",
      "color": "#FF2D00",
      "strikethrough": false,
      "backgroundColor": "transparent"
    },
    {
      "tag": "note:",
      "color": "#3498DB",
      "strikethrough": false,
      "backgroundColor": "transparent"
    },
    {
      "tag": "todo:",
      "color": "#FF8C00",
      "strikethrough": false,
      "backgroundColor": "transparent"
    },
    {
      "tag": "important:",
      "color": "#ffd500",
      "strikethrough": false,
      "backgroundColor": "transparent"
    }
  ],
  "eslint.validate": [
    "vue",
    "html",
    "pug",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[scss]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "javascript.preferences.importModuleSpecifier": "non-relative",
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "terminal.external.osxExec": "/Applications/iTerm.app",
  "terminal.integrated.fontFamily": "Meslo LG S DZ for Powerline",
  "terminal.explorerKind": "external",
  "workbench.colorCustomizations": {
    "[Min Dark]": {
      "sideBar.foreground": "#b6b6b6",
    },
    "[One Dark Pro]": {
      "sideBar.background": "#181818",
      "sideBarSectionHeader.background": "#141414",
      "activityBar.activeBackground": "#141414",
      "activityBar.background": "#181818",
      "editor.background": "#181818",
      "tab.hoverBackground": "#141414",
      "tab.activeBackground": "#141414",
      "tab.inactiveBackground": "#181818",
      "statusBar.background": "#141414",
      "editorGroupHeader.tabsBackground": "#181818",
    },
  },
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "entity.other.attribute-name.class.pug",
        "settings": {
          "foreground": "#666CCC"
        }
      }
    ],
  },
  "[markdown]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "workbench.iconTheme": "material-icon-theme",
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
  "vetur.completion.autoImport": true,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "java.configuration.checkProjectSettingsExclusions": false,
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
  "maven.pomfile.autoUpdateEffectivePOM": true,
  "vsicons.dontShowNewVersionMessage": true,
  "markdown.extension.print.imgToBase64": true,
  "files.associations": {
    ".prettierrc": "jsonc",
    ".bundleignore": "ignore",
    "*.conf": "nginx",
    ".autorc": "json"
  },
  "editor.largeFileOptimizations": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.updateImportsOnFileMove.enabled": "never",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "editor.multiCursorModifier": "alt",
  "explorer.compactFolders": false,
  "maven.executable.path": "/Library/Java/Maven/bin/mvn",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tabnine.experimentalAutoImports": true,
  "[css]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "typescript.implementationsCodeLens.enabled": true,
  "javascript.suggest.completeFunctionCalls": true,
  "workbench.colorTheme": "One Dark Pro",
  "path-intellisense.extensionOnImport": true,
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown",
    "vetur"
  ],
  "multiCommand.commands": [
    {
        "command": "multiCommand.formatTypescript",
        "interval": 10,
        "sequence": [
          "editor.action.organizeImports",
          "editor.action.formatDocument",
          "eslint.executeAutofix",
          "eslint.executeAutofix",
        ]
    },
  ],
  "sync.gist": "a90dc89436151831fd1bf8629080ade3",
  "sync.quietSync": true,
  "material-icon-theme.showWelcomeMessage": false,
  "java.jdt.ls.vmargs": "-XX:+UseParallelGC -XX:GCTimeRatio=4 -XX:AdaptiveSizePolicyWeight=90 -Dsun.zip.disableMemoryMapping=true -Xmx1G -Xms100m -javaagent:\"/Users/rafaelperozin/.vscode/extensions/gabrielbb.vscode-lombok-1.0.1/server/lombok.jar\"",
  "prettier.requireConfig": true,
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
  "prettier.bracketSpacing": false,
  "prettier.jsxBracketSameLine": true,
  "prettier.trailingComma": "all",
  "prettier.tabWidth": 2,
  "prettier.useTabs": true,
  "prettier.arrowParens": "always",
  "auto-close-tag.activationOnLanguage": [
    "xml",
    "php",
    "blade",
    "ejs",
    "jinja",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "plaintext",
    "markdown",
    "vue",
    "liquid",
    "erb",
    "lang-cfml",
    "cfml",
    "HTML (EEx)",
    "HTML (Eex)",
    "plist"
  ],
  "eslint.trace.server": "off",
  "sync.forceUpload": true,
  "bracket-pair-colorizer-2.activeScopeCSS": [
    "borderStyle : solid",
    "borderWidth : 1px",
    "borderColor : {color}",
    "opacity: 0.5"
  ]
}

```
