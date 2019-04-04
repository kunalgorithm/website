import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 2px;
  transition: 0.3s;
  :hover & {
    background-color: tomato;
    color: white;
  }
`;

export default ({ children }) => <StyledButton>{children}</StyledButton>;
