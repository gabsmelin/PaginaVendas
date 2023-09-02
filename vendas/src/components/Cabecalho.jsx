import logo  from '../assets/img/logo.png' 
import './Cabecalho.css'

export default function Cabecalho() {
    return(
        <div>
            <header>
                <img src={logo} alt="Logo" />
                <ul>
                    <li>Loja</li>
                    <li>Mac</li>
                    <li>Ipad</li>
                    <li>Iphone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                </ul>
            </header>
        </div>
    )
}