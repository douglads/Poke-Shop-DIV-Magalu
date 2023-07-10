import { IPokemon } from "../../services/types";
import { CardPokemonStyle, PokemonTypes } from "./styles";
import { colorsAndTypes } from "./colorsAndTypes";
import Button from "../Button";


export default function CardPokemon({ id, name, photo, type, types, price }: IPokemon) {
    const colorBg = colorsAndTypes.filter(colorType => colorType.type === type)[0]?.color || '#3ff366'
    const typesPokemon = types[1] ? <PokemonTypes pokemontypesbg={colorBg}><span>{types[1]}</span></PokemonTypes> : <div/>

    function ops() {
        alert('click')
    }
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
            <Button text="Adicionar a pokebola" heandleClick={ops} />
        </CardPokemonStyle>
    )
}