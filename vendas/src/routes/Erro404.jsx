import Error from '../assets/img/erro.jpg';
import './Error404.css';

export default function Erro404() {
    return(
        <div className='container-erro'>
            <img  src={Error} alt="erro" />
        </div>
    )
}