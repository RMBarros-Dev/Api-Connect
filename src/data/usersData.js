// Persistência em memória: array de usuários inicial
// Cada usuário: { id, nome, email, cargo, criadoEm }
const users = [
  { id: 1, nome: 'Ana Silva', email: 'ana.silva@example.com', cargo: 'Desenvolvedora', criadoEm: new Date().toISOString() },
  { id: 2, nome: 'Bruno Souza', email: 'bruno.souza@example.com', cargo: 'Analista', criadoEm: new Date().toISOString() },
  { id: 3, nome: 'Carla Pereira', email: 'carla.pereira@example.com', cargo: 'Gerente', criadoEm: new Date().toISOString() }
];

function generateNextId() {
  if (users.length === 0) return 1;
  return Math.max(...users.map(u => u.id)) + 1;
}

module.exports = { users, generateNextId };
