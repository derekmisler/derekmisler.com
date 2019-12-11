export const yellow: string = '#efd995'
export const yellowDark: string = '#c18e00'
export const blue: string = '#a6d5e6'
export const darkBlue: string = '#67aec7'
export const lightBlue: string = '#dbeaff'
export const black: string = '#171a1b'
export const transparentBlack: string = 'rgba(23, 26, 27, .8)'
export const gray: string = '#32393B'
export const white: string = '#f4e2da'
export const darkWhite: string = '#ead7d3'

export const themes = {
  light: {
    text: black,
    accent: yellowDark,
    link: darkBlue,
    linkHover: blue,
    disabled: gray,
    background: white,
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
    border: white,
    shadow: gray
  }
}
