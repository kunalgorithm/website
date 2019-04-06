import styled from "styled-components";
export const Wrapper = styled.div`
  body {
    line-height: 1.6;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    background-position: 0 0;
    border-bottom: 2px solid;
    border-color: rgba(85, 85, 85, 0.2);
    box-sizing: border-box;
    color: #555;
    text-decoration: none;
    transition-delay: 0s;
    transition-duration: 0.15s;
    transition-property: border-color;
    transition-timing-function: ease-out;
    :hover & {
      border-color: rgba(85, 85, 85, 0.4);
    }
  }
`;

export const Section = styled.section`
  margin: 3em;
`;
