import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { yellow } from 'styles/colors'
import { ImgProps } from 'types/layout'

const { borderSize, borderStyle } = LAYOUT_DEFAULTS

const StyledImg = styled.img`
  background-color: ${yellow};
  border: ${borderSize} ${borderStyle} ${yellow};
  height: auto;
  max-width: 100%;
`

export const Img: React.FC<ImgProps> = ({ src, ...rest }) => {
  return <StyledImg src={src} {...rest} />
}
