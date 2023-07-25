import styled from "styled-components";

export const Footer = styled.footer`
border-top: solid 2px var(--orange-white);
margin: 0 1rem;
padding: 2rem 0;
color: var(--orange-white);
div{
    display: flex;
    justify-content: space-between;
    align-items: top;
}

h4{
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--organge-light);
}

#Contato li{
    padding-top: .5rem;
}

#Contato a{
    display: flex;
    align-items: center;
}

#Contato span{
    padding-left: 1rem;
}

#about{
    width: 33%;
}

&:last-child > p{
    padding-top: 1rem;
    text-align: center;
}


@media (max-width: 500px){
    
div{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

#about{
    width: 100%;
    padding-top: 1rem;
}
h4{
    padding-bottom: 0.5rem;
}
}
`
