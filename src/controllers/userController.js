const { users, generateNextId } = require('../data/usersData');

// Lista todos os usuários
function getAllUsers(req, res) {
  return res.status(200).json({ mensagem: 'Lista de usuários', usuarios: users });
}

// Busca usuário por ID
function getUserById(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({ erro: 'ID inválido', detalhes: 'ID deve ser número inteiro positivo.' });
  }

  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  return res.status(200).json({ mensagem: 'Usuário encontrado', usuario: user });
}

// Cria novo usuário
function createUser(req, res) {
  const { nome, email, cargo } = req.body;
  const id = generateNextId();
  const novo = { id, nome, email, cargo: cargo || null, criadoEm: new Date().toISOString() };
  users.push(novo);
  return res.status(201).json({ mensagem: 'Usuário criado', usuario: novo });
}

// Atualiza usuário parcialmente (merge)
function updateUser(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({ erro: 'ID inválido', detalhes: 'ID deve ser número inteiro positivo.' });
  }

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  // Merge dos campos permitidos
  const existente = users[index];
  const { nome, email, cargo } = req.body;
  if (nome !== undefined) existente.nome = nome;
  if (email !== undefined) existente.email = email;
  if (cargo !== undefined) existente.cargo = cargo;

  users[index] = existente;
  return res.status(200).json({ mensagem: 'Usuário atualizado', usuario: existente });
}

// Remove usuário
function deleteUser(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id <= 0) {
    return res.status(400).json({ erro: 'ID inválido', detalhes: 'ID deve ser número inteiro positivo.' });
  }

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  users.splice(index, 1);
  return res.status(204).send();
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
