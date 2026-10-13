# Portfólio de Ciência de Dados — Vagner Marques

Projeto independente de portfólio, feito com React + Vite e CSS próprio. A identidade visual usa fundo escuro e degradês roxo, lilás e azul royal.

> Este projeto é uma nova versão separada. Ele não altera seu portfólio atual nem o repositório original.

## Requisitos

- Node.js em versão LTS (recomendado: 20 ou mais recente)
- VS Code
- Conexão com a internet na primeira instalação das dependências

## Como abrir e executar no VS Code

1. Extraia o ZIP em uma pasta do seu computador.
2. Abra o VS Code.
3. Selecione **Arquivo → Abrir Pasta** e escolha a pasta `portfolio-ciencia-dados`.
4. No menu do VS Code, abra **Terminal → Novo Terminal**.
5. Execute os comandos abaixo, um por vez:

```bash
npm install
npm run dev
```

6. O terminal exibirá um endereço local, normalmente `http://localhost:5173`. Pressione `Ctrl` e clique no endereço ou copie-o para o navegador.
7. Para parar o servidor, volte ao terminal e pressione `Ctrl + C`.

## Verificar se o projeto compila para publicação

```bash
npm run build
```

O Vite gera a versão de publicação na pasta `dist`.

## Personalizações importantes

### Links
No arquivo `src/App.jsx`, procure as constantes `GITHUB` e `LINKEDIN` no começo do arquivo. Atualize os endereços caso necessário.

### Projetos
Os cards estão no array `projects`, no começo de `src/App.jsx`. Os seis cards iniciais são **modelos demonstrativos**, não afirmações de que esses projetos já foram concluídos. Antes de divulgar:
- atualize título e descrição;
- inclua os links reais de cada repositório no campo `repo`;
- troque a abordagem e os resultados por aquilo que você realmente implementou;
- adicione imagens ou capturas de tela próprias, se houver.

### Formação
A seção de formação é um texto inicial editável. Acrescente instituição, semestre e cursos conforme desejar.

### Tecnologias
A lista inicial é uma estrutura para personalizar. Ajuste os itens para que representem seu nível real de conhecimento.

## Estrutura

```text
portfolio-ciencia-dados/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Tecnologias utilizadas

- React
- Vite
- CSS responsivo
- Lucide React (ícones)

O projeto não precisa de banco de dados nem de chaves de API para funcionar.

## Publicação futura

Depois de testar localmente, o projeto pode ser enviado a um **novo repositório** no GitHub e publicado em um **novo projeto** na Vercel. Não é necessário substituir nem modificar o site atual.
