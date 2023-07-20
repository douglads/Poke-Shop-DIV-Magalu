import { getPokemonDetail, getAllPokemon } from "../../services/poke.service";
import { IPokemon } from "../../services/types";
import generatinRandomValues from "../generatingRandomValues";
import { ICartItem } from "../../Context/CartItems";


export async function setPokemonListCard(search: string, CartItems: ICartItem, offset = 9) {
    const poke: IPokemon[] = []
    let allPokemon
    function checkPrice(id: number) {
        const cartExists = CartItems ? CartItems.item.findIndex(cartItem => cartItem.id === id) : -1
        const priceExists = poke.findIndex(poke => poke.id === id)

        if ((cartExists === -1) && (priceExists === -1)) {
            return generatinRandomValues()
        } if (priceExists > -1) {
            return poke[priceExists].price
        } else {
            return CartItems.item[CartItems.item.findIndex(cartItem => cartItem.id === id)].price
        }
    }
    try {
        const getAll = await getAllPokemon()

        allPokemon = getAll
        allPokemon = search.length > 0 ? allPokemon.filter((pokemon: IPokemon) => pokemon.name.includes(search)) : allPokemon
        offset = (offset > allPokemon.length) ? allPokemon.length : offset
        for (let i = 0; i < offset; i++) {
            const pokeDetail = await getPokemonDetail(allPokemon[i].name)
            const photoPokemon = pokeDetail.sprites.other.home.front_default ?? pokeDetail.sprites.other.dream_world.front_default
            if ( photoPokemon !== null) {
                if (poke.findIndex(pokemon => pokemon.id === pokeDetail.id) === -1) {
                    poke.push({
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
    }
    catch (error) {
        console.log(error)
    }
    return [poke, allPokemon.length]
}
