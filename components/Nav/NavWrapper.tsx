import styled from 'styled-components'
import React, { memo, SFC } from 'react'
import { sections } from 'constants/sections'
import { NavItem } from './NavItem'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { spacing, mediaQueries, borderStyle, borderSize } = LAYOUT_DEFAULTS

const StyledNav = styled.nav`
  border-bottom: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
  padding: ${spacing.medium} 0;
  margin-bottom: ${spacing.medium};
  @media ${mediaQueries.desktop} {
    border-bottom: none;
  }
`

const Ul = styled.ul`
  @media ${mediaQueries.desktop} {
    display: flex;
    justify-content: flex-end;
  }
`

export const Nav: SFC<{}> = memo(() => {
  return (
    <StyledNav>
      <Ul vocab='http://schema.org/' typeof='BreadcrumbList'>
        {sections.map((section, i) => (
          <NavItem section={section} index={i} key={section.id} />
        ))}
      </Ul>
    </StyledNav>
  )
})
