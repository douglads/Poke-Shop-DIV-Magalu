import styled from "styled-components";

export const Input = styled.input`  text-align: center;
padding-left: 2.5rem;
height: 2.5rem;
font-size: 15px;
border: none;
color:  #000000;
outline: none; 
width: 25vw;
transition: all ease 0.5s;
background-color:  #ffaf2d;
box-shadow: 1.5px 1.5px 3px  #ffaf2d, -1.5px -1.5px 3px #ffaf2d40, inset 0px 0px 0px  #ffaf2d, inset 0px -0px 0px  #ffdb00;
border-radius: 5px 0px 0px 5px;
cursor: pointer;
&:hover{
  background-color:  #ffaf2d;
  filter: brightness(1.1);
}
`
export const Container = styled.div`
display: flex;
`