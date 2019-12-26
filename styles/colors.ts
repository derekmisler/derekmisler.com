import { hexToRgba } from 'utils/hexToRgba'

export interface ThemeProps {
  [colorName: string]: string
}
export interface ThemeStateProps {
  theme: ThemeProps
  isDarkMode: boolean
}

export const black: string = '#2E3440'
export const transparentBlack: string = hexToRgba(black, .3)

export const gray: string = '#4C566A'
export const grayDarker: string = '#434C5E'
export const grayDarkest: string = '#3B4252'

export const white: string = '#ECEFF4'
export const whiteDarker: string = '#E5E9F0'
export const whiteDarkest: string = '#D8DEE9'
export const transparentWhite: string = hexToRgba(white, .3)

export const red: string = '#BF616A'
export const orange: string = '#D08770'
export const yellow: string = '#EBCB8B'
export const green: string = '#A3BE8C'
export const teal: string = '#8FBCBB'
export const purple: string = '#B48EAD'

export const blue: string = '#88C0D0'
export const blueDarker: string = '#81A1C1'
export const blueDarkest: string = '#5E81AC'

export const themes = {
  light: {
    text: black,
    accent: red,
    link: blueDarker,
    linkHover: blueDarkest,
    disabled: gray,
    background: white,
    transparentBackground: transparentWhite,
    border: black,
    shadow: transparentBlack
  },
  dark: {
    text: white,
    accent: red,
    link: blue,
    linkHover: blueDarker,
    disabled: gray,
    background: black,
    transparentBackground: transparentBlack,
    border: white,
    shadow: transparentWhite
  }
}
