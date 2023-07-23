import { CardPokemonStyle, PokemonTypes } from "./styles";
import { colorsAndTypes } from "./colorsAndTypes";
import Button from "../Button";

interface ICardPokemon {
    handleClick: () => void
    name: string,
    id: number,
    type: string,
    types: string[],
    photo: string,
    price?: string,
}

export default function CardPokemon({ id, name, photo, type, types, price, handleClick }: ICardPokemon) {
    const colorBg = colorsAndTypes.filter(colorType => colorType.type === type)[0]?.color
    const typesPokemon = types[1] ? <PokemonTypes pokemontypesbg={colorBg}><span>{types[1]}</span></PokemonTypes> : <div />
    
    return (
        <CardPokemonStyle pokemontypesbg={colorBg}>
            <div id="title">
                <div id="h2"><h2>{name}</h2></div>
                <span id="number">{id}</span>
            </div>
            <ol id="types">
                <PokemonTypes pokemontypesbg={colorBg}><span>{type}</span></PokemonTypes>
                <PokemonTypes pokemontypesbg={colorBg}><img src={photo} alt="" /></PokemonTypes>
                {typesPokemon}
            </ol>
            <span id='price'>{price}</span>
            <Button variants="addCart" text="Adicionar a pokebola" heandleClick={handleClick} />
        </CardPokemonStyle>
    )
}