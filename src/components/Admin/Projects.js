import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Lista de Proyectos</h2>
      <Link to="/projects/new">
        <button>Crear Nuevo Proyecto</button>
      </Link>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.description} - Cliente: {project.customer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
