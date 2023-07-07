import { styled } from "styled-components"


export const ListPokemonStyle = styled.div`
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
`
