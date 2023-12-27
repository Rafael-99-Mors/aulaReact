import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import NossosClientes from './pages/NossosClientes';
import Localizacao from './pages/Localizacao';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
      {
      path: '/',
      element: <Inicio/>
      },
      {
        path: '/sobre-nos',
        element: <SobreNos/>,
      },
      {
        path: '/contato',
        element: <Contato/>,
      },
      {
        path: '/nossos-clientes',
        element:<NossosClientes/>
      },
      {
        path: '/localizacao',
        element:<Localizacao/>
      }
])
root.render(
  <RouterProvider router={router}/>
  
   
);