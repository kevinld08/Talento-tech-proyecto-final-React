import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductosContext } from "./ProductosContext";
import ProdCarrito from "./ProdCarrito";
import "../style2.css";  

function CategoriaPage() {
  const { categoria } = useParams();
  const { productos } = useContext(ProductosContext);

  const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  };

  const productosFiltrados = productos.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
  );

  return (
    <div className="categoria-page">
      <h2 className="producto-izquierda">
        {capitalizarPrimeraLetra(categoria.replace(/-/g, " "))}
      </h2>

      {productosFiltrados.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ul className="productos-grid">
          {productosFiltrados.map((product) => (
            <li key={product.id} className="producto-izquierda">
              <ProdCarrito product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoriaPage;
