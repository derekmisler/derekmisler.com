import styled from 'styled-components'
import React, { memo, SFC } from 'react'
import { sections } from 'constants/sections'
import { NavItem } from './NavItem'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledNav = styled.nav`
  display: none;
  @media ${mediaQueries.desktop} {
    display: block;
    border-bottom: none;
    padding: 0 ${spacing.large};
  }
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  @media ${mediaQueries.desktop} {
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
