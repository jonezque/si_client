import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      white: string
      blue: string
      navy: string
      green: string
      gray: string
    }
    breakpoints: string[]
  }
}
