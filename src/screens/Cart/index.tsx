import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { CartStyle, ButtonsList, ItemCart, Informations, H1 } from "./styles"
import { useState, useContext, useEffect } from "react"
import { CartItemsContext } from "../../Context/CartItems"
import Header from "../../components/Header"
import PokemonBallCount from "../../components/PokemonBallCount"
import logo from '../../assets/logo.png'
import { Footer } from "../../components/Footer"

export default function Cart() {
    const { CartItems, setCartItems } = useContext(CartItemsContext)
    const [value, setValue] = useState('0,00 R$')
    const CartItemsCopy = CartItems

    function totalValue() {
        let valueSum = 0
        let valueAmount = 0
        for (const cartItem of CartItemsCopy.item) {
            const amountItem = Number(cartItem.amount);
            const price = Number(cartItem.price.replace(',', '.').replace('R$', '').trim())
            valueSum += amountItem * price
            valueAmount += amountItem
        }
        valueSum = Number(valueSum.toFixed(2))
        const formattedValue = valueSum > 0 ? `${String(valueSum).replace('.', ',')}  R$` : '0,00 R$'
        CartItemsCopy.count = valueAmount
        setCartItems(CartItemsCopy)
        setValue(formattedValue)
    }

    function toGabage(index: number) {
        CartItemsCopy.item.splice(index, 1)
        totalValue()
        setCartItems(CartItemsCopy)
    }

    function morePokemon(index: number) {
        CartItemsCopy.item[index].amount = Number(CartItemsCopy.item[index].amount) + 1
        totalValue()
        setCartItems(CartItemsCopy)
    }

    function mimusPokemon(index: number) {
        CartItemsCopy.item[index].amount = Number(CartItemsCopy.item[index].amount) - 1
        if (Number(CartItemsCopy.item[index].amount) < 1) {
            CartItemsCopy.item.splice(index, 1)
        }
        totalValue()
        setCartItems(CartItemsCopy)
    }

    useEffect(() => {
        totalValue();
    }, [value]);

    function setCartItemZero() {
        CartItemsCopy.count = 0
        CartItemsCopy.item.splice(0, CartItemsCopy.item.length)        
        setCartItems(CartItemsCopy)
    }

    function finishButton(): JSX.Element {
        if (CartItems.count > 0) {
            return (
                <Link id="finish" onClick={setCartItemZero} to={"/finished-buy"}>Finalizar Compra</Link>
            )
        }
        return < Link id="finish" to={"/"} > Voltar para a tela principal</Link >
    }

    return (
        <>
            <Header>
                <section>
                    <Link to='/'>
                        <img className='logo' src={logo} alt="" />
                    </Link>
                </section>
                <section>
                    <H1>Pokebola</H1>
                </section>
                <PokemonBallCount value={CartItems.count} />
            </Header>
            <CartStyle>
                {CartItems.item.map((c, index) =>
                    <ItemCart key={c.id}>
                        <img className="pokemonPhoto" src={c.photo} alt="" />
                        <Informations>
                            <div><span className="pokemonName">{c.name}</span></div>
                            <div>{c.price}</div>
                        </Informations>
                        <ButtonsList>
                            <Button variants="plusCart" text="+" heandleClick={() => morePokemon(index)} />
                            <span id="amount">{c.amount}</span>
                            <Button variants="minusCart" text="-" heandleClick={() => mimusPokemon(index)} />
                            <Button variants="gabage" heandleClick={() => toGabage(index)} />
                        </ButtonsList>
                    </ItemCart>)}
                <div>
                    <Link id="home" to='/'>Comprar mais?</Link>
                    <h3>Valor total da pokebola: {value}</h3>
                    {finishButton()}
                </div>
            </CartStyle>
            <Footer />
        </>
    )
}

