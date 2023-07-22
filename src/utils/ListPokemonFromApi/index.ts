import { ICartItem } from "../../Context/CartItems";
import { getPokemonDetail, getAllPokemon } from "../../services/poke.service";
import { IPokemon } from "../../services/types";
import generatinRandomValues from "../generatingRandomValues";

export async function setPokemonListCard(search: string, pokemonContext: IPokemon[], CartItems: ICartItem, offset = 9) {
    const pokemon: IPokemon[] = [...pokemonContext]
    let allPokemon

    function checkPrice(id: number) {
        const cartExists = CartItems ? CartItems.item.findIndex(cartItem => cartItem.id === id) : -1
        const priceExists = pokemon.findIndex(pokemon => pokemon.id === id)

        if ((cartExists === -1) && (priceExists === -1)) {
            return generatinRandomValues()
        } if (priceExists > -1) {
            return pokemon[priceExists].price
        } else {
            return CartItems.item[CartItems.item.findIndex(cartItem => cartItem.id === id)].price
        }
    }
    try {
        const getAll = await getAllPokemon()
        allPokemon = getAll
        allPokemon = search.length > 0 ? allPokemon.filter((pokemon: IPokemon) => pokemon.name.includes(search)) : allPokemon
        offset = (offset > allPokemon.length) ? allPokemon.length : offset
        for (let i = pokemon.length; i < offset; i++) {
            const pokeDetail = await getPokemonDetail(allPokemon[i].name)
            const photoPokemon = pokeDetail.sprites.other.home.front_default ?? pokeDetail.sprites.other.dream_world.front_default

            if (pokemon.findIndex(pokemon => pokemon.id === pokeDetail.id) === -1) {
                pokemon.push({
                    id: pokeDetail.id,
                    name: pokeDetail.name,
                    type: pokeDetail.types[0].type.name,
                    types: pokeDetail.types.map((typeSlot: { type: { name: string; }; }) => typeSlot.type.name),
                    photo: photoPokemon,
                    price: `${checkPrice(pokeDetail.id)}`
                })

            }
        }
    }
    catch (error) {
        console.log(error)
    }

    return [pokemon, allPokemon.length]
}
