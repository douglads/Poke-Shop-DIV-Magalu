import { styled } from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
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
    width: 33%;
}

.center{
    display: flex;
    align-items: center ;
    justify-content: center;
    width: 33%;
}

.end{
    display: flex;
    align-items: center ;
    justify-content: end;
    width: 33%;
}

@media (max-width: 500px) {
flex-direction: column;
padding: .5rem 1rem 0 1rem;
section{
    padding-bottom: 1rem;
}
.start{
    display: flex;
    align-items: center ;
    justify-content: center;
    width: 33%;
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
}
}
`