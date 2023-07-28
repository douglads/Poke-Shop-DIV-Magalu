import Header from "../../components/Header";
import { H1 } from "../Cart/styles";
import { useState, useEffect } from "react"
import { Footer } from "../../components/Footer";
import { Main404 } from "./styles";
import { useNavigate } from "react-router-dom";

export function Page404() {
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
                <H1>Osh... Essa página não existe</H1>
            </Header>
            <Main404>
                <p>Você será redirecionado em {time} segundos para a tela inicial</p>
            </Main404>
            <Footer />
        </>
    )
}