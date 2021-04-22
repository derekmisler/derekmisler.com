import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { ThemeProvider } from 'styled-components'
import { Heading } from 'atoms/Typography'
import { GlobalStyle } from 'styles'
import { Analytics } from 'atoms/Analytics'
import { useTheme } from 'utils/useTheme'

interface ErrorProps {
  statusCode: string
}
interface ErrorTypes extends NextPageContext {}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  const [theme] = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Analytics />
      <GlobalStyle theme={theme} />
      <Heading level={1}>{statusCode || "This page doesn't exist!"}</Heading>
    </ThemeProvider>
  )
}

Error.getInitialProps = ({ res, err }: ErrorTypes) => {
  const { statusCode: resStatusCode } = res || {}
  const { statusCode: errStatusCode } = err || {}
  const statusCode = (resStatusCode || errStatusCode || '').toString()
  return { statusCode }
}

export default Error
