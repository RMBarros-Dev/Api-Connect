# Api-Connect

Repositório: https://github.com/rmbarros-dev/Api-Connect.git

---

## 📋 Sumário

1. [Resumo](#resumo)
2. [Pré-requisitos](#pré-requisitos)
3. [Estrutura do Repositório](#estrutura-do-repositório)
4. [Como Clonar](#como-clonar)
5. [Configuração Inicial](#configuração-inicial)
6. [Execução — Node.js](#execução--nodejs)
7. [Execução — .NET 10](#execução--net-10)
8. [Execução — Blazor](#execução--blazor)
9. [Debug no Visual Studio](#debug-no-visual-studio)
10. [Variáveis de Ambiente](#variáveis-de-ambiente)
11. [OpenAPI / Swagger](#openapi--swagger)
12. [Testes](#testes)
13. [CI / CD com GitHub Actions](#ci--cd-com-github-actions)
14. [Segurança e Dependências](#segurança-e-dependências)
15. [Boas Práticas](#boas-práticas)
16. [Contribuição](#contribuição)
17. [Troubleshooting](#troubleshooting)
18. [Licença](#licença)

---

## 🎯 Resumo

**Api-Connect** é um repositório híbrido que demonstra:

- **Node.js/Express**: API REST simples de exemplo para gerenciamento de usuários (persistência em memória).
- **.NET 10**: Solução profissional com:
  - **Api-Connect.Web**: Aplicação Blazor Server / WebAssembly (front-end).
  - **Api-Connect.ApiService**: API ASP.NET Core (.NET 10) com OpenAPI/Swagger integrado.
  - **Api-Connect.AppHost**: Orchestrador de aplicações (Aspire).
  - **Api-Connect.ServiceDefaults**: Configurações compartilhadas entre serviços.

**Casos de uso**: Aprendizado, protótipos (MVP), esqueleto para aplicações escaláveis, integração Node.js ↔ .NET.

---

## 📦 Pré-requisitos

| Item | Versão Mínima | Notas |
|------|---|---|
| Node.js | 18+ | Para exemplo Node.js |
| npm | 9+ | Gerenciador de pacotes Node.js |
| .NET SDK | 10.0+ | Download: https://dotnet.microsoft.com/download |
| PowerShell | 7+ | ou cmd/bash |
| Git | 2.30+ | Controle de versão |
| Visual Studio 2026 | Community+ | (Recomendado) IDE para debug |

**Verificar instalações**:

```powershell
node --version
npm --version
dotnet --version
git --version
```

---

## 📁 Estrutura do Repositório

```
Api-Connect/
├── README.md                          # Este arquivo
├── .gitignore                         # Ignora .vs, bin, obj, etc
├── Api-Connect.slnx                   # Solução .NET
│
├── Node.js (raiz)
├── server.js                          # Servidor Node.js
├── package.json                       # Dependências npm
│
├── Api-Connect.Web/                   # Projeto Blazor (Front-end)
│   ├── Api-Connect.Web.csproj
│   ├── Pages/
│   ├── Components/
│   └── wwwroot/
│
├── Api-Connect.ApiService/            # Projeto API .NET 10
│   ├── Api-Connect.ApiService.csproj
│   ├── Controllers/
│   ├── Services/
│   ├── Program.cs
│   └── appsettings.json
│
├── Api-Connect.AppHost/               # Orchestrador (Aspire)
│   └── Api-Connect.AppHost.csproj
│
└── Api-Connect.ServiceDefaults/       # Configurações compartilhadas
    └── Api-Connect.ServiceDefaults.csproj
```

---

## 🔧 Como Clonar

**Passo 1**: Clone o repositório

```powershell
cd C:\Users\{seu-usuario}\source\repos
git clone https://github.com/rmbarros-dev/Api-Connect.git
cd Api-Connect
```

**Passo 2**: Verifique a branch

```powershell
git branch -a
git status
```

**Esperado**: Você está em `master` e tudo está atualizado.

---

## ⚙️ Configuração Inicial

**Passo 1**: Restaurar pacotes .NET

```powershell
dotnet restore
```

**Passo 2**: Build da solução

```powershell
dotnet build
```

**Passo 3**: Instalar dependências Node.js

```powershell
npm install
```

**Passo 4**: Verificar projetos

```powershell
dotnet sln Api-Connect.slnx list
```

---

## 🚀 Execução — Node.js

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
