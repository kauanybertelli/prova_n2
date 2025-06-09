import { useEffect, useState } from 'react';
import axios from 'axios';
// Componentes estão sendo importados do '@mui/material';
import {
  Box,
  Typography,
  Card,
  CardContent,
  ListItem,
  ListItemText
} from '@mui/material';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(res => setUsuarios(res.data));
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: 500,
        px: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      {usuarios.map(user => (
        <Card
          key={user.id}
          variant="outlined"
          sx={{
            mb: 2,
            cursor: 'pointer',
            transition: '0.3s',
            '&:hover': { boxShadow: 3 }
          }}
          /* A cada clique abra uma nova guia no navegador com id do usuário selecionado. */
          onClick={() => window.open(`/dados/${user.id}`, '_blank')}
        >
          {/* Lista de item que aparece na tela com os usuários. */}
          <CardContent>
            <ListItem>
              <ListItemText primary={user.nome} secondary={user.email} />
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Usuarios;
