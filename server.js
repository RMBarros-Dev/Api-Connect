// Ponto de entrada da aplicação
// Importa a configuração do app Express e inicia o servidor na porta 3000
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Shutdown gracioso em SIGTERM / SIGINT
function shutdown() {
  console.log('Iniciando shutdown gracioso...');
  server.close(() => {
    console.log('Servidor finalizado.');
    process.exit(0);
  });
  // Força encerramento após 10 segundos
  setTimeout(() => {
    console.error('Encerramento forçado');
    process.exit(1);
  }, 10000);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
