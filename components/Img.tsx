import { memo, FC, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'
import { generateShadow } from 'utils/generateShadow'
import { useTheme } from 'utils/useTheme'

const { transition } = LAYOUT_DEFAULTS

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  fileName: string
}
interface StyledImageProps {
  backgroundColor: string
  shadowColor: string
  shadowColorHover: string
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
  ${({ shadowColor, shadowColorHover, backgroundColor }) => generateShadow(shadowColor, shadowColorHover, backgroundColor, 'box')}
`

export const Img: FC<ImgProps> = memo(({ fileName, ...rest }) => {
  const src = `/images/portfolio/${fileName}`
  const retinaSrc = `/images/portfolio/retina/${fileName}`
  const [{ border, linkHover, background }] = useTheme()

  return (
    <StyledImgContainer
      shadowColor={border}
      shadowColorHover={linkHover}
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
