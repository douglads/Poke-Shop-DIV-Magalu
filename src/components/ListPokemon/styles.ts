import { styled } from "styled-components"

export const Loading = styled.div`
text-align: center;

@media (max-width: 500px) {
    width: 100%;
    img{
        width: 100%;
    }
}
`

export const ListPokemonStyle = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
@media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 700px) {
    display: block;
}`
