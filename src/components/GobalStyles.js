import styled from "@emotion/styled";
import { Global } from "@emotion/react";

export const GlobalStyle = styled(Global)`
* {
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;