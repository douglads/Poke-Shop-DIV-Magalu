import styled, { css } from "styled-components";

interface IContainer {
    hiddenstyle: "Hide" | "Non-Hide"
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
  color: #a0a1a1;
  outline: none;
  width: var(--size-button);
  transition: all ease 0.5s;
  background-color: #E6E5E1;
  box-shadow: 1.5px 1.5px 3px #f1f1f1, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #f1f1f1, inset 0px -0px 0px #a0a1a1;
  border-radius: 5px;
  cursor: pointer;
}

${props => props.hiddenstyle === "Non-Hide" ? css`
.input:focus,
.input:not(:invalid) {
  width: 100%;
  cursor: text;
  box-shadow: 0px 0px 0px #f1f1f1, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #f1f1f1, inset -1.5px -1.5px 3px #a0a1a1;
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