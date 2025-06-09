const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Mock de usuários.
const usuarios = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com' },
  { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com' },
];

// Chama da API para GET de Usuários retornando o mock acima.
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Chamada para retornar um usuário da lista do mock. Vai pegar o parâmetro ":id" que pode ser o valor 1 ou 2.
// Em seguida vai ser realizado a chamada da função "find" dentro da lista de usuários para encontrar o usuário pelo id.
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  res.json(usuario || {});
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));