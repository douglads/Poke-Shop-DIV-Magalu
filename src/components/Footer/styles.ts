import styled from "styled-components";

export const Footer = styled.footer`
border-top: solid 2px #f5deb3;
margin: 0 2rem;
padding: 2rem 0;
color: #f5deb3;
div{
    display: flex;
    justify-content: space-between;
    align-items: top;
}

h4{
    font-size: 1.5rem;
    font-weight: 600;
    color: #f8c057;
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

`