// Middleware para validar payload de usuário em POST e PUT
// Regras: nome (string não vazia), email (formato básico via regex), cargo (opcional string)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateUser(req, res, next) {
  const { nome, email, cargo } = req.body || {};
  const erros = [];

  if (typeof nome !== 'string' || nome.trim() === '') {
    erros.push({ campo: 'nome', mensagem: 'Nome é obrigatório e deve ser uma string não vazia.' });
  }

  if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
    erros.push({ campo: 'email', mensagem: 'Email é obrigatório e deve ter formato válido.' });
  }

  if (cargo !== undefined && typeof cargo !== 'string') {
    erros.push({ campo: 'cargo', mensagem: 'Cargo, se informado, deve ser uma string.' });
  }

  if (erros.length > 0) {
    return res.status(400).json({ erro: 'Dados inválidos', detalhes: erros });
  }

  // Normaliza espaços
  req.body.nome = nome.trim();
  req.body.email = email.trim();
  if (cargo !== undefined) req.body.cargo = cargo.trim();

  return next();
}

module.exports = validateUser;
