const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const usuarios = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com' },
  { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com' },
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  res.json(usuario || {});
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));


// PARA RODAR O PROJETO ACESSAR A PASTA ONDE O PROJETO ESTÁ NESSE CASO: "C:\Unidep\2025\prova_n2\backend"
// E RODAR O COMANDO: npm install --force (irá criar a pasta node_modules)
// depois o comando npm start
// OBS: PODE SER PELO TERMINAL

// para o frontend é a mesma coisa, porém acessar a pasta frontend.
// e o caminho está em: C:\Unidep\2025\revisao_n2\frontend.
// e acessar no navegador o endereço: http://localhost:3000/