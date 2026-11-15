# Organização do repositório — Api-Connect

O repositório mantém duas trilhas didáticas separadas: Node.js/Express e .NET 10 com Aspire.

| Caminho | Responsabilidade |
| --- | --- |
| `src/routes/` | Rotas da API Express. |
| `src/controllers/` | Controladores HTTP. |
| `src/data/` | Dados demonstrativos em memória. |
| `src/middlewares/` | Middleware de validação e tratamento de erros. |
| `server.js`, `package.json` | Inicialização e dependências da trilha Node.js. |
| `Api-Connect.ApiService/` | Serviço ASP.NET Core. |
| `Api-Connect.AppHost/` | Orquestração com .NET Aspire. |
| `Api-Connect.ServiceDefaults/` | Configurações compartilhadas dos serviços .NET. |
| `Api-Connect.Web/` | Interface web Blazor e cliente HTTP. |
| `assets/brand/` | Logotipo, banner e marca do projeto. |

## Convenções

- Preservar a separação entre as duas implementações.
- Não tratar armazenamento em memória como persistência durável.
- Manter os lockfiles e arquivos de solução sincronizados com as dependências.
- Não mover arquivos de projetos .NET sem revisar a solução e referências.
