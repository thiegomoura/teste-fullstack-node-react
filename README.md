# Teste Desenvolvedor Fullstack

<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="GITHUB/logo.png" alt="Logo" height="80">
  </a>

  <h3 align="center">Carangão</h3>

  <p align="center">
    API para cadastro e listagem de informações básicas de veículos e consumo via browser.
    <br />
    <br />
    <br />
    <a href="https://https://github.com/thiegomoura/teste-fullstack-node-react/tree/master/web">Código do Frontend</a>
    ·
    <a href="https://https://github.com/thiegomoura/teste-fullstack-node-react/tree/master/server">Código do Servidor</a>
  </p>
</p>

## Sobre o projeto

Projeto desenvolvido como teste para a vaga de Desenvolvedor Fullstack na 4Events.

<a href="https://github.com/thiegomoura/teste-fullstack-node-react/blob/master/web/REQUISITOS.md">Descrição do teste e requesitos</a>

<p align="center">
    <img src="GITHUB/screenshot.png" alt="Screenshow" width="600">
</p>

### Desenvolvido com

* [NodeJS](https://nodejs.org)
* [ReactJS](https://reactjs.org)
* [TypeORM](https://typeorm.io/#/)

## Primeiros passos

Primeiramente instale as depedencias tanto para o server quanto o cliente:

## Configurando o servidor/backend

```bash
cd server
npm update
# or
yarn
```

Preencha as informações do banco de dados utilizado, no arquivo `ormconfig.json` na pasta raiz do servidor.

### Create database

- Crie o banco de dados configurado no `ormconfig.json`

Rode as migrations para criar as estruturas de tabelas no banco de dados

```bash
# run migrations
$ yarn typeorm migration:run
```
### Iniciar servidor
Rode o script abaixo
```bash
$ yarn dev:server
```

- Com o servidor rodando, em outro console inicie a configuração do cliente

## Configurando o cliente/frontend

```bash
cd web
npm update
# or
yarn
```

### Iniciar cliente
Rode o script abaixo
```bash
$ yarn start
```

### Rotas da API

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST | /car | Cadastra um carro | carName, brand, year, isSold e createdAt | Cadastra as informações de um veiculo na base de dados |
| GET | /car | Listar veículos |  | Retorna as informações do veículos cadastrados na API |
| GET | /car/:id | Listar veículo | id | Retorna a informações de um veículo específico cadastrado na API |
---

Made with ☕ and 🤯 by [Thiego Moura](https://thiegomoura.github.io/me/)
