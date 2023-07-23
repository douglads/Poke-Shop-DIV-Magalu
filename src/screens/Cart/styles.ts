import { styled } from "styled-components";

export const CartStyle = styled.main`
padding: 2rem;

#home{
    background-color:#ffdb00;
    padding: .5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
}


#finish{
padding: .5rem;
border: none;
border-radius: 5px;
background-color: rgb(172, 15, 15);
color: #fff;
cursor: pointer;
}

a:hover{
    filter: brightness(1.3);
}

h3{
    color: #f5deb3;
    font-size: 1.25rem;
}

div{
    display: flex;
    justify-content: space-between;

    button:last-child{
        padding: .5rem 1rem;
        border-radius: 5px;
        margin-left: 5rem;
    }
    
}
@media (max-width: 500px){
    padding: 1rem;
    #home{
        display: none;
    }
    #finish{
        text-align: center;
    }
    div{
        button:last-child{
            display: none;
        }
}
}
`

export const H1 = styled.h1`
font-family: 'Pokemon', 'Roboto', sans-serif;
text-align: center;
font-size: 3rem;
font-weight: 700px;
color: #ffdb00;
text-shadow: 3px 3px 0 #000000;
letter-spacing: .125rem;
margin-bottom: 2rem;
`
export const ItemCart = styled.div`

display: grid;
grid-template-columns: 1fr fr 1fr;
border: 2px solid #f5deb3;
border-radius: 1rem;
margin-bottom: 1rem;
padding: 1rem;
@media (max-width: 500px){
padding: .5rem;
}
.pokemonPhoto{
    height: 3.125rem;
}
`

export const Informations = styled.div`
text-transform: capitalize;
display: flex;
justify-content: space-around;
align-items: center;
width: 50%;

div:first-child{
    position: relative;
}

.pokemonName{
    font-family: 'Pokemon', 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700px;
    color: #ffdb00;
    text-shadow: 3px 3px 0 #000000;
    letter-spacing: .125rem;
    margin-bottom: 2rem;
    position: relative;
    top: 16px;
    
}

@media (max-width: 500px){
    flex-direction: column;
}
`

export const ButtonsList = styled.div`
display: flex;
justify-content: end;
align-items: center;

#amount{
    margin: 1rem;
}
`