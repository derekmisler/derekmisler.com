import { memo, SFC, ImgHTMLAttributes, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'
import { generateShadow } from 'utils/generateShadow'

const { transition } = LAYOUT_DEFAULTS

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  fileName: string
}
interface StyledImageProps {
  backgroundColor: string
  shadowColor: string
}

const StyledImg = styled.img`
  filter: grayscale(20%) sepia(20%) contrast(110%);
  transition: ${transition};

  &:hover {
    filter: none;
  }
`
const StyledImgContainer = styled.div<StyledImageProps>`
  display: flex;
  height: fit-content;
  width: fit-content;
  max-width: 100%;
  ${({ shadowColor, backgroundColor }) =>
    generateShadow(shadowColor, backgroundColor, 'box')}
`

export const Img: SFC<ImgProps> = memo(({ fileName, ...rest }) => {
  const src = `/images/portfolio/${fileName}`
  const retinaSrc = `/images/portfolio/retina/${fileName}`
  const { border, background } = useContext(ThemeContext)

  return (
    <StyledImgContainer
      shadowColor={border}
      backgroundColor={background}
    >
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
})
