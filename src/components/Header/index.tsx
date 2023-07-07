import logo from '../../assets/logo.png'
import pbOpen from '../../assets/icons/pb-open.png'
import pbClose from '../../assets/icons/pb-close.png'
import Input from '../Input'
import { Header as HeaderStyled } from './styles'

export default function Header() {
    return (
        <HeaderStyled>
            <section><Input/></section>
            <section className='center'><img className='logo' src={logo} alt="" /></section>
            <section className='end'><img className='kart' src={pbClose} alt="" /></section>
        </HeaderStyled>
    )
}