import logo from '../../assets/logo.png'
import Input from '../Input'
import {Header as HeaderStyled} from './styles'

export default function Header(){
    return (
        <HeaderStyled>
            <img src={logo} alt="" />
            <Input></Input>
        </HeaderStyled>
    )
}