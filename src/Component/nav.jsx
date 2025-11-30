import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { CarritoContext } from './CarritoProvider';
import CarritoModal from './CarritoModal';
import "../style2.css";

function Nav() {
  const navigate = useNavigate();
  const { isLoggedIn, logout, userRole } = useContext(AuthContext);
  const { carrito } = useContext(CarritoContext); 
  const [isCartOpen, setIsCartOpen] = useState(false); 

  
  const [busqueda, setBusqueda] = useState("");

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

 
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/buscar?q=${busqueda}`);
    setBusqueda("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img 
          src="\img\computer (1).png" 
           alt="Logo" 
           style={{ width: "50px", height: "auto" }} 
            /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" id="link" to="/">Inicio</Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Componentes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/categoria/procesadores">
                      Procesadores
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoria/placas-de-video">
                      Placas de Video
                    </Link>
                  </li>
                </ul>
              </li>

              {isLoggedIn && userRole === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Admin</Link>
                </li>
              )}
            </ul>

          
            <form className="d-flex me-3" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li
                className="nav-item"
                style={{ position: 'relative', cursor: 'pointer', marginRight: '10px' }}
                onClick={() => setIsCartOpen(true)}
              >
                <span style={{ fontSize: '24px' }}>🛒</span>
                {carrito.length > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -5,
                      right: -10,
                      background: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '12px',
                    }}
                  >
                    {carrito.length}
                  </span>
                )}
              </li>

              <li className="nav-item">
                <button
                  onClick={handleClick}
                  className="btn btn-outline-primary"
                >
                  {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CarritoModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Nav;
