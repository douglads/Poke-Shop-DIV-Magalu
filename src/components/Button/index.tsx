import {
    ButtonAddCart,
    ButtonGarbage,
    ButtonMinusCart,
    ButtonPlusCart,
    ButtonSearch,
} from "./styles"
import trash from '../../assets/icons/trash.png';
import Glass from '../../assets/icons/glass.png';
interface IButton {
    variants: 'plusCart' | 'minusCart' | 'gabage' | 'addCart' | 'buttonSearch'
    text?: string
    heandleClick?: () => void
}

export default function Button({ heandleClick, text, variants }: IButton) {
    if (variants === 'addCart')
        return (
            <ButtonAddCart
                type="submit"
                onClick={heandleClick}
            >
                {text}
            </ButtonAddCart>)
    if (variants === 'gabage')
        return (
            <ButtonGarbage
                type="submit"
                onClick={heandleClick}
            >
                <img src={trash} alt="icone de uma lixeira" srcSet="" />
            </ButtonGarbage>)
    if (variants === 'minusCart')
        return (
            <ButtonMinusCart
                type="submit"
                onClick={heandleClick}
            >
                {text}
            </ButtonMinusCart>)
    if (variants === 'plusCart')
        return (
            <ButtonPlusCart
                type="submit"
                onClick={heandleClick}
            >
                {text}
            </ButtonPlusCart>)
    if (variants === 'buttonSearch')
        return (
            <ButtonSearch
                aria-labelledby='Clique aqui para buscar os pokemons'
                type="submit"
                onClick={heandleClick}
            >
                <img src={Glass} alt="Desenho de uma lupa" />
            </ButtonSearch>
        )
}