import styled, { css } from 'styled-components'
import React, { memo, FC, useReducer } from 'react'
import { Link, Heading } from 'components/Typography'
import { Action } from 'components/Buttons'
import { sections } from 'constants/sections'
import { Animated } from 'components/Animated'
import { transparentBlack, transitionDefaults } from 'styles'
import { navReducer } from 'utils/reducers'

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

export const Nav: FC<{}> = memo(() => {
  const [state, dispatch] = useReducer(navReducer, { active: false })
  const { active } = state
  const handleClick = () => {
    dispatch({})
  }
  return (
    <>
      <Action onClick={handleClick} />
      <StyledNav isActive={active} onClick={handleClick}>
        <Ul vocab='http://schema.org/' typeof='BreadcrumbList'>
          {sections.map((section, i) => (
            <Animated
              as='li'
              key={section.id}
              property='itemListElement'
              typeof='ListItem'
              active={active}
              delay={100 * (i + 1) + (active ? 500 : 0)}
            >
              <Link
                href={`#${section.id}`}
                property='item'
                typeof='WebPage'
                variant='text'
              >
                <Heading level={1} as='span' property='name'>
                  {section.heading}
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
