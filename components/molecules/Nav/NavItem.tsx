import React from 'react'
import styled from 'styled-components'
import { Link, Text, Small } from 'atoms/Typography'
import { Li } from 'atoms/Lists'
import { Animated } from 'molecules/Animated'
import { SectionTypes } from 'constants/sections'
import { LAYOUT_DEFAULTS } from 'styles'

interface NavItemProps {
  section: SectionTypes
  index: number
}

const { spacing } = LAYOUT_DEFAULTS

const StyledNavItem = styled(Li)`
  padding-left: ${spacing.large};
`

export const NavItem = ({ section, index }: NavItemProps) => {
  const position: string = (index + 1).toString()
  const positionLabel = `0${position}.\xa0`
  const delay: number = 100 * (index + 1)
  return (
    <StyledNavItem>
      <Animated key={section.id} delay={delay}>
        <Link href={`#${section.id}`}>
          <Text inline>
            <Small>{positionLabel}</Small>
            {section.heading}
          </Text>
        </Link>
      </Animated>
    </StyledNavItem>
  )
}
