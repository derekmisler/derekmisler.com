import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-17984733-3')
}

export const logPageView = (page: string) => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

export default initGA
