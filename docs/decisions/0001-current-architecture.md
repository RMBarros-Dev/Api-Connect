# ADR-0001 — Manter duas implementações independentes para comparação

- **Status:** Registrado (arquitetura atual, documentada retrospectivamente)
- **Data do registro:** 2026-11-15

## Contexto

O repositório contém uma API Node.js/Express com persistência em memória e uma solução .NET 10 organizada com Aspire.

## Decisão atual

Mantenho ambas as implementações no mesmo repositório para estudo comparativo, mas preservo seus componentes, comandos de execução e limites de forma independente.

## Consequências

- Consigo comparar abordagens de organização backend e integração.
- Preciso executar testes e builds separados para cada stack.
- A persistência em memória do Express não oferece durabilidade entre reinicializações.
- Não afirmo equivalência funcional entre as duas trilhas sem testes comparativos correspondentes.

## Nota histórica

Registrei a organização observada no código. Não atribuo a este ADR uma motivação ou data original não documentada.
