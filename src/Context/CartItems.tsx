import { createContext, useState } from 'react';
import { ICart } from '../components/CardPokemon/cartTypes';

export interface ICartItem {
    item: ICart[]
    count: number
}

interface CartItemsContextData {
    CartItems: ICartItem,
    setCartItems: React.Dispatch<React.SetStateAction<ICartItem>>
}

export const CartItemsContext = createContext<CartItemsContextData>({} as CartItemsContextData)

export function CartItemsProvider({ children }: { children: React.ReactNode }) {
    const [CartItems, setCartItems] = useState<ICartItem>({ item: [], count: 0 })
    const storage = localStorage.getItem('CartItems') ?? undefined
    if (CartItems.item.length <= 0 && storage !== undefined) {
        const localCartItems:ICartItem = storage !== undefined ?
        JSON.parse(localStorage.getItem('CartItems') as string) : undefined
        if(localCartItems.item.length > 0)
        setCartItems(localCartItems)
    }
    return (
        <CartItemsContext.Provider value={{ CartItems, setCartItems }}>
            {children}
        </CartItemsContext.Provider>
    )
}   