import React from 'react'
import App from 'next/app'
import { withRouter } from 'next/router'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import JsonLd from '../components/JsonLd'
import resume from '../constants/resume'
import routes from '../constants/routes'

const theme = {
  mode: 'default',
  font: 'serif'
}

class MainApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const { pathname } = router
    const { profile, contact, location } = resume
    const { label = '' } = routes.find(r => r.location === pathname) || {}
    const pageTitle = label ? `${label} | ${profile.title}` : profile.title
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='description' content={profile.metaDescription} />
          <link rel='canonical' href={`${contact.website}${pathname}`} />
          <link rel='manifest' href='manifest.json' />
          <link rel='shortcut icon' href='favicon.ico' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Lato:300,300italic,700,700italic|Playfair+Display:700'
          />
          <meta
            name='google-site-verification'
            content='oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk'
          />
          <link
            rel='publisher'
            href='https://plus.google.com/110617470325528028773/'
          />
          <meta name='twitter:title' content={pageTitle} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={contact.twitterHandle} />
          <meta name='twitter:description' content={profile.metaDescription} />
          <meta name='twitter:creator' content={contact.twitterHandle} />
          <meta
            name='twitter:image'
            content='/static/images/meta/twitter-card.jpg'
          />
          <meta property='og:title' content={pageTitle} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={contact.website} />
          <meta
            property='og:image'
            content='/static/images/meta/facebook.jpg'
          />
          <meta property='og:description' content={profile.metaDescription} />
          <meta property='og:site_name' content={pageTitle} />
          <meta property='fb:admins' content='812785510' />
          <JsonLd
            data={{
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: `${profile.fullName}`,
              description: `${profile.description}`,
              image: '/static/images/meta/google-plus.jpg',
              jobTitle: `${profile.description}`,
              url: `${contact.website}`,
              email: `${contact.email}`,
              telephone: `${contact.phoneDisplay}`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: `${location.houseNumber} ${location.street}`,
                addressLocality: `${location.city}`,
                addressRegion: `${location.state}`,
                postalCode: `${location.zipcode}`
              },
              sameAs: [
                `${contact.linkedin}`,
                `${contact.github}`,
                `${contact.twitter}`,
                `${contact.instagram}`,
                `${contact.flickr}`,
                `${contact.stackOverflow}`,
                `${contact.pinterest}`,
                `${contact.fivehundred}`
              ]
            }}
          />
          <JsonLd
            data={{
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              name: `${profile.fullName}`,
              alternateName: `${profile.firstName}`,
              url: `${contact.website}`
            }}
          />
          <JsonLd
            data={{
              '@context': 'http://schema.org',
              '@type': 'Organization',
              logo: '/static/images/meta/google-plus.jpg',
              url: `${contact.website}`,
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: `${contact.phone}`,
                  contactType: 'technical support'
                }
              ]
            }}
          />
        </Head>
        <Normalize />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default withRouter(MainApp)
