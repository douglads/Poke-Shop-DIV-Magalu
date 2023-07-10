import { styled } from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;

section{
    width: 33vw;
    max-width: 33vw;
}

.logo{
    height: 12.5rem;
}

.kart{
    height: 3rem;
}

.center{
    display: flex;
    align-items: center ;
    justify-content: center;}

.end{
    display: flex;
    align-items: center ;
    justify-content: end;
}
`