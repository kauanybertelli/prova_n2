import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

function Dados() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/usuarios/${id}`)
      .then(res => setUsuario(res.data));
  }, [id]);

  return usuario ? (
    <div>
      <Typography variant="h5">{usuario.nome}</Typography>
      <Typography>{usuario.email}</Typography>
    </div>
  ) : <Typography>Carregando...</Typography>;
}

export default Dados;
