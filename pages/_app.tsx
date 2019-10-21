import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Normalize />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
