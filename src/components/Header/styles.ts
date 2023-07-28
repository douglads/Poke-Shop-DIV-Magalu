import { styled } from "styled-components";

export const Header = styled.header`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 1rem 5rem 0 5rem;

.logo{
    height: 12.5rem;
}

.cart{
    height: 3rem;
}

.start{
    display: flex;
    align-items: center ;
    justify-content: start;
}

.center{
    display: flex;
    align-items: center ;
    justify-content: center;
}

.end{
    display: flex;
    align-items: center ;
    justify-content: end;
}

@media (max-width: 700px) {
display: block;
padding: .5rem 1rem 0 1rem;
section{
    padding-bottom: 1rem;
}
.start{
    display: flex;
    align-items: center ;
    justify-content: center;
    width: 100%;
}

.center{
    display: flex;
    align-items: center ;
    justify-content: center;
    width: 100%;
}
.end{
    display: flex;
    align-items: center ;
    justify-content: center;
    width: 100%;
}
a{
    display: flex;
    align-items: center ;
    justify-content: center;
}
}
`