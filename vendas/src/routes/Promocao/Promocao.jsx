import Promocao01 from '../../assets/img/promocao-one.jpg'
import Promocao02 from '../../assets/img/promocao.png'
import './Promocao.css'

export default function Promocao() {
    document.title = "Promoções";
    return(
        <>
            <div className='container'>
                <h1>Próximas promoções</h1>
                <img src={Promocao01} alt="" />
                <img src={Promocao02} alt="" />
            </div>
        </>
    )
}