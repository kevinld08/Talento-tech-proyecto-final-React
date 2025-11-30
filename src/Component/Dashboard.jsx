import React, { useState, useContext } from "react";
import FormulaCrearProducto from "./FormulaCrearProducto";
import ProdCarrito from "./ProdCarrito";
import Modal from "./Modal";
import { ProductosContext } from "./ProductosContext";
import "../dashboard.css";

function Dashboard() {
  const { productos, agregarProducto, editarProducto, eliminarProducto } = useContext(ProductosContext);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openEditModal = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleEditSave = (updatedProduct) => {
    editarProducto(updatedProduct); 
    setShowModal(false);
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    eliminarProducto(id); 
  };

  const handleProductAdded = (product) => {
    agregarProducto(product); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Administración</h1>
       

      <FormulaCrearProducto onProductAdded={handleProductAdded} />

      <h3>Productos en stock</h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {productos.map((product) => (
          <li key={product.id}>
            <ProdCarrito
              product={product}
              onEdit={openEditModal}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FormulaCrearProducto
            editingProduct={editingProduct}
            onEditSave={handleEditSave}
          />
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
