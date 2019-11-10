import styled from "styled-components";
export const Wrapper = styled.div`
  body {
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h2 {
    margin-top: 2em;
  }

  div {
    border: 0 solid #dfe4e7;
    max-width: 750px;
    /* color: #4e616c; */
    line-height: 1.5;
    /* margin-bottom: 2.5rem; */
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
    cursor: pointer;
    :hover & {
      border-color: rgba(85, 85, 85, 0.4);
    }
  }
  code {
    color: #f13b21;
    font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono",
      "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace,
      serif;
    font-size: 0.9em;
    white-space: pre-wrap;
  }
`;

export const Section = styled.section`
  margin: 3em;
`;
