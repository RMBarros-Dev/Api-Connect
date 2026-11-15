# Api-Connect

<p align="center">
  <img src="assets/brand/banner.svg" alt="Api-Connect — API architecture comparison lab" width="100%" />
</p>
<p align="center"><img src="assets/brand/logo.svg" alt="Api-Connect logo" width="76"/></p>

<p align="center">
  <strong>Laboratório comparativo de APIs e estruturas backend.</strong><br/>
  Duas implementações independentes para estudo: Node.js/Express e .NET 10 com Aspire.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet&logoColor=white" alt=".NET 10"/>
  <img src="https://img.shields.io/badge/OpenAPI-Documented-6BA539?logo=openapiinitiative&logoColor=white" alt="OpenAPI"/>
</p>

---

## Índice

- [Objetivo e área de aplicação](#objetivo)
- [Implementações](#implementações)
- [Arquitetura](#arquitetura)
- [Metodologia](#metodologia-de-desenvolvimento)
- [Requisitos](#requisitos)
- [Execução](#executar-a-trilha-nodejs)
- [Estrutura de arquivos](#estrutura-real-do-repositório)
- [Boas práticas e limitações](#boas-práticas-e-limites)
- [Documentação e licença](#documentação-e-licença)

## Objetivo

O Api-Connect reúne duas abordagens de implementação de serviços HTTP para estudar rotas, organização de código, contratos de API e ferramentas do ecossistema .NET.

O projeto não é uma única aplicação híbrida: as implementações Node.js e .NET são trilhas independentes dentro do mesmo repositório.

## Implementações

### Node.js + Express

API demonstrativa de usuários com operações CRUD:

| Método | Rota | Finalidade |
| --- | --- | --- |
| GET | `/` | Verificar se o serviço está ativo |
| GET | `/users` | Listar usuários |
| GET | `/users/:id` | Consultar usuário por identificador |
| POST | `/users` | Cadastrar usuário |
| PUT | `/users/:id` | Substituir dados do usuário |
| DELETE | `/users/:id` | Remover usuário |

A implementação utiliza persistência em memória. Os registros são perdidos quando o processo é reiniciado; portanto, ela serve como demonstração e não como armazenamento durável.

### .NET 10 + Aspire

Solução de exemplo dividida em:

- `Api-Connect.ApiService/`: serviço ASP.NET Core com rotas de exemplo.
- `Api-Connect.AppHost/`: inicialização e orquestração local.
- `Api-Connect.ServiceDefaults/`: configurações compartilhadas.
- `Api-Connect.Web/`: aplicação web Blazor e cliente de API.

O serviço documenta as rotas `/` e `/weatherforecast`. O mapeamento OpenAPI está habilitado no ambiente de desenvolvimento.

## Metodologia de desenvolvimento

As trilhas Node.js e .NET são mantidas separadas para permitir estudo e comparação de estruturas, rotas e ferramentas. Ao evoluir o laboratório, documente cada implementação isoladamente, mantenha exemplos com dados fictícios e valide os contratos HTTP sem misturar as dependências dos dois runtimes.

## Arquitetura

```mermaid
flowchart TB
    subgraph Node["Trilha Node.js"]
      NClient[HTTP Client] --> Express[Express]
      Express --> Routes[Routes]
      Routes --> Controller[Controllers]
      Controller --> Memory[(In-memory data)]
    end
    subgraph DotNet["Trilha .NET"]
      AppHost[.NET Aspire AppHost] --> API[ASP.NET Core API]
      AppHost --> Web[Blazor Web]
      Web --> API
      API --> Defaults[ServiceDefaults]
    end
```

## Requisitos

- Node.js e npm para a trilha Express.
- .NET 10 SDK para a trilha .NET.
- .NET Aspire/Visual Studio é opcional para explorar a experiência integrada.

## Executar a trilha Node.js

Na raiz do repositório:

```bash
npm install
npm start
```

A API é iniciada em `http://localhost:3000`. Para desenvolvimento com reinício automático, utilize:

```bash
npm run dev
```

Exemplo de payload para `POST /users`:

```json
{
  "nome": "Fulano",
  "email": "fulano@example.com",
  "cargo": "Desenvolvedor"
}
```

Use somente dados fictícios nesta implementação demonstrativa.

## Executar a trilha .NET

Na raiz do repositório:

```bash
dotnet restore Api-Connect.slnx
dotnet run --project Api-Connect.AppHost/Api-Connect.AppHost.csproj
```

Consulte os logs do AppHost para os endereços locais atribuídos aos serviços.

## Estrutura real do repositório

```text
Api-Connect/
├── Api-Connect.ApiService/
├── Api-Connect.AppHost/
├── Api-Connect.ServiceDefaults/
├── Api-Connect.Web/
├── src/
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   └── routes/
├── assets/
│   └── brand/
│       ├── banner.svg
│       ├── logo.svg
│       └── project-mark.svg
├── server.js
├── package.json
├── package-lock.json
└── Api-Connect.slnx
```

## Documentação

- [Identidade visual](docs/brand/README.md).
- [Banner SVG](assets/brand/banner.svg) e [logotipo SVG](assets/brand/logo.svg).
- Projetos .NET: diretórios `Api-Connect.ApiService/`, `Api-Connect.AppHost/`, `Api-Connect.ServiceDefaults/` e `Api-Connect.Web/`.
- Trilha Express: diretório `src/`, arquivo `server.js` e scripts em `package.json`.

## Boas práticas e limites

- A API Express utiliza armazenamento em memória; não use para dados de produção.
- Valide entradas e respostas HTTP ao ampliar as rotas.
- Para persistência durável, integre um banco de dados e defina uma estratégia de migração.
- Mantenha configurações e segredos fora do código versionado.
- Não exponha endpoints de desenvolvimento sem revisar autenticação, autorização e CORS.

## Identidade visual

Consulte [docs/brand/README.md](docs/brand/README.md) para a paleta e as regras da marca.

## Princípios de engenharia

- manter as duas implementações independentes e claramente identificadas;
- documentar rotas, verbos HTTP, payloads e códigos de resposta;
- não confundir persistência em memória com armazenamento durável;
- usar configuração externa para segredos e ambientes;
- evitar expor exemplos de desenvolvimento sem controles adicionais.

## Documentação e licença

Consulte [LICENSE.txt](LICENSE.txt).

Consulte [LICENSE.txt](LICENSE.txt).
