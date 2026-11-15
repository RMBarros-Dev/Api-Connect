const { after, before, test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('../src/app');

let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await once(server, 'listening');
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  if (!server) return;
  await new Promise((resolve, reject) => {
    server.close(error => error ? reject(error) : resolve());
  });
});

test('GET / reports API health', async () => {
  const response = await fetch(`${baseUrl}/`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { mensagem: 'API em execução' });
});

test('GET /users/:id rejects invalid identifiers', async () => {
  const response = await fetch(`${baseUrl}/users/not-a-number`);
  assert.equal(response.status, 400);
  const body = await response.json();
  assert.equal(body.erro, 'ID inválido');
});

test('user CRUD lifecycle validates and persists in memory', async () => {
  const invalid = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ nome: '', email: 'not-an-email' })
  });
  assert.equal(invalid.status, 400);

  const createdResponse = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      nome: '  Teste Automatizado  ',
      email: 'teste.automatizado@example.test',
      cargo: 'QA'
    })
  });
  assert.equal(createdResponse.status, 201);
  const createdBody = await createdResponse.json();
  const userId = createdBody.usuario.id;
  assert.equal(createdBody.usuario.nome, 'Teste Automatizado');

  const readResponse = await fetch(`${baseUrl}/users/${userId}`);
  assert.equal(readResponse.status, 200);
  assert.equal((await readResponse.json()).usuario.email, 'teste.automatizado@example.test');

  const updateResponse = await fetch(`${baseUrl}/users/${userId}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      nome: 'Usuário Atualizado',
      email: 'atualizado@example.test'
    })
  });
  assert.equal(updateResponse.status, 200);
  assert.equal((await updateResponse.json()).usuario.nome, 'Usuário Atualizado');

  const deleteResponse = await fetch(`${baseUrl}/users/${userId}`, {
    method: 'DELETE'
  });
  assert.equal(deleteResponse.status, 204);

  const missingResponse = await fetch(`${baseUrl}/users/${userId}`);
  assert.equal(missingResponse.status, 404);
});
