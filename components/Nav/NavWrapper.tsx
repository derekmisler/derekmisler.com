import styled from 'styled-components'
import React, { memo, SFC } from 'react'
import { sections } from 'constants/sections'
import { NavItem } from './NavItem'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { mediaQueries } = LAYOUT_DEFAULTS

const StyledNav = styled.nav`
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3; */
`

const Ul = styled.ul`
  display: flex;
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
