import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from "react-router-dom";
import { ListaAparelho } from "../components/ListaAparelho";
import './Vizualizar.css'


export default function VizualizarAparelho() {
    document.title = "Detalhes";

    const notify = () => toast("ADD AO CARRINHO!");

    const {id} = useParams();

    const produtoRecuperadoPorId = ListaAparelho.filter((produto)=>{
        if(produto.id === parseInt(id)) {
            return produto;
        }
    });

    return(
        <div className='container-vizu'>
            <h1>DETALHES SOBRE O APARELHO</h1>
            <div className='conteudo'>
                <div>
                    <img src={produtoRecuperadoPorId[0].img} alt="" />
                </div>
                <div className='textos'>
                    <h2>{produtoRecuperadoPorId[0].nome}</h2>
                    <h2>{produtoRecuperadoPorId[0].preco}</h2>
                    <p>{produtoRecuperadoPorId[0].descricao}</p>
                    <p>GB: {produtoRecuperadoPorId[0].gb}</p>
                    <p>Cor: {produtoRecuperadoPorId[0].cor}</p>
                    <h3><Link onClick={notify}>Comprar</Link><ToastContainer/></h3>
                    
                </div>
            </div>
        </div>
    )
}
