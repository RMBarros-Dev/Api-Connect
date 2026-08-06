const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Cria instância do Express
const app = express();

// Middlewares globais
app.use(express.json());

// Healthcheck
app.get('/', (req, res) => {
  return res.status(200).json({ mensagem: 'API em execução' });
});

// Rotas de usuário montadas em /users
app.use('/users', userRoutes);

// Middleware global de erro - deve ficar por último
app.use(errorHandler);

module.exports = app;
