import styled from 'styled-components'
import { Link } from 'components/Typography'
import { sections } from 'constants/sections'
import { Grid } from 'components/Grid'

const Ul = styled(Grid)`
  list-style-type: none;
  text-align: center;
`

const Nav = () => {
  return (
    <nav>
      <Ul
        as='ul'
        padding
        count={sections.length}
        vocab='http://schema.org/'
        typeof='BreadcrumbList'
      >
        {sections.map((section, i) => (
          <li key={section.label} property='itemListElement' typeof='ListItem'>
            <Link
              href={`#${section.location}`}
              property='item'
              typeof='WebPage'
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

export default Nav
