import { styled } from "styled-components";

export const ButtonRed = styled.button`
padding: .5rem;
border: none;
border-radius: 5px;
background-color: var(--button-red);
color: var(--white-full);
cursor: pointer;

&:hover{
    filter: brightness(1.3);
}

&:disabled{
    filter: brightness(.5);
    cursor: not-allowed;
}
`
export const ButtonGarbage = styled.button`
background-color: rgb(234, 136, 61);
display: flex;
justify-content: center;
align-items: center;
padding: .5rem;
border: none;
border-radius: 5px;
cursor: pointer;
width: 40px;
height: 40px;
&:hover{
    filter: brightness(0.5);
}
img{    
width: 30px;
height: 30px;
}
`
export const ButtonMinusCart = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: .5rem;
margin-right: 1rem;
border: none;
border-radius: 5px;
background-color: var(--button-red);
color: var(--white-full);
cursor: pointer;
font-weight: 700;
font-size: 20px;
width: 40px;
height: 40px;
text-align: center;
&:hover{
    filter: brightness(1.3);
}
@media (max-width: 500px){
width: 2rem;
height: 2rem;
}
`
export const ButtonPlusCart = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: .5rem;
border: none;
border-radius: 5px;
background-color: rgb(15, 172, 15);
color: var(--white-full);
cursor: pointer;
font-weight: 700;
font-size: 20px;
width: 40px;
height: 40px;
text-align: center;
&:hover{
    filter: brightness(1.3);
}
@media (max-width: 500px){
width: 2rem;
height: 2rem;
}
`

export const ButtonSearch = styled.button`
border: none;
height: 2.5rem;
transition: all ease 0.5s;
background-color:  #ffe600;
box-shadow: 1.5px 1.5px 3px  #ffe600, -1.5px -1.5px 3px #ffe60040, inset 0px 0px 0px  #ffe600, inset 0px -0px 0px  var(--yellow-letter);
border-radius: 0px 5px 5px 0px;
cursor: pointer;
&:hover{
  background-color:  #ffe600;
  filter: brightness(1.1);
}
img{
height: 2.5rem;
width: 2.5rem;
}
`