import Document, { Head, Main, NextScript } from 'next/document'
import LdJson from './components/LdJson'
import env from './utils/helpers/env'
import resume from './utils/constants/resume'

export default class CustomDocument extends Document {
  render() {
    const { profile, contact, location } = resume
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <meta name='mobile-web-app-capable' content='yes' />
          <title>{profile.title}</title>
          <meta name='description' content={profile.metaDescription} />
          <link rel='manifest' href='/static/meta/manifest.json' />
          <link rel='shortcut icon' href='/static/meta/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:300,300italic,700,700italic|Playfair+Display:700' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          { env.__PROD__ && <base href={contact.website} /> }
          <meta name='google-site-verification' content='oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk' />
          <link rel='publisher' href='https://plus.google.com/110617470325528028773/' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={contact.twitterHandle} />
          <meta name='twitter:title' content={profile.title} />
          <meta name='twitter:description' content={profile.metaDescription} />
          <meta name='twitter:creator' content={contact.twitterHandle} />
          <meta name='twitter:image' content='/static/meta/twitter-card.jpg' />
          <meta property='og:title' content={profile.title} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={contact.website} />
          <meta property='og:image' content='/static/meta/facebook.jpg' />
          <meta property='og:description' content={profile.metaDescription} />
          <meta property='og:site_name' content={profile.title} />
          <meta property='fb:admins' content='812785510' />
          <LdJson data={
            {
              '@context': 'http://schema.org',
              '@type': 'Person',
              'name': `${profile.fullName}`,
              'description': `${profile.description}`,
              'image': '/static/meta/google-plus.jpg',
              'jobTitle': `${profile.description}`,
              'url': `${contact.website}`,
              'email': `${contact.email}`,
              'telephone': `${contact.phonedisplay}`,
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': `${location.houseNumber} ${location.street}`,
                'addressLocality': `${location.city}`,
                'addressRegion': `${location.state}`,
                'postalCode': `${location.zipcode}`
              },
              'sameAs': [
                `${contact.linkedin}`,
                `${contact.github}`,
                `${contact.twitter}`,
                `${contact.instagram}`,
                `${contact.flickr}`,
                `${contact.stackOverflow}`,
                `${contact.pinterest}`,
                `${contact.fivehundred}`
              ]
            }
          } />
          <LdJson data={
            {
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              'name': `${profile.fullName}`,
              'alternateName': `${profile.firstName}`,
              'url': `${contact.website}`
            }
          } />
          <LdJson data={
            {
              '@context': 'http://schema.org',
              '@type': 'Organization',
              'logo': '/static/meta/google-plus.jpg',
              'url': `${contact.website}`,
              'contactPoint': [
                {
                  '@type': 'ContactPoint',
                  'telephone' : `${contact.phone}`,
                  'contactType' : 'technical support'
                }
              ]
            }
          } />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
