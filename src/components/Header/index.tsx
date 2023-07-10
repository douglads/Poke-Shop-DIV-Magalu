import logo from '../../assets/logo.png'
import Input from '../Input'
import PokemonBallCount  from '../PokemonBallCount'
import { Header as HeaderStyled } from './styles'

export default function Header() {
    return (
        <HeaderStyled>
            <section><Input /></section>
            <section className='center'><img className='logo' src={logo} alt="" /></section>
            <PokemonBallCount value={1} />
        </HeaderStyled>
    )
}