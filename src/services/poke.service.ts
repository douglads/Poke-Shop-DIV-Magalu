import { api } from "./api";

export function getMaxPokemon() {
    return (
        api.get(`api/v2/pokemon?limit=1&offset=0`)
            .then(res => res.data.count)
            .catch(error => console.error(error))
    )
}

export function getPokemonDetail(id: number) {
    return (api.get(`/api/v2/pokemon/${id}/`).then(res => res.data)
        .catch(error => console.error(error))
    )
}