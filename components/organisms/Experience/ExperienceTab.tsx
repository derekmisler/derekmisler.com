import styled from 'styled-components'
import { ExperienceTypes } from 'constants/resume'
import { Heading, Small } from 'atoms/Typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledTab = styled.div<{ isActive?: boolean }>`
  display: none;
  @media ${mediaQueries.desktop} {
    display: block;
    padding: ${spacing.small} 0;
    cursor: ${({ isActive }) => (isActive ? undefined : 'pointer')};
    border-bottom: ${({ theme, isActive }) =>
      `${borderSize} ${borderStyle} ${isActive ? theme.accent : theme.link}`};
    &:hover {
      border-bottom-color: ${({ theme, isActive }) => (isActive ? theme.accent : theme.linkHover)};
    }
  }
`

interface ExperienceTabProps {
  e: ExperienceTypes
  onClick: Function
  activeId?: string
  id: string
}

export const ExperienceTab = ({ e, onClick, id, activeId }: ExperienceTabProps) => {
  const handleClick = () => onClick(id)
  return (
    <StyledTab isActive={id === activeId} onClick={handleClick}>
      <Heading level={5}>
        {e.title}
        <br />
        {e.startDate}&ndash;{e.endDate}
      </Heading>
      <Small>{e.location}</Small>
    </StyledTab>
  )
}
