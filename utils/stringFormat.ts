export const fixWidow = (string = '') =>
  string.replace(/\s([^\s]+)\s*$/, '\u00A0$1')
