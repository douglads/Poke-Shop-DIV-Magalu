import { styled } from "styled-components"

interface ICardPokemonStyle {
    pokemontypesbg: string;
}

export const CardPokemonStyle = styled.div<ICardPokemonStyle>`
background-color: ${({ pokemontypesbg }) => pokemontypesbg};
text-transform: capitalize;
background-position: center ;
background-repeat: no-repeat;
height: auto;
padding: 2rem;
margin: .5rem;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

#title{
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
width: 100%;
    #h2{
        background-color: ${({ pokemontypesbg }) => pokemontypesbg};
        filter: brightness(1.1);
        padding: .625rem;
        border-radius: .25rem;
    }
    h2{
        position: relative;
        font-family: 'Pokemon', 'Roboto', sans-serif;
        color: var(--yellow-letter);
        text-shadow: 3px 3px 0 #000000;
        letter-spacing: .125rem;
        font-size: 1rem;
        top: -0.3125rem;
    }
    #number{
        font-family: 'Pokemon', 'Roboto', sans-serif;
        color: var(--yellow-letter);
        text-shadow: 3px 3px 0 #000000;
        letter-spacing: .125rem;
        font-size: 1rem;
    }
}

button{
    margin-top: 10px;
}

#types{
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
    div{
        width: calc(100/3);
    }
    img{
        height: 6.25rem;    
    }
}
#price{     
    margin-top: .625rem;
    background-color: ${({ pokemontypesbg }) => pokemontypesbg};
    filter: brightness(1.2);
    padding: .625rem;
    border-radius: .25rem;
    font-size: 1.25rem;
    font-weight: 600;
}
`
export const PokemonTypes = styled.li<ICardPokemonStyle>`
display: flex;
flex-direction: row;
align-items: center;

&:not(:last-child){
    margin-bottom: 3px;
}

span{
    background-color: ${({ pokemontypesbg }) => pokemontypesbg};
    filter: brightness(1.2);
    border-radius: 4px;
    padding: 4px;
    text-align: center;
}
`