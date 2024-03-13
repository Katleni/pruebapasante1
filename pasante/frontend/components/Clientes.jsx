import React from 'react';
import ListaClientes from './ListaClientes';
import FormularioCliente from './FormularioCliente';

const App = () => {
  const actualizarClientes = () => {
    // Método para actualizar la lista de clientes después de realizar una operación CRUD
    // Por ejemplo, puedes recargar la lista de clientes aquí
  };

  return (
    <div>
      <FormularioCliente actualizarClientes={actualizarClientes} />
      <ListaClientes />
    </div>
  );
};

export default App;

