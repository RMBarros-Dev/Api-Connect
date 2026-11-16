<p align="right"><strong>Language:</strong> <a href="README.md">Português (Brasil)</a> · <a href="README.en.md">English</a></p>

<p align="center"><img src="assets/brand/banner.svg" alt="Api-Connect API architecture comparison lab" width="100%" /></p>
<p align="center"><img src="assets/brand/logo.svg" alt="Api-Connect logo" width="76" /></p>
<h1 align="center">Api-Connect</h1>
<p align="center"><strong>Comparative backend and HTTP API learning lab.</strong></p>
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet&logoColor=white" alt=".NET 10" />
  <img src="https://img.shields.io/badge/OpenAPI-Documented-6BA539?logo=openapiinitiative&logoColor=white" alt="OpenAPI" />
</p>
<p align="center">
  <a href="https://github.com/RMBarros-Dev/Api-Connect/actions/workflows/ci.yml"><img src="https://github.com/RMBarros-Dev/Api-Connect/actions/workflows/ci.yml/badge.svg?branch=master" alt="CI status" /></a>
  <a href="https://github.com/RMBarros-Dev/Api-Connect/actions/workflows/codeql.yml"><img src="https://github.com/RMBarros-Dev/Api-Connect/actions/workflows/codeql.yml/badge.svg?branch=master" alt="CodeQL status" /></a>
</p>

## 01 · Overview

Api-Connect is a learning repository containing two independent HTTP service implementations: Node.js/Express and .NET 10 with .NET Aspire. It is a comparative lab, not one hybrid application.

## 02 · Purpose and Learning Context

The project explores route design, backend organization, API contracts, HTTP behavior and tooling in different runtimes. The two tracks remain independent so their structures and dependencies can be studied separately.

## 03 · Implementation Tracks

| Track | Main components | Purpose |
|---|---|---|
| Node.js | Express, controllers, routes and in-memory data | Demonstrate CRUD-style user endpoints. |
| .NET | ASP.NET Core API, Aspire AppHost, ServiceDefaults and Blazor Web | Demonstrate a coordinated .NET service and web client. |

## 04 · Node.js API Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Check whether the service is responding. |
| GET | `/users` | List users. |
| GET | `/users/:id` | Retrieve a user by identifier. |
| POST | `/users` | Create a user. |
| PUT | `/users/:id` | Replace user data. |
| DELETE | `/users/:id` | Delete a user. |

The JSON body parser is limited to 32 KB. User responses set `Cache-Control: no-store`.

## 05 · .NET 10 Service

The .NET solution contains:
- `Api-Connect.ApiService/`: ASP.NET Core service with example routes.
- `Api-Connect.AppHost/`: local startup and orchestration.
- `Api-Connect.ServiceDefaults/`: shared service configuration.
- `Api-Connect.Web/`: Blazor Web application and API client.

The service documents `/` and `/weatherforecast`. OpenAPI mapping is enabled in the development environment.

## 06 · Architecture

```mermaid
flowchart TB
  subgraph NodeTrack["Node.js track"]
    Client[HTTP Client] --> Express[Express]
    Express --> Routes[Routes]
    Routes --> Controllers[Controllers]
    Controllers --> Memory[(In-memory data)]
  end
  subgraph DotNetTrack[".NET track"]
    Host[.NET Aspire AppHost] --> API[ASP.NET Core API]
    Host --> Web[Blazor Web]
    Web --> API
    API --> Defaults[ServiceDefaults]
  end
```

## 07 · Technology Stack

| Track | Technologies |
|---|---|
| Node.js | Node.js 18+, npm, Express 4 and JavaScript |
| .NET | .NET 10, ASP.NET Core, .NET Aspire and Blazor |
| API documentation | OpenAPI in the development environment |
| Validation | Repository CI and CodeQL workflows |

## 08 · Requirements

- Node.js and npm for the Express track.
- .NET 10 SDK for the .NET track.
- .NET Aspire tooling or Visual Studio is optional for the integrated experience.
- Git to clone the repository.

## 09 · Run the Node.js Track

From the repository root:

```bash
npm install
npm start
```

The API starts at `http://localhost:3000`. For automatic restart during development:

```bash
npm run dev
```

## 10 · Run the .NET Track

From the repository root:

```bash
dotnet restore Api-Connect.slnx
dotnet run --project Api-Connect.AppHost/Api-Connect.AppHost.csproj
```

Use AppHost logs to identify the local service addresses.

## 11 · Example Request Payload

Example body for `POST /users` in the Express track:

```json
{
  "nome": "Example User",
  "email": "user@example.com",
  "cargo": "Developer"
}
```

Use synthetic data only. The sample payload uses the field names implemented by the demonstration endpoint.

## 12 · Data Storage and Persistence

The Express implementation stores records in memory. Data is lost when the process restarts; this is not durable storage. The .NET track's persistence behavior must be assessed from its own implementation and configuration; do not assume both tracks share a database.

## 13 · Security and Operational Boundaries

The Express demonstration does not implement authentication or authorization and must not be exposed as a production service. Do not use real personal data. Keep secrets outside version control. Before public exposure, review authentication, authorization, CORS, rate limits, validation and logging.

## 14 · Quality and Validation

Use the repository's CI and CodeQL workflows as automated evidence. Review the exact workflow steps and run the relevant Node.js and .NET builds locally before relying on a result. A green workflow does not establish production readiness.

## 15 · Repository Structure

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
├── assets/brand/
├── server.js
├── package.json
├── package-lock.json
└── Api-Connect.slnx
```

## 16 · Development Methodology

Keep the Node.js and .NET tracks independent and clearly labeled. Document routes, HTTP methods, payloads and response codes. Use synthetic examples and validate each track with its own runtime and dependencies.

## 17 · Documentation and Engineering Principles

- [Project structure](docs/project-structure.md).
- [Brand guide](docs/brand/README.md).
- [Banner](assets/brand/banner.svg) and [logo](assets/brand/logo.svg).

Preserve clear API contracts, external configuration for secrets, explicit storage boundaries and development-only safeguards.

## 18 · License and Attribution

See [LICENSE.txt](LICENSE.txt) for the MIT license and applicable terms.
