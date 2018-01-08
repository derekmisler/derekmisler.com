import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import './assets/css/style.styl'
import App from './components/App'
import { resume } from './constants/resume'
import twitterCard from './assets/images/meta/twitter-card.jpg'
import facebookImage from './assets/images/meta/facebook.jpg'
import googlePlusImage from './assets/images/meta/google-plus.jpg'

const { profile, contact, location } = resume

const Root = () => (
  <React.Fragment>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />
      <title>{profile.title}</title>
      <meta name="description" content={profile.metaDescription} />
      <link rel="canonical" href={contact.website} />
      <meta name="google-site-verification" content="oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk" />
      <link rel="publisher" href="https://plus.google.com/110617470325528028773/" />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={contact.twitterHandle} />
      <meta name="twitter:title" content={profile.title} />
      <meta name="twitter:description" content={profile.metaDescription} />
      <meta name="twitter:creator" content={contact.twitterHandle} />
      <meta name="twitter:image" content={twitterCard} />

      {/* Open Graph data */}
      <meta property="og:title" content={profile.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={contact.website} />
      <meta property="og:image" content={facebookImage} />
      <meta property="og:description" content={profile.metaDescription} />
      <meta property="og:site_name" content={profile.title} />
      <meta property="fb:admins" content="812785510" />

      {/* Structured Schema.org Markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "${profile.fullName}",
            "description": "${profile.description}",
            "image": "${googlePlusImage}",
            "jobTitle": "${profile.description}",
            "url": "${contact.website}",
            "email": "${contact.email}",
            "telephone": "${contact.phonedisplay}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${location.housenumber} ${location.street}",
              "addressLocality": "${location.city}",
              "addressRegion": "${location.state}",
              "postalCode": "${location.zipcode}"
            },
            "sameAs": [
              "${contact.linkedin}",
              "${contact.github}",
              "${contact.twitter}",
              "${contact.instagram}",
              "${contact.flickr}",
              "${contact.stackoverflow}",
              "${contact.pinterest}",
              "${contact.fivehundred}"
            ]
          }
        `}
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "${profile.fullName}",
            "alternateName": "${profile.firstName}",
            "url": "${contact.website}"
          }
        `}
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "${contact.website}",
            "logo": "${googlePlusImage}",
            "contactPoint" : [{
              "@type" : "ContactPoint",
              "telephone" : "${contact.phone}",
              "contactType" : "technical support"
            }]
          }
        `}
      </script>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,300italic,700,700italic|Playfair+Display:700" rel="stylesheet" type="text/css" />

    </Helmet>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.Fragment>
)

render(<Root />, document.getElementById('root'))
registerServiceWorker()
