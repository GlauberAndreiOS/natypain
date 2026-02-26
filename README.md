# Landing page psicóloga (React + Vite)

## Rodando localmente

```bash
npm install
npm run dev
```

## Publicação no GitHub Pages

1. Ajuste o campo `homepage` no `package.json` com seu usuário.
2. Ajuste o `base` em `vite.config.js` se o nome do repositório mudar.
3. Execute:

```bash
npm run deploy
```

O deploy usa o pacote `gh-pages` e publica a pasta `dist` na branch `gh-pages`.
