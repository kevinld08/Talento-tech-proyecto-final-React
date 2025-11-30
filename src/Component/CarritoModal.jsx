import React, { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";
import "../style2.css";
function CarritoModal({ isOpen, onClose }) {
  const { carrito, vaciarCarrito, eliminarDelCarrito, actualizarCantidad, calcularTotal } = useContext(CarritoContext);

  if (!isOpen) return null;

  const handleChangeCantidad = (item, newQuantity) => {

    if (newQuantity < 1) return;
    actualizarCantidad(item.uniqueId, newQuantity);
  };

  const total = calcularTotal(); 

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "90%",
          color: "black",
        }}
      >
        <h2 className="no-animacion" style={{ color: "black" }}>Carrito</h2>

        {carrito.length === 0 ? (
          <p style={{ color: "black" }}>No hay productos en el carrito.</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {carrito.map((item) => (
              <div
                key={item.uniqueId}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  gap: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px" }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: "bold" }}>{item.title}</p>
                  <p style={{ margin: "2px 0" }}>${item.price}</p>
                  <p style={{ margin: "2px 0" }}>{item.description}</p>
                </div>

          
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => handleChangeCantidad(item, item.quantity - 1)}
                    style={{ padding: "5px", borderRadius: "4px", backgroundColor: "#ddd" }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleChangeCantidad(item, item.quantity + 1)}
                    style={{ padding: "5px", borderRadius: "4px", backgroundColor: "#ddd" }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => eliminarDelCarrito(item.uniqueId)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "5px 8px",
                  }}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}

     
        <div style={{ marginTop: "20px", fontWeight: "bold", color: "black" }}>
          <p>Total: ${total.toFixed(2)}</p> 
        </div>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button className="button" onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button className="button" onClick={onClose}>Cerrar</button>
          
        </div>
      </div>
    </div>
  );
}

export default CarritoModal;
