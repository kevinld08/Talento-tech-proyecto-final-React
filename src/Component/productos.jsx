import React, { useContext, useState } from 'react';
import ProdCarrito from './ProdCarrito';
import FormAgregarProducto from './FormulaCrearProducto';
import { ProductosContext } from './ProductosContext';
import { AuthContext } from './AuthContext';

function Productos({ addToCart, showForm = false, productos = [] }) {
  const { agregarProducto } = useContext(ProductosContext) || {};
  const { isLoggedIn } = useContext(AuthContext) || {};

 
  const [visibleCount, setVisibleCount] = useState(6);
  const productosVisibles = productos.slice(0, visibleCount);

  const mostrarMas = () => {
    setVisibleCount(prev => prev + 6);
  };
  

  return (
    <div className="container mt-4">
      
      {showForm && isLoggedIn && <FormAgregarProducto onProductAdded={agregarProducto} />}

      <div className="row">
        {productosVisibles.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          productosVisibles.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProdCarrito product={product} addToCart={addToCart} />
            </div>
          ))
        )}
      </div>

      
      {visibleCount < productos.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="btn btn-primary" onClick={mostrarMas}>
            Mostrar más
          </button>
        </div>
      )}
    </div>
  );
}

export default Productos;
