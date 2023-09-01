import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importando componentes do router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//importanto páginas
import Aparelho from './routes/Aparelho.jsx';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import VizualizarAparelho from './routes/VizualizarAparelho.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    errorElement: <Erro404 />,
      children:[
        { path: '/home', element: <Home />},
        { path: '/aparelhos', element: <Aparelho />},
        { path: '/aparelho/aparelhos/:id', element: <VizualizarAparelho />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
