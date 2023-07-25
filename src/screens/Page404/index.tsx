import { Link } from "react-router-dom";
import Header from "../../components/Header";
import PokemonBallCount from "../../components/PokemonBallCount";
import { H1 } from "../Cart/styles";
import logo from '../../assets/logo.png'
import { useContext, useState, useEffect } from "react"
import { CartItemsContext } from "../../Context/CartItems"
import { Footer } from "../../components/Footer";
import { Main404 } from "./styles";
import { useNavigate } from "react-router-dom";

export function Page404() {
    const { CartItems } = useContext(CartItemsContext)
    const [time, setTime] = useState(5)
    const redirect = useNavigate()
    useEffect(() => {
        if (time <= 0) {
            redirect('/')
        } else if (time > 0) {
            setInterval(() => {
                const timer = time - 1
                setTime(timer)
            }, 1000);
        }
    }, [time, redirect])

    return (
        <>
            <Header>
                <section>
                    <Link to='/'>
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </section>
                <section className="center">
                    <H1>Osh... Essa página não existe</H1>
                </section>
                <PokemonBallCount value={CartItems.count} />
            </Header>
            <Main404>
                <p>Você será redirecionado em {time} segundos para a tela inicial</p>
            </Main404>
            <Footer />
        </>
    )
}