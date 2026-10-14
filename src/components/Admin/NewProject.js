import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewProject() {
  const [project_code, setProjectCode] = useState('');
  const [description, setDescription] = useState('');
  const [customer, setCustomer] = useState('');
  const [start_date, setStartDate] = useState('');
  const [due_date, setDueDate] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      await axios.post('http://localhost:5000/projects', {
        project_code,
        description,
        customer,
        start_date,
        due_date,
        duration
      });
      navigate('/projects'); // Redirige a la lista de proyectos tras crearlo
    } catch (error) {
      setError('Error al crear el proyecto');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Proyecto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Código del Proyecto" onChange={(e) => setProjectCode(e.target.value)} />
      <input type="text" placeholder="Descripción" onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Cliente" onChange={(e) => setCustomer(e.target.value)} />
      <input type="date" placeholder="Fecha de Inicio" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" placeholder="Fecha de Entrega" onChange={(e) => setDueDate(e.target.value)} />
      <input type="number" placeholder="Duración (días)" onChange={(e) => setDuration(e.target.value)} />
      <button onClick={handleCreateProject}>Crear Proyecto</button>
    </div>
  );
}

export default NewProject;
