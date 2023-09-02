import { Link } from "react-router-dom";
import { ListaAparelho } from "../components/ListaAparelho";
import './Aparelho.css';

export default function Aparelho() {
    document.title = "Aparelhos";


    return(
        <div className="container-apa">
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {ListaAparelho.map((produto,indice)=>(
                        <tr className='aparelhos' key={indice} >
                            <td><img src={produto.img} alt="" /></td>
                            <td>Nome do Aparelho - {produto.nome}</td>
                            <td>Preço do Aparelho - {produto.preco}</td>    
                            <td className="btn"><Link to={`/aparelho/detalhes/${produto.id}`}>Ver mais detalhes</Link></td>
                        </tr>
                    ))}
                    
            
                    </tbody>
                    <tfoot>
                    </tfoot>    
                </table>
        </div>
    )
}