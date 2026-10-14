import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('viewer'); // Default: solo lectura
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/register', { name, email, password, role });
      console.log(res.data);
      navigate('/login'); // Redirige al login después de registrarse
    } catch (error) {
      setError('Error al registrar usuario');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Usuario (Solo Vista)</option>
        <option value="editor">Editor (Puede Modificar)</option>
      </select>
      <button onClick={handleSignUp}>Registrarse</button>
      <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
    </div>
  );
}

export default SignUp;
