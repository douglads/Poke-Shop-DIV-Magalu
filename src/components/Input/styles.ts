import styled, { css } from "styled-components";

interface IContainer {
    hiddenstyle: "Hide" | "No-Hide"
}

export const Container = styled.div<IContainer>`
  position: relative;
  --size-button: 2.5rem;

.input {
  text-align: center;
  padding-left: var(--size-button);
  height: var(--size-button);
  font-size: 15px;
  border: none;
  color:  #000000;
  outline: none;
  width: var(--size-button);
  transition: all ease 0.5s;
  background-color:  #ffff00;
  box-shadow: 1.5px 1.5px 3px  #ffff00, -1.5px -1.5px 3px #ffdd0040, inset 0px 0px 0px  #ffff00, inset 0px -0px 0px  #ffdb00;
  border-radius: 5px;
  cursor: pointer;
}

${props => props.hiddenstyle === "No-Hide" ? css`
.input:focus,
.input:not(:invalid) {
  width: 100%;
  cursor: text;
  box-shadow: 0px 0px 0px  #ffff00, 0px 0px 0px #ffdd0040, inset 1.5px 1.5px 3px  #ffff00, inset -1.5px -1.5px 3px  #ffdb00;
}
` : null}

.input:focus + .icon,
.input:not(:invalid) + .icon {
  pointer-events: all;
  cursor: pointer;
}

.input::-webkit-search-cancel-button{
  display: none;
}

.icon {
  position: absolute;
  width:1.5rem;
  height:1.5rem;
  top: 0;
  left: 0;
  padding: 8px;
  pointer-events: none;
}

.icon svg {
  width: 100%;
  height: 100%;
}
`