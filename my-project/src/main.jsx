import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import QuemSouEu from './pages/QuemSouEu/QuemSouEu.jsx';
import Contato from './pages/Contato/Contato.jsx';
import Projetos from './pages/Projetos/Projetos.jsx'
import RedesSociais from './pages/RedesSociais/RedesSociais.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path:'/quemsoueu', element: <Quemsoueu/>},
      {path:'/contato', element: <Contato/>},
      {path:'/projetos', element: <Projetos/>},
      {path:'/redessociais', element: <RedesSociais/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)