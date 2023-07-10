import pbOpen from '../../assets/icons/pb-open.png'
import pbClose from '../../assets/icons/pb-close.png'
import { CountKart } from './styles'

interface IPokemonBallCount{
    value: number
}

export default function PokemonBallCount({value}:IPokemonBallCount) {

    const pokeball: string= value > 0 ? pbClose : pbOpen
    return <CountKart className='end'><span>{value}</span><img className='kart' src={pokeball} alt="" /></CountKart>
}