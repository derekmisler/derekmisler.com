import { createGlobalStyle } from 'styled-components';
import { TYPOGRAPHY_DEFAULTS } from './typography';
import { ThemeColors } from './colors';

const { htmlFontSize } = TYPOGRAPHY_DEFAULTS;

export const GlobalStyle = createGlobalStyle<{
  theme: ThemeColors;
}>`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html {
    --background-color: ${({ theme }) => theme.background};
    --background-transparent-color: ${({ theme }) => `${theme.background}CC`};
    --text-color: ${({ theme }) => theme.text};
    --accent-color: ${({ theme }) => theme.accent};
    --border-color: ${({ theme }) => theme.border};
    --link-color: ${({ theme }) => theme.link};
    --link-hover-color: ${({ theme }) => theme.linkHover};
    font-size: ${htmlFontSize};
  }
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font);
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;
