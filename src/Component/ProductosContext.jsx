import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../apiURL";

export const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);

   
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos", err));
  }, []);

  
  const agregarProducto = (producto) => {
    setProductos((prev) => [...prev, producto]);
  };
 
  const editarProducto = (updatedProduct) => {
    setProductos((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

   
  const eliminarProducto = async (id) => {
    try {
   
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error eliminando producto", err);
    }
  };

  return (
    <ProductosContext.Provider
      value={{ productos, agregarProducto, editarProducto, eliminarProducto }}
    >
      {children}
    </ProductosContext.Provider>
  );
}
