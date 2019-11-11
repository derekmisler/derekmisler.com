import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { ImgProps } from 'types/layout'

const {
  borderSize,
  borderStyle,
  transition,
  backgroundColor,
  borderColor,
  dropShadow
} = LAYOUT_DEFAULTS

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
  background-color: ${borderColor};
  border: ${borderSize} ${borderStyle} ${borderColor};
  height: fit-content;
  width: fit-content;
  max-width: 100%;
  box-shadow: 0 0 0 ${dropShadow.small} ${backgroundColor},
    -${dropShadow.medium} ${dropShadow.medium} ${borderColor},
    ${dropShadow.medium} -${dropShadow.medium} ${borderColor};
  transition: ${transition};

  &:hover {
    background-color: ${linkColorHover};
    border-color: ${linkColorHover};
    box-shadow: 0 0 0 ${dropShadow.medium} ${backgroundColor},
      -${dropShadow.large} ${dropShadow.large} ${linkColorHover},
      ${dropShadow.large} -${dropShadow.large} ${linkColorHover};
  }
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
