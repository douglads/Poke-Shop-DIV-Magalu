import Button from "../Button";
import { Container, Input as InputStyled } from "./styles";

interface IInput {
    handleClick?: () => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export default function Input({ handleClick, handleChange }: IInput) {
    return (
        <Container>
            <InputStyled
                aria-labelledby='Digite aqui sua pesquisa de pokemons'
                placeholder="Pesquisar"
                aria-label="Digite sua pesquisa"
                className="input"
                name="text"
                type="search"
                onChange={handleChange}
                />
            <Button heandleClick={handleClick} variants="buttonSearch" />
        </Container>
    )
}