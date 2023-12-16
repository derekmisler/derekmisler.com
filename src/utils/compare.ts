export const compare: any = (a: any, b: any) => {
  if (a > b) return typeof a === 'number' ? -1 : 1
  if (a < b) return typeof a === 'number' ? 1 : -1
  return 0
}
