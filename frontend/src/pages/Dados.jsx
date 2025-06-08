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
  // Extrai o parametro "id" da URL.
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  // Cria o estado que irá armazenar os dados detalhados do usuário.
  useEffect(() => {
    axios.get(`http://localhost:3001/usuarios/${id}`)
      .then(res => setUsuario(res.data));
  }, [id]);

  /* 
    Enquanto os dados do usuário não são carregados (usuario === null), exibe um spinner de carregamento centralizado.
  */
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

  // Quando os dados do usuário estão disponíveis, exibe um Card com: Nome do usuário; Email; ID.
  return (
    /* 
      O Box externo usa position: absolute com top: 50% e left: 50% + transform: translate(-50%, -50%) 
      para centralizar o conteúdo exatamente no meio da tela.
    */
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
      {/* Botão de Voltar */}
      <Button variant="contained" onClick={() => navigate('/usuarios')}>
        Voltar
      </Button>
    </Box>
  );
}

export default Dados;
