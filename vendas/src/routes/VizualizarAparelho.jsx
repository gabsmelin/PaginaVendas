import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from "react-router-dom";
import { ListaAparelho } from "../components/ListaAparelho";
import './Vizualizar.css'


export default function VizualizarAparelho() {
    document.title = "Editar Produtos";

    const notify = () => toast("Adicionado ao carrinho");

    const {id} = useParams();

    const produtoRecuperadoPorId = ListaAparelho.filter((produto)=>{
        if(produto.id === parseInt(id)) {
            return produto;
        }
    });

    return(
        <div>
            <h1>DETALHES SOBRE O APARELHO</h1>
            <div>
                <div>
                    <img src={produtoRecuperadoPorId[0].img} alt="" />
                </div>
                <div>
                    <h2>{produtoRecuperadoPorId[0].nome}</h2>
                    <h2>{produtoRecuperadoPorId[0].preco}</h2>
                    <p>{produtoRecuperadoPorId[0].descricao}</p>
                    <p>{produtoRecuperadoPorId[0].gb}</p>
                    <p>{produtoRecuperadoPorId[0].cor}</p>
                    <h3><Link onClick={notify}>Comprar</Link><ToastContainer/></h3>
                    
                </div>
            </div>
        </div>
    )
}
