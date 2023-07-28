import { Link } from 'react-router-dom'
import { Header as HeaderStyled } from './styles'
import PokemonBallCount from '../PokemonBallCount'
import logo from '../../assets/logo.png'

interface IHeader {
    children: JSX.Element
    cartCount?: number
    reloadDocument?: boolean
}

export default function Header({ children, cartCount, reloadDocument }: IHeader) {
    
    return (
        <HeaderStyled>
            <section className='start'>
                <Link to='/' reloadDocument={reloadDocument}>
                    <img className='logo' src={logo} alt="" />
                </Link>
            </section>
            <section className='center'>
                {children}
            </section>
            {cartCount !== undefined ? <PokemonBallCount value={cartCount} /> : null}
        </HeaderStyled>
    )
}