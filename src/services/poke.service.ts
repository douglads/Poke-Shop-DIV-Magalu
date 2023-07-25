import { api } from "./api";

export async function getPokemonDetail(name: string) {
    return ( 
        await api.get(`pokemon/${name}/`)
        .then(res => res.data)
        .catch(error => console.error(error))
    )
}

export async function getAllPokemon() {
    return(
        await api.get('pokemon?limit=100000&offset=0')
        .then(res => res.data.results)
        .catch(error => console.error(error))
    )
}