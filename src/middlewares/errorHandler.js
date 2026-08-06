// Middleware global de tratamento de erros
// Captura erros não tratados, loga e retorna 500 com mensagem genérica
function errorHandler(err, req, res, next) {
  console.error('Erro não tratado:', err);
  return res.status(500).json({ erro: 'Ocorreu um erro interno no servidor.' });
}

module.exports = errorHandler;
