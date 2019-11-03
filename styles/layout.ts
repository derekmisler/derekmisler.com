import { LayoutTypes } from 'types/layout'
import { gray, black } from './colors'

export const LAYOUT_DEFAULTS: LayoutTypes = {
  navHeight: 40,
  backgroundColor: black,
  borderColor: gray,
  borderRadius: '6px',
  borderStyle: '3px solid',
  opacity: '0.65',
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
