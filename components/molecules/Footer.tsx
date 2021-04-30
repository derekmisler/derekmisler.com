import styled from 'styled-components'
import { Text } from 'atoms/Typography'
import { Row, Col } from 'atoms/Grid'
import { LAYOUT_DEFAULTS } from 'styles'
import { Contact } from 'organisms/Contact'

const { spacing, borderStyle, borderSize, mediaQueries } = LAYOUT_DEFAULTS

export const StyledFooter = styled.footer`
  margin: ${spacing.large} 0 0 0;
  padding: ${spacing.large};
  border-top: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.accent}`};

  @media ${mediaQueries.desktop} {
    padding: ${spacing.large} ${spacing.large} 0;
  }
`

export const Footer = () => (
  <StyledFooter>
    <Row columnsDesktop={2}>
      <Col>
        <Text>
          Whoa!
          <br />
          You made it all the way down to the footer!
        </Text>
        <Text>This site is still under construction, so here are some links to keep you busy:</Text>
        <Contact />
      </Col>
    </Row>
  </StyledFooter>
)
