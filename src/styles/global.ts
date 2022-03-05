import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.bg};
      color: ${theme.colors.white};
    `}
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
