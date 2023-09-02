
import { ListaAparelho } from "../components/ListaAparelho";
import './Aparelho.css';

export default function Aparelho() {
    document.title = "Aparelhos";


    return(
        <div>
            <div>
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {ListaAparelho.map((produto,indice)=>(
                        <tr className='aparelhos' key={indice} >
                            <td><img src={produto.img} alt="" /></td>
                            <td>Nome do Aparelho - {produto.nome}</td>
                            <td>Cor do Aparelho - {produto.cor}</td>
                            <td>GB do Aparelho - {produto.gb}</td>
                            <td>Preço do Aparelho - {produto.preco}</td>    
                            <button>Ver mais detalhes</button>
                        </tr>
                    ))}
            
                    </tbody>
                    <tfoot>
                    </tfoot>    
                </table>
            </div>
        </div>
    )
}