import { Link } from 'components/Typography'
import { sections } from 'constants/sections'

const Nav = () => {
  return (
    <nav>
      <ul vocab='http://schema.org/' typeof='BreadcrumbList'>
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
      </ul>
    </nav>
  )
}

export default Nav
