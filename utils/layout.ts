import { ReactText } from 'react'

export const generateGrid = (elem: ReactText | number): string => {
  const isString = typeof elem === 'string'
  if (isString) return elem.toString()
  const array = new Array(elem)
  return array.fill('auto').join(' ')
}
