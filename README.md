# API-Connect-Renan-Monteiro

API REST simples em Node.js + Express para gerenciamento de usuários (projeto exemplo).

## Pré-requisitos

- Node.js 18+ e npm

## Instalação

1. Instale dependências:

```
npm install
```

2. Inicie em modo desenvolvimento (com nodemon):

```
npm run dev
```

API disponível em http://localhost:3000

## Endpoints

| Método | Endpoint        | Descrição                           | Status retornado |
|--------|-----------------|-------------------------------------|------------------|
| GET    | /               | Healthcheck                         | 200              |
| GET    | /users          | Lista todos os usuários             | 200              |
| GET    | /users/:id      | Obtém usuário por ID                | 200 / 400 / 404  |
| POST   | /users          | Cria novo usuário                   | 201 / 400        |
| PUT    | /users/:id      | Atualiza usuário (substituição)     | 200 / 400 / 404  |
| DELETE | /users/:id      | Remove usuário                      | 204 / 400 / 404  |

## Exemplos

- Healthcheck:

  GET http://localhost:3000

Resposta:

```
{ "mensagem": "API em execução" }
```

- Criar usuário (POST /users):

Request body (JSON):

```
{
  "nome": "Fulano",
  "email": "fulano@example.com",
  "cargo": "Desenvolvedor"
}
```

Resposta:

```
{
  "mensagem": "Usuário criado",
  "usuario": { "id": 4, "nome": "Fulano", "email": "fulano@example.com", "cargo": "Desenvolvedor", "criadoEm": "2026-..." }
}
```

## Observações

- Persistência em memória (array) — dados serão perdidos ao reiniciar o servidor.
- Validação básica no middleware `validateUser`.
- Para produção, considere adicionar: dotenv, helmet, rate-limiter, validação com Joi/Zod, e um banco de dados (Postgres / MongoDB).
