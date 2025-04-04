const express = require('express');
const app = express();
const path = require('path');

// Configuração do endpoint principal
app.get('/', (req, res) => {
    res.sendFile('src/views/index.html', { root: __dirname });
});

// Configuração da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/integrantes', (req, res) => {
    const data = {
      integrantes: [
        { nome: 'Pedro Henrique sardá wilpert' },
        { nome: 'João Pedro Vieira da Cunha Caetano ' },
        { nome: 'Matheus de Sousa Alberton'}
      ]
    };
    res.json(data);
  });