import styled from "styled-components";

export const Main = styled.main`
padding: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
& > button{
    margin-top: 2rem;
    width: 20rem;
    height: 3rem;
}

.noMore{
    font-size: 1.25rem;
    color: var(--orange-white);
}


@media (max-width: 500px) {
padding: 1rem 1rem 1rem 1rem;
}
`