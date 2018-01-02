const firstName = 'Derek'
const middleName = 'Alan'
const lastName = 'Misler'
const description = 'Front-End Engineer & UI/UX Designer'
const email = 'derekmisler@gmail.com'
const socialId = 'derekmisler'

const config = {
  env: process.env.NODE_ENV || 'development',
  profile: {
    firstName,
    middleName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    description,
    title: `${firstName} ${lastName} | ${description}`,
    metaDescription: `${firstName} is a front-end engineer with a design background and 10+ years of experience. He is also available for hire. Send an email to ${email} if you'd like to learn more.`,
    biography: 'I am a front-end engineer and UI/UX designer living in New York with 10+ years experience. I have a diverse education, both traditional and self-driven, of many different web and app development languages for desktop and mobile. I am basically fluent with HTML5, CSS3 (including CSS preprocessors like LESS and Sass) along with JavaScript (ES6/7, including frameworks like React and Aurelia), including templating languages like Jade/Pug. I have experience with back-end languages, too, like Node, Python, Ruby, and a long history with PHP. I also have a design background a surprisingly large knowledge of typography (seriously, let\'s talk about it). I think all developers should study design, and I believe having this well-rounded education makes me a stronger engineer.'
  },
  location: {
    housenumber: '700',
    street: 'W End Ave. 12A',
    zipcode: '10025',
    city: 'New York',
    state: 'NY',
    country: 'United States'
  },
  contact: {
    email,
    website: `http://www.${socialId}.com`,
    phone: '+18282736943',
    phonedisplay: '(828) 273-6943',
    twitter: `http://twitter.com/${socialId}`,
    twitterHandle: `@${socialId}`,
    linkedin: `http://www.linkedin.com/in/${socialId}/`,
    github: `http://${socialId}.github.io`,
    flickr: `http://www.flickr.com/photos/${socialId}/`,
    fivehundred: `https://prime.500px.com/${socialId}`,
    stackoverflow: `http://careers.stackoverflow.com/${socialId}`,
    instagram: `https://www.instagram.com/${socialId}/`,
    pinterest: `https://www.pinterest.com/${socialId}/`
  }
};

config.compilerOptions = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 7', 'IE >= 9']
        },
        modules: false
      }
    ]
  ],
  plugins: [ 'transform-object-rest-spread' ]
}

config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production'
}

module.exports = config
