const express = require('express');
const app = express();
const path = require('path');

// Rota principal
app.get('/', (req, res) => {
    res.sendFile('src/views/index.html', { root: __dirname });
});

data = {'integrantes':[
    {'nome':'João Pedro Vieira da Cunha Caetano'},
    {'nome':'Pedro Henrique Sarda'},            
    {'nome':'Matheus de Souza Alberton'},
    {'nome':'Victor Germi'}

]};

app.get('/integrantes', (req, res) => {
    res.json(data)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});