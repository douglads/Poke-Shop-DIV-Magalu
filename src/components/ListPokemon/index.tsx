import { useState, useEffect } from "react";
import { getPokemonDetail } from "../../services/poke.service";
import { IPokemon } from "../../services/types";
import CardPokemon from "../CardPokemon";
import { ListPokemonStyle } from "./styles";

export default function ListPokemon() {

    const [pokemon, setPokemon] = useState<IPokemon[]>([])
    const poke: IPokemon[] = []
    async function fetchPokemon(first: number, last: number) {
        try {
            for (let index = first; index <= last; index++) {
                const response = await getPokemonDetail(index)
                if (poke.findIndex(pokemon => pokemon.id === response.id) === -1) {
                    poke.push({
                        id: response.id,
                        name: response.name,
                        type: response.types[0].type.name,
                        types: response.types.map((typeSlot: { type: { name: string; }; }) => typeSlot.type.name),
                        photo: response.sprites.other.dream_world.front_default
                    })
                }
            }
            setPokemon(poke)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemon(26, 34)
    })

    return (
        <ListPokemonStyle>
            {pokemon.map(pokeDetail =>
                <CardPokemon
                    name={pokeDetail.name}
                    id={pokeDetail.id}
                    type={pokeDetail.type}
                    types={pokeDetail.types}
                    photo={pokeDetail.photo}
                    key={pokeDetail.id}
                />)}
        </ListPokemonStyle>
    )
}
