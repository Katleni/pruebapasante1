import React, { useState } from 'react';
import axios from 'axios';

const FormularioCliente = ({ actualizarClientes }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/clientes', {
        nombre,
        apellido,
        email,
      });
      actualizarClientes();
      setNombre('');
      setApellido('');
      setEmail('');
    } catch (error) {
      console.error('Error al agregar cliente:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Apellido"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Agregar Cliente</button>
      </form>
    </div>
  );
};

export default FormularioCliente;

