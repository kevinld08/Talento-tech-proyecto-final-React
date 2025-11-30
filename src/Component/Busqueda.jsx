import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductosContext } from "./ProductosContext"; 
import ProdCarrito from "./ProdCarrito"; 

function Busqueda() {
  const { productos } = useContext(ProductosContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const palabra = query.get("q")?.toLowerCase() || "";

  const resultados = productos.filter((p) =>
    p.title.toLowerCase().includes(palabra)
  );

  return (
    <div className="container mt-4">
      <h3>Resultados de búsqueda: "{palabra}"</h3>
      <hr />

      {resultados.length === 0 && <p>No se encontraron productos.</p>}

      <div 
        className="d-flex flex-wrap justify-content-start"
        style={{ gap: "20px",marginBottom: "50px" }} 
      >
        {resultados.map((item) => (
          <div 
            key={item.id} 
            style={{ flex: "0 0 calc(33.333% - 20px)" }} 
          >
            <ProdCarrito product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Busqueda;