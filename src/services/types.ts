export interface IPokemon {
    name: string,
    id: number,
    type: string,
    types: string[],
    photo: string,
    price?: string,
}

export interface IListAllPokemon {
    name: string,
    url: string,
}