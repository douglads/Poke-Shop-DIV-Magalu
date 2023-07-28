import { ListPokemonStyle, Loading } from "./styles";
import charizarLoading from '../../assets/charizard-loading.gif'
import { IPokemon } from "../../services/types";
import CardPokemon from "../CardPokemon";
interface IListPokemon {
    pokemon: IPokemon[]
    handleClick: (id: number, price: string, name: string, photo: string) => void
    loading?: boolean
}

export default function ListPokemon({ pokemon, handleClick, loading }: IListPokemon) {
    
    if (pokemon.length <= 0 || loading) {
        return <Loading><img id="charizard" src={charizarLoading}></img></Loading>
    }
    
    return (
        <ListPokemonStyle id="listPokemon">
            {pokemon.map(pokeDetail =>
                        <CardPokemon
                            name={pokeDetail.name}
                            id={pokeDetail.id}
                            type={pokeDetail.type}
                            types={pokeDetail.types}
                            photo={pokeDetail.photo}
                            price={pokeDetail.price}
                            key={pokeDetail.id}
                            handleClick={() => handleClick(
                                pokeDetail.id, 
                                pokeDetail.price ?? '0', 
                                pokeDetail.name, 
                                pokeDetail.photo)}
                        />,
                    )}
        </ListPokemonStyle>
    )
}
