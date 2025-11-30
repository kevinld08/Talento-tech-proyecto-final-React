import React from "react";
import { Link } from "react-router-dom";
import "../style2.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h4>Enlaces</h4>
          <Link to="/" className="footer-link">Inicio</Link>
          <Link to="/categoria/procesadores" className="footer-link">Procesadores</Link>
          <Link to="/categoria/placas-de-video" className="footer-link">Placas de video</Link>
          <Link to="/contacto" className="footer-link">Contacto</Link>
        </div>

        <div className="footer-section">
          <h4>Información</h4>
          <Link to="/sobre-nosotros" className="footer-link">Sobre Nosotros</Link>
          <Link to="/politica-privacidad" className="footer-link">Política de Privacidad</Link>
          <Link to="/terminos-condiciones" className="footer-link">Términos y Condiciones</Link>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.x.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-x"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <p className="footer-copy">
        &copy; 2025 Tienda. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
