import { createContext, useState } from 'react';
import { IPokemon } from '../services/types';

interface ListPokemonContextData {
    pokemon: IPokemon[],
    setPokemon: React.Dispatch<React.SetStateAction<IPokemon[]>>
}

export const ListPokemonContext = createContext<ListPokemonContextData>({} as ListPokemonContextData)

export function ListPokemonProvider({ children }: { children: React.ReactNode }) {
    const [pokemon, setPokemon] = useState<IPokemon[]>([])
    return (
        <ListPokemonContext.Provider value={{ pokemon, setPokemon }}>
            {children}
        </ListPokemonContext.Provider>
    )
}
