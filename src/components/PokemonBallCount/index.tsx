import pbOpen from '../../assets/icons/pb-open.png'
import pbClose from '../../assets/icons/pb-close.png'
import { CountCart } from './styles'
import { Link } from 'react-router-dom';

interface IPokemonBallCount{
    value:number
}

export default function PokemonBallCount({value}:IPokemonBallCount) {

    const pokeball: string = value > 0 ? pbClose : pbOpen
    return (
        <CountCart className='end'>
            <Link to={'/Cart'}>
                <span>{value}</span>
                <img className='cart' src={pokeball} alt="" />
            </Link>
        </CountCart>
    )
}