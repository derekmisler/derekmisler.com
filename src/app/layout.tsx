import Head from 'next/head'
import { JsonLd } from '@/atoms/JsonLd'
import { resume } from '@/constants/resume'
import { themes } from '@/styles/colors'
import {StyledComponentsRegistry} from '@/molecules/StyledComponentsRegistry'

const { profile, contact } = resume

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{profile.title}</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={profile.metaDescription} />
        <link rel='canonical' href={contact.website} />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Chrome for Android */}
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content={themes.dark.background} />
        <meta name='application-name' content={profile.fullName} />
        <link rel='icon' sizes='192x192' href='/icon-192.png' />

        {/* Safari for iOS */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-title' content={profile.fullName} />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <link rel='apple-touch-icon' href='/icon-192.png' />
        <link
          href='splashscreens/iphone5_splash.png'
          media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphone6_splash.png'
          media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphoneplus_splash.png'
          media='(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphonex_splash.png'
          media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphonexr_splash.png'
          media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphonexsmax_splash.png'
          media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipad_splash.png'
          media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipadpro1_splash.png'
          media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipadpro3_splash.png'
          media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipadpro2_splash.png'
          media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />

        {/* Win8 */}
        <meta name='msapplication-TileColor' content={themes.dark.background} />
        <meta name='msapplication-TileImage' content='/icon-192.png' />

        {/* Favicons */}
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-96.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16.png' />
        <link rel='shortcut icon' href='favicon.ico' />
        <link rel='preload' as='script' href='https://fonts.adobe.com' />
        <link rel='preload' as='font' href='https://use.typekit.net' />
        <meta
          name='google-site-verification'
          content='oM1NjzxvtvPp4JL2t2qo13zUhGnrpGF0Fbgyb6S8vDk'
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
            url: `${contact.website}`
          }}
        />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
