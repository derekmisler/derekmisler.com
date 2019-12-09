import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { ImgProps } from 'types/layout'
import { generateShadow } from 'utils/generateShadow'

const { transition, borderColor } = LAYOUT_DEFAULTS

const { linkColorHover } = TYPOGRAPHY_DEFAULTS

const StyledImg = styled.img`
  filter: grayscale(20%) sepia(20%) contrast(110%);
  transition: ${transition};

  &:hover {
    filter: none;
  }
`
const StyledImgContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  max-width: 100%;
  ${generateShadow(borderColor, linkColorHover, 'box')}
`

export const Img: React.FC<ImgProps> = ({ fileName, ...rest }) => {
  const src = `/images/portfolio/${fileName}`
  const retinaSrc = `/images/portfolio/retina/${fileName}`
  return (
    <StyledImgContainer>
      <StyledImg
        src={src}
        srcSet={`
          ${src} 1x,
          ${retinaSrc} 2x
        `}
        {...rest}
      />
    </StyledImgContainer>
  )
}
