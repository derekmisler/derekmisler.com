import styled, { css } from 'styled-components'
import React, { useState, memo } from 'react'
import { Link, Heading } from 'components/Typography'
import { sections } from 'constants/sections'
import { Animated } from 'components/Animated'
import { transparentBlack } from 'styles/colors'
import { transitionDefaults } from 'styles/layout'

const { duration, timing } = transitionDefaults

const activeNav = css`
  background-color: ${transparentBlack};
  top: 0;
  bottom: 0;
`

const inactiveNav = css`
  background-color: 'transparent';
  bottom: -200vh;
`

const StyledNav = styled.nav<{ isActive?: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
  ${({ isActive }) => (isActive ? activeNav : inactiveNav)};
  transition: ${duration} background-color ${timing};
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
`

export const Nav: React.FC<{}> = memo(() => {
  const [navIsActive, activateNav] = useState<boolean>(false)
  const handleClick = () => {
    activateNav(!navIsActive)
  }
  return (
    <>
      <Link as='button' onClick={handleClick}>
        Click
      </Link>
      <StyledNav isActive={navIsActive} onClick={handleClick}>
        <Ul vocab='http://schema.org/' typeof='BreadcrumbList'>
          {sections.map((section, i) => (
            <Animated
              as='li'
              key={section.label}
              property='itemListElement'
              typeof='ListItem'
              active={navIsActive}
              delay={100 * (i + 1) + (navIsActive ? 500 : 0)}
            >
              <Link
                href={`#${section.location}`}
                property='item'
                typeof='WebPage'
                variant='text'
              >
                <Heading level={1} as='span' property='name'>
                  {section.label}
                </Heading>
              </Link>
              <meta property='position' content={(i + 1).toString()} />
            </Animated>
          ))}
        </Ul>
      </StyledNav>
    </>
  )
})
