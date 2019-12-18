import React from 'react'
import { Heading } from 'components/Typography'
import { GlobalStyle } from 'styles'
import { Analytics } from 'components/Analytics'

export interface ErrorTypes {
  err?: { statusCode: number }
  res?: { statusCode?: number }
}

const Error = ({ statusCode }: { statusCode: number }) => (
  <>
    <Analytics />
    <GlobalStyle />
    {statusCode ? (
      <Heading level={1}>{statusCode.toString()}</Heading>
    ) : (
        <Heading level={1}>This page doesn't exist!</Heading>
      )}
  </>
)

Error.getInitialProps = ({ res, err }: ErrorTypes) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : undefined
  return { statusCode }
}

export default Error
