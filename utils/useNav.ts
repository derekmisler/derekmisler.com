import { useReducer } from 'react'
import { navReducer } from 'utils/reducers'

type UseNavProps = [
  boolean,
  Function
]

export const useNav = (isActive = false): UseNavProps => {
  const [{ active }, dispatch] = useReducer(navReducer, { active: isActive })
  const dispatchNav = () => dispatch({})
  return [active, dispatchNav]
}
