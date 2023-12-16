import { HTMLProps } from 'react'
import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES } from '@/styles'

export const Link = styled.a<HTMLProps<HTMLLinkElement>>`
  font: unset;
  ${DEFAULT_TEXT_STYLES}
  color: ${({ theme }) => theme.link};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.linkHover};
  }
`
