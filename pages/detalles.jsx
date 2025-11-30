import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductosContext } from '../src/Component/ProductosContext';
import { CarritoContext } from '../src/Component/CarritoProvider';
import '../src/detalles.css';

function Detalles() {
  const { id } = useParams();  
  const { productos } = useContext(ProductosContext);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const producto = productos.find(p => p.id.toString() === id);
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalles-container">
      <div className="detalles-imagen">
        <img src={producto.image} alt={producto.title} />
      </div>

      <div className="detalles-info">
        <h2 className="no-animacion">{producto.title}</h2>
        <p><strong>Descripción:</strong> {producto.description}</p>
        <p><strong>Precio:</strong> ${producto.price}</p>
        {producto.category && <p><strong>Categoría:</strong> {producto.category}</p>}

        <div className="detalles-beneficios">
          <div className="detalles-beneficio">
            <i className="fas fa-shield-alt"></i>
            <span>Garantía oficial de 12 meses</span>
          </div>
          <div className="detalles-beneficio">
            <i className="fas fa-credit-card"></i>
            <span>Pagá con tarjeta de crédito, débito o transferencia</span>
          </div>
          <div className="detalles-beneficio">
            <i className="fas fa-truck"></i>
            <span>Envío a todo el país</span>
          </div>
        </div>

        <button 
          className="detalles-button"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Detalles;
