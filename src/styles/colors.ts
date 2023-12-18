export interface ThemeColors {
  text: string;
  border: string;
  accent: string;
  link: string;
  linkHover: string;
  background: string;
}

const gray = '#4C566A';
const black = '#2E3440';
const white = '#f4f1ec';
const red = '#BF616A';
const redDarker = '#9b4b56';
const blue = '#81A1C1';
const blueDarker = '#5E81AC';

export const themes: Record<string, ThemeColors> = {
  light: {
    text: gray,
    border: gray,
    accent: blueDarker,
    link: redDarker,
    linkHover: red,
    background: white,
  },
  dark: {
    text: white,
    border: white,
    accent: red,
    link: blue,
    linkHover: blueDarker,
    background: black,
  },
};
