import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: {
      light: boolean
      dark: boolean
    }
  }
}
