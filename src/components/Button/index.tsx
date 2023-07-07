import { ButtonStyled } from "./styles"

interface IButton {
    text: string
    heandleClick: () => void
}

export default function Button({heandleClick, text}:IButton){
    return <ButtonStyled type="submit" onClick={heandleClick}>{text}</ButtonStyled>
}