import { ListPokemonStyle, Loading } from "./styles";
import charizarLoading from '../../assets/charizard-loading.gif'
import {useContext} from 'react'
import { ListPokemonContext } from "../../Context/ListPokemon";
interface IListPokemon {
    children: JSX.Element[]
}

export default function ListPokemon({ children }: IListPokemon) {

    const { pokemon } = useContext(ListPokemonContext)

    if (children.length <= 0 || children.length !== pokemon.length) {
        return <Loading><img id="charizard" src={charizarLoading}></img></Loading>
    }
    
    return (
        <ListPokemonStyle>
            {children}
        </ListPokemonStyle>
    )
}
