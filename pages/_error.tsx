import React from 'react'
import Layout from '../components/Layout'

const Error = ({ statusCode }: { statusCode: number }) => (
  statusCode
    ? <Layout heading={statusCode.toString()} subheading='An error occurred on server' />
    : <Layout heading='404' subheading={`This page doesn't exist!`} />
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
