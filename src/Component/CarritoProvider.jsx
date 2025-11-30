import React, { createContext, useState } from 'react';


export const CarritoContext = createContext();


export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

   
    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
           
            setCarrito(prev =>
                prev.map(item =>
                    item.id === producto.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
          
            const newProduct = {
                ...producto,
                uniqueId: `${producto.id}-${Date.now()}`, 
                quantity: 1, 
            };
            setCarrito(prev => [...prev, newProduct]);
        }
    };

    
    const eliminarDelCarrito = (uniqueId) => {
        setCarrito((prev) => prev.filter(item => item.uniqueId !== uniqueId));
    };

   
    const vaciarCarrito = () => {
        setCarrito([]);
    };


    const actualizarCantidad = (uniqueId, nuevaCantidad) => {
        if (nuevaCantidad < 1) return; 

        setCarrito(prev =>
            prev.map(item =>
                item.uniqueId === uniqueId
                    ? { ...item, quantity: nuevaCantidad }
                    : item
            )
        );
    };

    
    const calcularTotal = () => {
        return carrito.reduce((total, item) => {
            const price = parseFloat(item.price); 
            const quantity = parseInt(item.quantity, 10);  

            if (!isNaN(price) && !isNaN(quantity)) {
                return total + (price * quantity);
            }

            return total; 
        }, 0);
    };

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarDelCarrito,
            actualizarCantidad,
            calcularTotal, 
        }}>
            {children}
        </CarritoContext.Provider>
    );
}
