import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    try {
      const response = await axios.get('/api/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    }
  };

  const handleEliminarCliente = async (id) => {
    try {
      await axios.delete(`/api/clientes/${id}`);
      obtenerClientes();
    } catch (error) {
      console.error('Error al eliminar cliente:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nombre} {cliente.apellido} - {cliente.email}
            <button onClick={() => handleEliminarCliente(cliente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaClientes;
