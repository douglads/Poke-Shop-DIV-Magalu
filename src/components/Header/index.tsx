import { Header as HeaderStyled } from './styles'

interface IHeader{
    children: JSX.Element[]
}

export default function Header({children}:IHeader) {

    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}