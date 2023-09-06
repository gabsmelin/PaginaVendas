import logo  from '../assets/img/logo.png' 
import './Cabecalho.css'
import {Link} from 'react-router-dom';

export default function Cabecalho() {
    return(
        <div>
            <header>
                <ul>
                    <li><Link to='/'><img className="logo" src={logo} alt="Logo" /></Link></li>
                    <li><Link to='/ '>Home</Link></li>
                    <li><Link to='/promocao'>Promoção</Link></li>
                    <li><Link to='/aparelho'>Aparelhos</Link></li>
                    <li><Link to='/manutencao'>Loja</Link></li>
                    <li><Link to='/manutencao'>Mac</Link></li>
                    <li><Link to='/manutencao'>Ipad</Link></li>
                    <li><Link to='/manutencao'>Iphone</Link></li>
                    <li><Link to='/manutencao'>Watch</Link></li>
                    <li><Link to='/manutencao'>AirPods</Link></li>
                </ul>
            </header>
        </div>
    )
}