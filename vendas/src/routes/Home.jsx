import { Link } from "react-router-dom";
import Celulares from '../assets/img/celular.png';
import './Home.css';

export default function Home() {
    return(
        <>
            <div className="conteudo-cabecalho">
                <h1>iPhone 14</h1>
                <h3>Maravilindo.</h3>
                <ul>
                    <li><Link>Saiba Mais</Link></li>
                    <li><Link>Comprar</Link></li>
                </ul>
                
                <img className="celulares" src={Celulares} alt="" />
            </div>
        </>
    )
}