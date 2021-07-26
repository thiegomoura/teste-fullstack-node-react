<p align="center">
<h1>Teste Desenvolvedor Fullstack</h1>
  <p align="center">
    API JSON RESTful para cadastro e listagem de informações básicas de veículos e consumo via UI conforme layout.
    <br />
    <a href="https://github.com/thiegomoura/teste-fullstack-node-react/tree/master/web">Código do Frontend</a>
    ·
    <a href="https://github.com/thiegomoura/teste-fullstack-node-react/tree/master/server">Código do Servidor</a>
    ·
    <a href="https://github.com/thiegomoura/teste-fullstack-node-react/blob/master/REQUISITOS.md">Requisitos</a>
  </p>
</p>

## Sobre o projeto

*<a href="">Descrição do teste e requesitos</a>*

<!-- <p align="center">
    <img src="GITHUB/screenshot.png" alt="Screenshow" width="600">
</p> -->

![Screenshot da aplicação!](/GITHUB/screenshot.gif "Screenshot")

### Desenvolvido com

* [NodeJS](https://nodejs.org)
* [ReactJS](https://reactjs.org)
* [TypeORM](https://typeorm.io/#/)

## Primeiros passos

Instale as dependências do cliente e servidorinstale as depedencias tanto para o server quanto o cliente:

## Configurando o servidor/backend

```bash
# navegue para a pasta do servidor
$ cd server
# atualize as depencias utilizando yarn ou outro gerenciador de pacotes
$ yarn
```

Edite as informações abaixo no arquivo `ormconfig.json`, que se encontra na pasta raiz do servidor, preenchendo as informações de necessárias para que o TypeORM realize a conexão com o banco de dados.

```json
{
  "type": "mysql", // banco de dados utilizado
  "host": "localhost", // endereço do banco de dados
  "port": 3306, // porta do banco de dados
  "username": "root", // usuário do banco de dados
  "password": "123321", // senha do banco de dados
  "database": "test-fullstack" // banco de dados *necessário criar manulmente*
}
```

Acesse a [documentação](https://typeorm.io/#/connection-options) documentação para consultar outras possibilidades de configurações e banco de dados suportados pelo TypeORM.


### Create database

*Crie o banco de dados configurado no `ormconfig.json`*

Rode as migrations para criar as estruturas de tabelas no banco de dados

```bash
# rodar migrations
$ yarn typeorm migration:run
```

Caso o comando retorne algum erro vefique as configurações inseridas no arquivo `ormconfig.json`.

### Iniciar servidor
```bash
# iniciar servidor
$ yarn dev:server
```

Com o servidor rodando, **em outro console/terminal** inicie a configuração do cliente.

## Configurando o cliente/frontend

```bash
# certifique-se de estar na pasta raiz da aplicação e então navegue para a pasta do cliente
$ cd web
# atualize as depencias utilizando yarn ou outro gerenciador de pacotes
$ yarn
```

### Iniciar cliente

```bash
# iniciar servidor
$ yarn start
```

### Rotas da API

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST | /cars | Cadastra um carro | carName, brand, year, isSold e createdAt | Cadastra as informações de um veiculo na base de dados |
| GET | /cars | Listar veículos |  | Retorna as informações do veículos cadastrados na API |
| GET | /cars/:id | Listar veículo | id | Retorna a informações de um veículo específico cadastrado na API |
---

Made with ☕ and 🤯 by [Thiego Moura](https://thiegomoura.github.io/me/)
