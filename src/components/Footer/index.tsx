import { Link } from "react-router-dom";
import {
    Footer as FooterStyle
} from "./styles";

import { LinkedinLogo, Envelope, GithubLogo, WhatsappLogo } from "@phosphor-icons/react";
export function Footer() {
    return (
        <FooterStyle>
            <div>
                <ul id="Contato">
                    <h4>Contatos:</h4>
                    <li>
                        <Link target="_blank" to={'https://www.linkedin.com/in/dev-douglas-machado/'}>
                            <LinkedinLogo size={32} color="var(--orange-white)" /><span> Douglas Machado</span>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" to={'mailto:douglasfm1995@gmail.com'}>
                            <Envelope size={32} color="var(--orange-white)" /><span>douglasfm1995@gmail.com</span>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" to={'https://wa.me/5515997120495?text=Ol%C3%A1%2C+tudo+bem%3F'}>
                            <WhatsappLogo size={32} color="var(--orange-white)" /><span>+55 (15) 99712-0495</span>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" to={'https://github.com/douglads/Poke-Shop-DIV-Magalu'}>
                            <GithubLogo size={32} color="var(--orange-white)" /><span>Github: douglads</span>
                        </Link>
                    </li>
                </ul>
                <article id="about">
                    <h4>
                        Sobre:
                    </h4>
                    <p>Este projeto foi desenvolvido para a conclusão do curso DIV-Magalu React, no qual utilizamos a <Link to={'https://pokeapi.co/'} target="_blank">PokéApi</Link> como backend e com isso criamos uma PetShop de Pokémon e pudemos por em prática todo nosso aprendizado, meus agradecimentos a: Magalu e Gama Academy por esse excelente aprendizado.</p>
                </article>
            </div>
            <p>© Todos os direitos reservados</p>
        </FooterStyle>
    )
}