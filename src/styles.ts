import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#FFFFFF',
  black: '#111',
  gray: '#ffebd9',
  lightGray: '#A3A3A3',
  mainPink: '#E66767',
  lightPink: '#FFEBD9',
  green: '#10AC84',
  background: '#FFF8F2',
  warning: '#FFEBD9',
  headerBackground: 'rgba(230, 103, 103, 0.05)'
}

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body {
        background-color: ${Colors.black};
        color: ${Colors.white};
        overflow-x: hidden;
        width: 100%;
    }

    html {
        overflow-x: hidden;
    }

    .container {
      max-width: ${breakpoints.desktop};
      width: 100%;
      margin: 0 auto;
      padding: 0 16px;
      
      @media (max-width: ${breakpoints.desktop}) {
        max-width: 90%;
        padding: 0;
      }
      
      @media (max-width: ${breakpoints.tablet}) {
        max-width: 95%;
      }
    }
  `
