import React, { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Component/header';
import Footer from './Component/footer';
import Nav from './Component/nav';

import CategoriaPage from "./Component/CategoriaPage";
import Main from './Component/main';
import Banner from './Component/Banner';
import Productos from './Component/productos';
import Busqueda from './Component/Busqueda'
import Detalles from '../pages/detalles';

import { AuthProvider } from './Component/AuthContext';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import ProtectedRoute from './Component/ProtectedRoute';
import { ProductosProvider, ProductosContext } from './Component/ProductosContext';

function InicioPage() {
  


  const context = useContext(ProductosContext) || {};
  const productos = context.productos || [];


  return (
    <>
      <Main />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
    
       <Productos showForm={false} productos={productos} />
        
      </div>
    </>
  );
}


function App() {
  return (
    <AuthProvider>
      <ProductosProvider>
        
        <Nav />
        <Header />
        
        <Routes>
        
          <Route path="/login" element={<Login />} />

      
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

       
          <Route path="/" element={<InicioPage />} />
         <Route path="/producto/:id" element={<Detalles />} />
          <Route path="/categoria/:categoria" element={<CategoriaPage />} />
            <Route path="/buscar" element={<Busqueda />} />
        </Routes>
            <Banner/>
        <Footer />
      </ProductosProvider>
    </AuthProvider>
  );
}

export default App;
