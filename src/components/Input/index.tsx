import { useState } from "react";
import { Container } from "./styles";


export default function Input() {
    const [isHidden, setIsHidden] = useState(false);

    const handlHide = () => {
      setIsHidden(!isHidden);
    };
  
    return (
        <Container hiddenStyle={isHidden}>
            <input placeholder="Pesquisar" aria-label="Digite sua pesquisa" className="input" name="text" type="search" />
            <div onClick={handlHide} className="icon">
                <svg viewBox="0 0 512 512" className="ionicon" xmlns="http://www.w3.org/2000/svg">
                    <title>Search</title>
                    <path stroke-width="32" stroke-miterlimit="10" stroke="#a0a1a1" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                    <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10" stroke-linecap="round" stroke="#a0a1a1" fill="none"></path>
                </svg>
            </div>
        </Container>
    )
}