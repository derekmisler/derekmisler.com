import React from 'react'
import { NextPage } from 'next'
import { ThemeProvider } from 'styled-components'
import { Heading } from 'atoms/Typography'
import { GlobalStyle } from 'styles'
import { Analytics } from 'atoms/Analytics'
import { useTheme } from 'utils/useTheme'

const FourOhFour: NextPage<{}> = () => {
  const [theme] = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <GlobalStyle theme={theme} />
      <Heading level={1}>This page doesn't exist!</Heading>
    </ThemeProvider>
  )
}

export default FourOhFour
