import React, { memo, SFC } from 'react'
import styled from 'styled-components'
import { Link, Text, Small } from 'atoms/Typography'
import { Li } from 'atoms/Lists'
import { Animated } from 'molecules/Animated'
import { SectionTypes } from 'constants/sections'
import { LAYOUT_DEFAULTS } from 'styles'

interface NavItemProps {
  section: SectionTypes,
  index: number
}

const { spacing } = LAYOUT_DEFAULTS

const StyledNavItem = styled(Li)`
  padding-left: ${spacing.large};
`

export const NavItem: SFC<NavItemProps> = memo(({ section, index }) => {
  const position: string = (index + 1).toString()
  const positionLabel = `0${position}.\xa0`
  const delay: number = 100 * (index + 1)
  return (
    <StyledNavItem>
      <Animated
        key={section.id}
        property='itemListElement'
        typeof='ListItem'
        delay={delay}
      >
        <Link
          href={`#${section.id}`}
          property='item'
          typeof='WebPage'
        >
          <Text inline property='name'>
            <Small>{positionLabel}</Small>
            {section.heading}
          </Text>
        </Link>
        <meta property='position' content={position} />
      </Animated>
    </StyledNavItem>
  )
})
