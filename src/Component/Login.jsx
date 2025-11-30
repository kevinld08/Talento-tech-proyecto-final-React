import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login, setUserRole } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
     
      if (localStorage.getItem('role') === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === 'admin' && password === '1234') {
      login();
      localStorage.setItem('role', 'admin'); 
      setUserRole('admin');
      navigate('/dashboard');
    } 
    else if (usuario === 'user' && password === '1234') {
      login();
      localStorage.setItem('role', 'user'); 
      setUserRole('user');
      navigate('/');
    } 
    else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="no-animacion">Iniciar sesión</h2>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingrese su usuario"
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 80vh;
          background: linear-gradient(to right, #000000ff);
          padding: 20px;
        }
        .login-form {
          background-color: white;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          width: 100%;
          max-width: 400px;
        }
        .login-form h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
        }
        .form-group input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          transition: border 0.3s, box-shadow 0.3s;
        }
        .form-group input:focus {
          border-color: #2575fc;
          box-shadow: 0 0 5px rgba(37,117,252,0.5);
        }
        button[type="submit"] {
          width: 100%;
          padding: 12px;
          background-color: #2575fc;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }
        button[type="submit"]:hover {
          background-color: #6a11cb;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}

export default Login;
