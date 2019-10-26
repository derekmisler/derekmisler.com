import React from 'react'
import Header from 'components/Header'

const Error = ({ statusCode }: { statusCode: number }) =>
  statusCode ? (
    <Header
      heading={statusCode.toString()}
      subheading='An error occurred on the server'
    />
  ) : (
    <Header heading={`This page doesn't exist!`} />
  )

interface ErrorTypes {
  err?: { statusCode: number }
  res?: { statusCode?: number }
}

Error.getInitialProps = ({ res, err }: ErrorTypes) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
