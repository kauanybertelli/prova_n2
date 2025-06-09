# 🧪 Prova N2 - Aplicação com Rotas e Consumo de API via Docker

Este projeto é uma aplicação fullstack construída com **ReactJS + MUI** no frontend e **Express (Node.js)** no backend. A comunicação é feita via uma **API containerizada com Docker**.

---

## 🚀 Tecnologias Utilizadas

- ReactJS (Vite)
- Material UI (MUI)
- Node.js com Express
- Docker
- React Router DOM
- Axios

---

## 📁 Estrutura de Pastas

```
prova_n2/
├── backend/        # API Express containerizada com Dockerfile.
├── frontend/       # Aplicação React com MUI - '@mui/material'
├── docker-compose.yml
```

---

## 🔧 Como Rodar o Backend Localmente (Sem Docker)

### 1. Acesse a pasta do backend:

```bash
cd C:\Unidep\2025\prova_n2\backend
```

### 2. Instale as dependências (irá criar a pasta `node_modules`) (somente ainda não foi instalado):

```bash
npm install --force
```

### 3. Inicie o servidor:

```bash
npm start
```

### 4. Acesse as rotas no navegador:

- Lista de usuários:
  ```
  http://localhost:3001/usuarios
  ```

- Detalhes de um usuário específico:
  ```
  http://localhost:3001/usuarios/1
  ```

---

## 🐳 Como Rodar com Docker

### 1. Na raiz do projeto, crie a imagem e rode o container:

### 1.1. Acessar a pasta backend.
```bash
cd backend
```

### 1.2. Autenticar-se no Docker (com o docker rodando)
```bash
docker login -u kaubertelli
```

### 1.3. Passar a senha
```bash
kaubertelli
```

### 1.4. Criar a imagem do backend
```bash
docker build -t backend-api .
```

### 1.5. Rodar a imagem
```bash
docker run -d -p 3001:3001 --name backend-container backend-api
```

### 2. Acesse via navegador nas mesmas rotas:

- http://localhost:3001/usuarios  
- http://localhost:3001/usuarios/1

---

## 🌐 Frontend React (Rodar Separado)

### 1. Acesse a pasta `frontend/`

```bash
cd frontend
```

### 2. Instale as dependências (somente ainda não foi instalado):

```bash
npm install --force
```

### 3. Depois installe as dependências do react e componentes (somente ainda não foi instalado): 
```bash
npm install react-router-dom axios @mui/material @emotion/react @emotion/styled
```

### 4. Rode a aplicação:
```bash
npm run dev
```

### 5. Acesse no navegador:

```
http://localhost:5173/usuarios
```

---

## ✅ Funcionalidades

- Rota `/usuarios`: lista usuários mockados vindos do backend.
- Rota `/dados/:id`: exibe detalhes do usuário ao clicar.
- API containerizada com Docker.
- Navegação por rotas utilizando React Router.

---

## 📝 Commits com Conventional Commits

Este projeto utiliza a convenção de commits `feat`, `fix`, `docs`, `refactor`, entre outros, para melhor organização e rastreamento de mudanças no repositório.

---

## 👩‍💻 Desenvolvido por

[Kauany Bertelli](https://github.com/kauanybertelli)
