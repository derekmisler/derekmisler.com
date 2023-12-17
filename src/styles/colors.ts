export interface ThemeStateProps {
  theme: {
    text?: string;
    border?: string;
    accent?: string;
    link?: string;
    linkHover?: string;
    background?: string;
  };
  isDarkMode: boolean;
}

const gray: string = '#4C566A';
const black: string = '#2E3440';
const white: string = '#f4f1ec';
const red: string = '#BF616A';
const redDarker: string = '#9b4b56';
const blue: string = '#81A1C1';
const blueDarker: string = '#5E81AC';

export const themes = {
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
