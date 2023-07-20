import { styled } from "styled-components"

export const Loading = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const ListPokemonStyle = styled.div`
width: 100%;
@media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`
