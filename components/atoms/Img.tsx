import { memo, SFC, ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'
import { generateShadow } from 'utils/generateShadow'

const { transition } = LAYOUT_DEFAULTS

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  fileName: string
}

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
  ${({ theme }) => generateShadow(theme.border, theme.background, 'box')}
`

export const Img: SFC<ImgProps> = memo(({ fileName, ...rest }) => {
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
})
