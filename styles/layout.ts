import { LayoutTypes } from 'types/layout'
import { white, black } from './colors'

export const LAYOUT_DEFAULTS: LayoutTypes = {
  navHeight: 40,
  backgroundColor: black,
  borderColor: white,
  borderRadius: '0',
  borderSize: '3px',
  borderStyle: 'solid',
  opacity: '0.65',
  transition: `500ms all ease-in-out`,
  dropShadow: {
    small: '3px',
    medium: '6px',
    large: '9px'
  },
  spacing: {
    small: '.5rem',
    medium: '1.25rem',
    large: '2.75rem'
  },
  widths: {
    small: '50vw',
    medium: '66vw',
    large: '100vw'
  }
}
