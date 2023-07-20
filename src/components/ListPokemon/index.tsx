import { ListPokemonStyle, Loading } from "./styles";
import charizarLoading from '../../assets/charizard-loading.gif'

interface IListPokemon {
    children: JSX.Element[]
}

export default function ListPokemon({ children }: IListPokemon) {

    if (children.length <= 0) {
        return <Loading><img id="charizard" src={charizarLoading}></img></Loading>
    }
    return (
        <ListPokemonStyle>
            {children}
        </ListPokemonStyle>
    )
}
