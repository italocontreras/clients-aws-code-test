import { Box, Table, TableRow, TableCell, TableHead, Typography, TableBody, styled, Button } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Component = styled(Box)({
  width: '80%',
  margin: '50px auto',
  '& > h4': {
    marginBottom: '20px'
  },
  '& > div > table > thead': {
    backgroundColor: '#FFB347'
  },
  '& > div > table > thead > tr > th': {
    color: '#FFFFFF'
  }
});



const Clients = () => {
  const [clients, setClients] = useState([]);

  const API_URL = 'https://j9luw8noe9.execute-api.us-east-2.amazonaws.com/Dev';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(API_URL);
        const parsedData = JSON.parse(response.data.body).Items;
        // Ordenar los clientes por ID de menor a mayor
        parsedData.sort((a, b) => a.id - b.id);
        setClients(parsedData);
      } catch (error) {
        console.error(error)
      }
    }
    getData();
  }, [])

  return (
    <Component>
      <Typography variant="h4">Clients</Typography>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              clients.map(client => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.lastName}</TableCell>
                  <TableCell>{client.dni}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.address}</TableCell>
                  <TableCell>{client.age}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Box>
    </Component>
  )
}

export default Clients;
