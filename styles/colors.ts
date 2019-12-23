import { hexToRgba } from 'utils/hexToRgba'

const black: string = '#2E3440'
const transparentBlack: string = hexToRgba(black, .8)

const gray: string = '#4C566A'
const grayDarker: string = '#434C5E'
const grayDarkest: string = '#3B4252'

const white: string = '#ECEFF4'
const whiteDarker: string = '#E5E9F0'
const whiteDarkest: string = '#D8DEE9'
const transparentWhite: string = hexToRgba(white, .8)

const red: string = '#BF616A'
const orange: string = '#D08770'
const yellow: string = '#EBCB8B'
const green: string = '#A3BE8C'
const purple: string = '#B48EAD'

const blue: string = '#88C0D0'
const blueDarker: string = '#81A1C1'
const blueDarkest: string = '#5E81AC'

export const colors = {
  light: [white, whiteDarker, whiteDarkest],
  mid: [blue, blueDarker, blueDarkest],
  dark: [black, gray, grayDarker, grayDarkest],
  accent: [red, orange, yellow, green, purple]
}

export const themes = {
  light: {
    text: colors.dark[0],
    accent: orange,
    link: blueDarker,
    linkHover: blueDarkest,
    disabled: gray,
    background: white,
    transparentBackground: transparentWhite,
    border: black,
    shadow: whiteDarkest
  },
  dark: {
    text: colors.light[0],
    accent: yellow,
    link: blue,
    linkHover: blueDarker,
    disabled: gray,
    background: grayDarkest,
    transparentBackground: transparentBlack,
    border: white,
    shadow: black
  }
}
