import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(res => setUsuarios(res.data));
  }, []);

  return (
    <List>
      {usuarios.map(user => (
        <ListItem button key={user.id} onClick={() => window.open(`/dados/${user.id}`, '_blank')}>
          <ListItemText primary={user.nome} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

export default Usuarios;
