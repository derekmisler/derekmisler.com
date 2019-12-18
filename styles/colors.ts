import { hexToRgba } from 'utils/hexToRgba'

const yellow: string = '#efd995'
const yellowDark: string = '#c18e00'
const blue: string = '#a6d5e6'
const darkBlue: string = '#67aec7'
const black: string = '#2E3440'
const transparentBlack: string = hexToRgba(black, .8)
const gray: string = '#32393B'
const white: string = '#f4e2da'
const transparentWhite: string = hexToRgba(white, .8)
const darkWhite: string = '#ead7d3'

export const colors = {
  polarNight: ['#2E3440', '#3B4252', '#434C5E', '#4C566A'],
  snowStorm: ['#D8DEE9', '#E5E9F0', '#ECEFF4'],
  frost: ['#8FBCBB', '#88C0D0', '#81A1C1', '#5E81AC'],
  aurora: ['#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD']
}

export const themes = {
  light: {
    text: black,
    accent: yellowDark,
    link: darkBlue,
    linkHover: blue,
    disabled: gray,
    background: white,
    transparentBackground: transparentWhite,
    border: black,
    shadow: darkWhite
  },
  dark: {
    text: white,
    accent: yellow,
    link: blue,
    linkHover: darkBlue,
    disabled: gray,
    background: black,
    transparentBackground: transparentBlack,
    border: white,
    shadow: gray
  }
}
