import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { JsonLd } from 'atoms/JsonLd'
import { resume } from 'constants/resume'

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { profile, contact } = resume
    return (
      <>
        <Head>
          <title>{profile.title}</title>
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
          <link rel='canonical' href={contact.website} />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='shortcut icon' href='favicon.ico' />
          <link rel='stylesheet' href='https://use.typekit.net/jzw6tzs.css' />
          <meta
            name='google-site-verification'
            content='oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk'
          />
          <link
            rel='publisher'
            href='https://plus.google.com/110617470325528028773/'
          />
          <meta name='twitter:title' content={profile.title} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={contact.twitterHandle} />
          <meta name='twitter:description' content={profile.metaDescription} />
          <meta name='twitter:creator' content={contact.twitterHandle} />
          <meta name='twitter:image' content='/images/meta/twitter-card.jpg' />
          <meta property='og:title' content={profile.title} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={contact.website} />
          <meta property='og:image' content='/images/meta/facebook.jpg' />
          <meta property='og:description' content={profile.metaDescription} />
          <meta property='og:site_name' content={profile.title} />
          <meta property='fb:admins' content='812785510' />
          <JsonLd
            data={{
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: `${profile.fullName}`,
              description: `${profile.description}`,
              image: '/images/meta/google-plus.jpg',
              jobTitle: `${profile.description}`,
              url: `${contact.website}`,
              email: `${contact.email}`,
              telephone: `${contact.phoneDisplay}`,
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
              logo: '/images/meta/google-plus.jpg',
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
        <Component {...pageProps} />
      </>
    )
  }
}

export default MainApp
