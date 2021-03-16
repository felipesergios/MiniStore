# Backend da aplicação MiniStore

## Fundamento : fazer uma api para ser consumida por um client mobile desenvolvido com expo.

 

## O Exemplo usado nesse projeto foi : Uma loja de Informática.

## Passos para instalar o backend desse projeto :

1. Verificar seu ambiente → Ter instaldo o NodeJs , Yarn , NPM e GIT <3

### tudo tá certo com seu ambiente ? , se a resposta foi positiva vamos para o passo 2 :

### No caso de ser negativa ... da uma olhadinha nesses links que vou deixar :

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

[https://classic.yarnpkg.com/en/docs/](https://classic.yarnpkg.com/en/docs/install#windows-stable)

[https://git-scm.com/downloads](https://git-scm.com/downloads)

### Faça o clone desse repositório usando o comando :

 

```jsx
git clone https://github.com/felipesergios/MiniStore.git
```

### Estamos chegando lá ..... agora basta entrar na pasta que chegou via clone e executar esse comando :

```jsx
yarn install
```

### Que feito mágica o yarn vai baixar todas as dependências do projeto para você 🙂 , depois que for concluído o processo acima , bora RODAR esse server !!!! executa esse comando :

```jsx
yarn dev
```

### que agora o nodemon vai deixar a sua instancia rodando de boas e com isso teremos acesso as rotas da aplicação ... para facilitar vou falar quais são e o que fazem e onde habitam ;)

### Todas as rotas dessa aplicação podem ser encontradas no arquivo  "src/routes.JS " temos apenas 3 que são: o

## / → essa é a nossa home que nos mostra uma listagem de todos os produtos cadastrados , temos também

## /show/:Id → nessa você deve passar um id de busca.... exemplo : "Quero ver apenas o registro 1 então vou chamar a rota /show/1 " e ela vai te mostrar somente o registro 1 e assim sucessivamente e por ultimo mas não menos importante temos a rota

## /show/Id/comments → que mostra os comentários feitos sobre aquele produto

# Agora vamos as techs usadas nesse singelo backend :

- ExpressJS
- Knex
- JS
- Sqlite3
- Yarn
- NPM