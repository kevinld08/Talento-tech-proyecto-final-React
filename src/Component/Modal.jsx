
import React from "react";

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const contentStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  minWidth: "300px",
  maxWidth: "500px",
};

function Modal({ children, onClose }) {
  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <button style={{ float: "right" }} onClick={onClose}>
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
