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