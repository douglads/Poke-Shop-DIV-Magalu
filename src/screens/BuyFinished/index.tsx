import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { H1 } from "../Cart/styles";
import logo from '../../assets/logo.png';
import { Footer } from "../../components/Footer";
import { BuyText } from "./styles";
import {generateRandomString} from '../../utils/generateRandomString'

export function BuyFinished() {
    return (
        <>
            <Header>
                <section>
                    <Link to='/'>
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </section>
                <section>
                    <H1>Compra Finalizada</H1>
                </section>
            </Header>
            <main>
                <BuyText>
                    <p>Obrigado por comprar conosco seu lindo pet, seu código de compra é {generateRandomString(6)} <br />
                    Qualquer dúvida de cuidados com seu pet entre em contato conosco pelo no sac: <Link target="_blank" to={'https://wa.me/5515997120495?text=Ol%C3%A1%2C+tudo+bem%3F'}>+55 (15) 99712-0495</Link></p>
                </BuyText>
            </main>
            <Footer />
        </>
    )
}