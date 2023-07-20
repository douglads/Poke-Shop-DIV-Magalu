import { createContext, useState } from 'react';
import { ICart } from '../components/CardPokemon/cartTypes';

export interface ICartItem{
    item: ICart[]
    count: number
}

interface CartItemsContextData {
    CartItems: ICartItem,
    setCartItems: React.Dispatch<React.SetStateAction<ICartItem>>
}

export const CartItemsContext = createContext<CartItemsContextData>({} as CartItemsContextData)

export function CartItemsProvider({ children }: { children: React.ReactNode }) {
    const [CartItems, setCartItems] = useState<ICartItem>({item: [], count: 0})
    return (
        <CartItemsContext.Provider value={{ CartItems, setCartItems }}>
            {children}
        </CartItemsContext.Provider>
    )
}   