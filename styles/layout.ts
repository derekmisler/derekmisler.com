import { LayoutTypes } from 'types/layout'
import { gray, black } from './colors'

export const LAYOUT_DEFAULTS: LayoutTypes = {
  navHeight: 40,
  backgroundColor: black,
  borderColor: gray,
  widths: {
    small: '50vw',
    medium: '66vw',
    large: '100vw'
  }
}
