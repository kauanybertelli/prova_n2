import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress
} from '@mui/material';

function Dados() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/usuarios/${id}`)
      .then(res => setUsuario(res.data));
  }, [id]);

  if (!usuario) return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <CircularProgress />
      <Typography sx={{ mt: 2 }}>Carregando dados...</Typography>
    </Box>
  );

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
      <Card sx={{ p: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>{usuario.nome}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {usuario.email}</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>ID do usuário: {usuario.id}</Typography>
        </CardContent>
      </Card>

      <Button variant="contained" onClick={() => navigate('/usuarios')}>
        Voltar
      </Button>
    </Box>
  );
}

export default Dados;
