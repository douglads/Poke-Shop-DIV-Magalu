import { useContext, useState } from 'react'
import Header from "../../components/Header";
import ListPokemon from "../../components/ListPokemon";
import Input from '../../components/Input'
import { CartItemsContext } from '../../Context/CartItems'
import { ListPokemonContext } from '../../Context/ListPokemon'
import { setPokemonListCard } from '../../utils/ListPokemonFromApi';
import Button from '../../components/Button';
import { Main } from './styles';
import { Footer } from '../../components/Footer';
let numberPokemonArray = 10
export default function Home() {
    const { CartItems, setCartItems } = useContext(CartItemsContext)
    const { pokemon, setPokemon } = useContext(ListPokemonContext)
    const [searchTerm, setSearchTerm] = useState('')
    const CartItemsCopy = CartItems
    const [cartCount, setCartCount] = useState(CartItemsCopy.count)
    const [loading, setLoading] = useState(false);
    const widthDocument = document.documentElement.clientWidth

    let globalOffset = 5
    if (widthDocument > 999) {
        globalOffset = 9
    } else if (widthDocument > 699 && widthDocument < 1000)
        globalOffset = 8

    if (pokemon.length <= 0) {
        getPoke('')
    }

    async function getPoke(search: string, offset = globalOffset) {
        const getPoke = await setPokemonListCard(search, pokemon, CartItems, offset)
        numberPokemonArray = getPoke[1]
        setPokemon(getPoke[0])
        setLoading(false);
    }

    function searchPokemon() {
        setPokemon(pokemon.splice(0, pokemon.length))
        getPoke(searchTerm)
    }

    function addItems(id: number, price: string, name: string, photo: string) {
        const index = CartItemsCopy.item.findIndex(c => c.id === id)
        if (index === -1 && price) {
            CartItemsCopy.item.push({ id: id, price: price, name: name, photo: photo, amount: 1 })
        } else {
            CartItemsCopy.item[index].amount = Number(CartItemsCopy.item[index].amount) + 1
        }
        CartItemsCopy.count++
        setCartCount(CartItemsCopy.count)
        setCartItems(CartItemsCopy)
        localStorage.setItem('CartItems', JSON.stringify(CartItemsCopy)) 
    }
    const handleClick = () => {
        setLoading(true);
        getPoke(searchTerm, (pokemon.length + globalOffset))
    };

    function buttonActive(length: number): JSX.Element | null {
        if (pokemon.length <= 0) {
            return null

        } else if (length < numberPokemonArray) {
            return (
                <Button disabled={loading} variants="Red" text="Listar Mais" heandleClick={handleClick} />
            )
        } else {
            return <p className='noMore'>Não há mais pokemon para pesquisar</p>
        }
    }

    return (
        <>
            <Header cartCount={cartCount} reloadDocument>
                <Input
                    handleClick={() => searchPokemon()}
                    handleChange={e => setSearchTerm(e.target.value.toLowerCase())}
                />
            </Header>
            <Main>
                <ListPokemon loading={loading} pokemon={pokemon} handleClick={addItems}/>
                {buttonActive(pokemon.length)}
            </Main>
            <Footer />
        </>
    )
}