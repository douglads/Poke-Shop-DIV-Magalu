import { useState } from "react";
import { Container } from "./styles";
import { StyleSheetManager } from "styled-components";

export default function Input() {
    const [isHidden, setIsHidden] = useState(true);

    const handlHide = () => {
        setIsHidden(!isHidden);
    };
    const hide: "Hide" | "No-Hide" = isHidden ? "Hide" : 'No-Hide'
    return (
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'hiddenstyle'}>
                <Container hiddenstyle={hide}>
                    <input placeholder="Pesquisar" aria-label="Digite sua pesquisa" className="input" name="text" type="search" />
                    <div onClick={handlHide} className="icon">
                        <svg viewBox="0 0 512 512" className="ionicon" xmlns="http://www.w3.org/2000/svg">
                            <title>Search</title>
                            <path strokeWidth="32" strokeMiterlimit="10" stroke="#000000" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                            <path d="M338.29 338.29L448 448" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" stroke="#000000" fill="none"></path>
                        </svg>
                    </div>
                </Container>
            </StyleSheetManager>
    )
}