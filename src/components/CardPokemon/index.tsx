import { IPokemon } from "../../services/types";
import { CardPokemonStyle, PokemonTypes } from "./styles";

export default function CardPokemon({ id, name, photo, type, types }: IPokemon) {
    types = types.slice(1)
    return (
        <CardPokemonStyle>
            <li>{id}</li>
            <li>{name}</li>
            <li><img src={photo} alt="" /></li>
            <PokemonTypes>
                <li>{type}</li>
                {types.map((type, index) => <li key={index}>{type}</li>)}
            </PokemonTypes>
        </CardPokemonStyle>
    )
}