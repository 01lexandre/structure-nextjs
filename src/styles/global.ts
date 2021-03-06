import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  ::selection {
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.text};
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    font: ${props => props.theme.fontPatterns};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
  p {
    font-size: 18px;
    line-height: 26px;
    margin-top: 0;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  strong {
    font-weight: 600;
  }
  button {
    font: ${props => props.theme.fontPatterns};
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #274a42;
  }
`
