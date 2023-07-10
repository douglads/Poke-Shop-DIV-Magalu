import { useState, useEffect } from "react";
import { getPokemonDetail } from "../../services/poke.service";
import { IPokemon } from "../../services/types";
import CardPokemon from "../CardPokemon";
import { ListPokemonStyle } from "./styles";

export default function ListPokemon() {
    function gerarValorAleatorio(): number {
        const chanceAte300 = 0.5;
        const chanceAte1000 = 0.3;
        const chanceAte2000 = 0.15;
        const chanceAte1300 = 0.05;
      
        const random = Math.random();
        let valorMaximo = 0;
      
        if (random <= chanceAte300) {
          valorMaximo = 300;
        } else if (random <= chanceAte1000) {
          valorMaximo = 1000;
        } else if (random <= chanceAte2000) {
          valorMaximo = 2000;
        } else if (random <= chanceAte1300) {
          valorMaximo = 13000;
        }
      
        const valorAleatorio = Math.random() * valorMaximo;
        return Math.round(valorAleatorio * 100) / 100;
      }
      
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
                        photo: response.sprites.other.dream_world.front_default,
                        price: `${gerarValorAleatorio()} R$`
                    })
                }
            }
            setPokemon(poke)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemon(1, 20)
    })
    
    fetchPokemon(1, 20)
    return (
        <ListPokemonStyle>
            {pokemon.map(pokeDetail =>
                <CardPokemon
                    name={pokeDetail.name}
                    id={pokeDetail.id}
                    type={pokeDetail.type}
                    types={pokeDetail.types}
                    photo={pokeDetail.photo}
                    price={pokeDetail.price}
                    key={pokeDetail.id}
                />)}
        </ListPokemonStyle>
    )
}
