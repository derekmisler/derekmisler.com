import React from 'react'

const Error = ({ statusCode }: { statusCode: number }) => (
  <p>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : 'An error occurred on client'}
  </p>
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
