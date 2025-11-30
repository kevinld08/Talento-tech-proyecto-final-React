import React, { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";
import { Link } from "react-router-dom";
import "../style2.css";

function ProdCarrito({ product, onDelete, onEdit }) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const isAdmin = onDelete || onEdit;

  return (
    <div className="product-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", width: "200px" }}>
      <img src={product.image} alt={product.title} width="100%" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <p>{product.description}</p>

      {isAdmin && (
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button 
            onClick={() => onEdit(product)} 
            style={{ fontSize: "0.9em", padding: "5px 10px" }}
          >
            ✏ Editar
          </button>
          <button 
            onClick={() => onDelete(product.id)} 
            style={{ fontSize: "0.9em", padding: "5px 10px" }}
          >
            🗑 Eliminar
          </button>
        </div>
      )}

      {!isAdmin && (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <button className="button" onClick={() => agregarAlCarrito(product)}>Agregar al carrito</button>
          <Link to={`/producto/${product.id}`} style={{ textAlign: "center", marginTop: "5px", textDecoration: "none" }}>
            <button className="button">Detalles</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProdCarrito;
