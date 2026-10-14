import { useEffect, useState } from 'react';
import axios from 'axios';

function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    axios.get('http://localhost:5000/clients')
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
  };

  const handleCreateClient = async () => {
    if (!name || !email) {
      setError('El nombre y el email son obligatorios');
      return;
    }

    try {
      await axios.post('http://localhost:5000/clients', {
        name,
        email,
        phone,
        company
      });
      setSuccess('Cliente agregado correctamente');
      setError('');
      fetchClients(); // Actualizar la lista de clientes
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
    } catch (error) {
      setError('Error al agregar el cliente');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Gestión de Clientes</h2>

      {/* Formulario para agregar cliente */}
      <div>
        <h3>Agregar Cliente</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Empresa" value={company} onChange={(e) => setCompany(e.target.value)} />
        <button onClick={handleCreateClient}>Crear Cliente</button>
      </div>

      {/* Lista de clientes */}
      <div>
        <h3>Lista de Clientes</h3>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              {client.name} - {client.email} ({client.company || 'Sin empresa'})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Clients;
