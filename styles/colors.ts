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
    text: colors.dark[3],
    accent: colors.accent[1],
    link: colors.mid[1],
    linkHover: colors.mid[2],
    disabled: colors.dark[1],
    background: colors.light[0],
    transparentBackground: transparentWhite,
    border: colors.dark[3],
    shadow: colors.light[2]
  },
  dark: {
    text: colors.light[0],
    accent: colors.accent[2],
    link: colors.mid[0],
    linkHover: colors.mid[1],
    disabled: colors.dark[1],
    background: colors.dark[2],
    transparentBackground: transparentBlack,
    border: colors.light[0],
    shadow: colors.dark[0]
  }
}
