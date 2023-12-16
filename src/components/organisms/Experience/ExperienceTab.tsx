import styled from 'styled-components'
import { Experience } from '@/constants/resume'
import { Heading, Small } from '@/atoms/Typography'
import { LAYOUT_DEFAULTS } from '@/styles/layout'

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledTab = styled.div<{ isActive?: boolean }>`
  display: none;
  @media ${mediaQueries.desktop} {
    display: block;
    padding: ${spacing.small} 0;
    margin-bottom: ${spacing.medium};
    cursor: ${({ isActive }) => (isActive ? undefined : 'pointer')};
    border-bottom: ${({ theme, isActive }) =>
      `${borderSize} ${borderStyle} ${isActive ? theme.accent : theme.text}`};
    &:hover {
      border-bottom-color: ${({ theme, isActive }) => (isActive ? theme.accent : theme.accent)};
    }
  }
`

interface ExperienceTabProps {
  e: Experience
  onClick: Function
  activeId?: string
  id: string
}

export const ExperienceTab = ({ e, onClick, id, activeId }: ExperienceTabProps) => {
  const handleClick = () => onClick(id)
  const isActive = id === activeId
  return (
    <StyledTab isActive={isActive} onClick={handleClick}>
      <Heading level={5} accent={isActive}>
        {e.title}
        <br />
        {e.startDate}&ndash;{e.endDate}
      </Heading>
      <Small accent={isActive}>{e.location}</Small>
    </StyledTab>
  )
}