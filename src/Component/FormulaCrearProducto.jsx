import React, { useState, useEffect } from "react";
import { API_URL } from "../apiURL";
import "../style2.css";

function FormulaCrearProducto({ onProductAdded, editingProduct, onEditSave }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoria, setCategoria] = useState(""); 

 
  useEffect(() => {
    if (editingProduct) {
      setTitle(editingProduct.title);
      setPrice(editingProduct.price);
      setDescription(editingProduct.description || "");
      setImage(editingProduct.image);
      setCategoria(editingProduct.categoria || "");
    }
  }, [editingProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!title.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    if (Number(price) <= 0) {
      alert("El precio debe ser mayor a 0.");
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      alert("La descripción debe tener al menos 10 caracteres.");
      return;
    }

    if (!categoria) {
      alert("Debes seleccionar una categoría.");
      return;
    }

    const productData = {
      title,
      price,
      description,
      image,
      categoria, 
      id: editingProduct ? editingProduct.id : undefined,
    };

    
    if (editingProduct) {
      try {
        const res = await fetch(`${API_URL}/${editingProduct.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        });

        const updated = await res.json();
        onEditSave(updated);

        alert("Producto editado correctamente.");
        return;
      } catch (error) {
        console.error("Error al editar producto", error);
      }
    }

   
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const data = await response.json();
      onProductAdded(data);

      
      setTitle("");
      setPrice("");
      setDescription("");
      setImage("");
      setCategoria("");

      alert("Producto agregado correctamente.");
    } catch (error) {
      console.error("Error al agregar producto", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>{editingProduct ? "Editar Producto" : "Agregar Producto"}</h3>

      <input className="input"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br />

      <input className="input"
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      /><br />

      <textarea className="input"
        placeholder="Descripción (mínimo 10 caracteres)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      /><br />

      <input className="input"
        type="text"
        placeholder="URL Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      /><br />

    
      <select className="input"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        required
      >
        <option value="">Selecciona una categoría</option>
        <option value="procesadores">Procesadores</option>
        <option value="placas-de-video">Placas de Video</option>
      </select><br />

      <button className="button" type="submit">
        {editingProduct ? "Guardar Cambios" : "Guardar Producto"}
      </button>
    </form>
  );
}

export default FormulaCrearProducto;
