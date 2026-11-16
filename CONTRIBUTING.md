# Como contribuo com o Api-Connect

Mantenho duas trilhas independentes para estudar APIs: Node.js/Express e .NET 10 com Aspire. Ao propor alterações, preservo a distinção entre essas implementações e documento diferenças relevantes.

## Ambiente

- Node.js 22 e npm.
- .NET 10 SDK.

## Verificações antes de enviar alterações

```bash
npm ci
npm test
node --check server.js
dotnet restore "Api-Connect.slnx"
dotnet build "Api-Connect.slnx" --configuration Release
```

## Diretrizes

- Incluo testes para mudanças nos endpoints e nas regras de validação.
- Mantenho contratos e exemplos coerentes com a implementação correspondente.
- Não apresento persistência em memória como banco de dados persistente.
- Não versiono segredos, dados pessoais ou credenciais.
