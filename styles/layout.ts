import { SmMdLgTypes } from 'types'

export interface LayoutTypes {
  borderRadius: string
  borderSize: string
  borderStyle: string
  opacity: string
  transition: string
  mediaQueries: {
    mobile: string
    desktop: string
  }
  dropShadow: SmMdLgTypes
  widths: SmMdLgTypes
  spacing: SmMdLgTypes
}

export const breakpoints = {
  mobile: '64em',
  desktop: '64.063em'
}

export const transitionDefaults = {
  duration: '500ms',
  property: 'all',
  timing: 'ease-in-out'
}

export const LAYOUT_DEFAULTS: LayoutTypes = {
  borderRadius: '0',
  borderSize: '.15rem',
  borderStyle: 'solid',
  opacity: '0.65',
  transition: `${transitionDefaults.duration} ${transitionDefaults.property} ${transitionDefaults.timing}`,
  mediaQueries: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    desktop: `screen and (min-width: ${breakpoints.desktop})`
  },
  dropShadow: {
    small: '.15rem',
    medium: '.3rem',
    large: '.45rem'
  },
  spacing: {
    small: '.5rem',
    medium: '1.25rem',
    large: '2.75rem'
  },
  widths: {
    small: '50%',
    medium: '66%',
    large: '90%'
  }
}
