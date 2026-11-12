<div align="center">

# Api-Connect

**Dois exemplos de APIs: Node.js/Express e .NET 10 com Aspire**

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![.NET](https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)

</div>

## Sobre

O repositório reúne duas implementações independentes para estudo:

- **Node.js + Express:** API REST de usuários com persistência em memória.
- **.NET 10 + Aspire:** solução com um serviço de API de exemplo, um projeto Web e configurações compartilhadas.

## Começar

### Node.js e Express

Requer Node.js e npm. Na raiz do repositório:

```bash
npm install
npm start
```

A API inicia em [http://localhost:3000](http://localhost:3000). Para desenvolvimento com reinício automático, use `npm run dev`.

| Método | Rota | Ação | Respostas comuns |
| --- | --- | --- | --- |
| GET | `/` | Verifica se a API está ativa | 200 |
| GET | `/users` | Lista usuários | 200 |
| GET | `/users/:id` | Busca um usuário | 200, 400, 404 |
| POST | `/users` | Cria um usuário | 201, 400 |
| PUT | `/users/:id` | Substitui os dados de um usuário | 200, 400, 404 |
| DELETE | `/users/:id` | Remove um usuário | 204, 400, 404 |

Exemplo de corpo para `POST /users`:

```json
{
  "nome": "Fulano",
  "email": "fulano@example.com",
  "cargo": "Desenvolvedor"
}
```

> Os usuários ficam em memória e são perdidos quando o servidor é reiniciado. Esta implementação é demonstrativa.

### .NET 10 e Aspire

Requer o .NET 10 SDK. Na raiz do repositório:

```bash
dotnet restore Api-Connect.slnx
dotnet run --project Api-Connect.AppHost/Api-Connect.AppHost.csproj
```

O serviço de API inclui as rotas de exemplo `/` e `/weatherforecast`. O mapeamento OpenAPI é habilitado no ambiente de desenvolvimento.

## Estrutura

```text
Api-Connect/
├── Api-Connect.ApiService/       # API ASP.NET Core
├── Api-Connect.AppHost/          # Inicialização com Aspire
├── Api-Connect.ServiceDefaults/  # Configurações compartilhadas
├── Api-Connect.Web/              # Aplicação Web
├── src/                          # Rotas, controladores e middleware Node.js
├── server.js                     # Entrada da API Express
├── package.json
└── Api-Connect.slnx
```

## Licença

Este projeto está sob a licença MIT. Consulte [LICENSE.txt](LICENSE.txt).
