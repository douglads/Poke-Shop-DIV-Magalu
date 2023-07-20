import { api } from "./api";

export async function getMaxPokemon() {
    return (
        await api.get(`pokemon?limit=1&offset=0`)
            .then(res => res.data.count)
            .catch(error => console.error(error))
    )
}

export async function getPokemonDetail(name: string) {
    return ( 
        await api.get(`pokemon/${name}/`)
        .then(res => res.data)
        .catch(error => console.error(error))
    )
}

export async function paginationPokemonList(offset = 9){
    return (
        await api.get(`pokemon?offset=${offset}&limit=9`)
        .then(res => res.data)
        .catch(error => console.log(error))
    )
}

export async function getAllPokemon() {
    return(
        await api.get('pokemon?limit=100000&offset=0')
        .then(res => res.data.results)
        .catch(error => console.error(error))
    )
}