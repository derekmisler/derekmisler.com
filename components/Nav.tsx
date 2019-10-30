import styled from 'styled-components'
import { Link } from 'components/Typography'
import { sections } from 'constants/sections'
import { Card } from 'components/Card'
import { SmMdLgWidths } from 'types/layout'

const Ul = styled(Card)`
  list-style-type: none;
  text-align: center;
`

export const Nav = () => {
  return (
    <nav>
      <Ul
        as='ul'
        padding={SmMdLgWidths.Small}
        columns={sections.length}
        vocab='http://schema.org/'
        typeof='BreadcrumbList'
      >
        {sections.map((section, i) => (
          <li key={section.label} property='itemListElement' typeof='ListItem'>
            <Link
              href={`#${section.location}`}
              property='item'
              typeof='WebPage'
              variant='text'
            >
              <span property='name'>{section.label}</span>
            </Link>
            <meta property='position' content={(i + 1).toString()} />
          </li>
        ))}
      </Ul>
    </nav>
  )
}
