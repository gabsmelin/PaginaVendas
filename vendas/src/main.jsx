import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Importando componentes do router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//importanto páginas
import Aparelho from './routes/Aparelho/Aparelho.jsx';
import Erro404 from './routes/Error/Erro404.jsx';
import Home from './routes/Home/Home.jsx';
import VizualizarAparelho from './routes/Detalhes/VizualizarAparelho.jsx';
import Promocao from './routes/Promocao/Promocao.jsx';
import Manutencao from './routes/Manutencao/Manutencao.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    errorElement: <Erro404 />,
      children:[
        { path: '/', element: <Home />},
        { path: '/promocao', element: <Promocao  />},
        { path: '/aparelho', element: <Aparelho />},
        { path: '/aparelho/detalhes/:id', element: <VizualizarAparelho />},
        { path: '/manutencao', element: <Manutencao />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
