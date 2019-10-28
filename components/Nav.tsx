import { Link } from 'components/Typography'
import { routes } from 'constants/routes'

const Nav = () => {
  return (
    <nav>
      <ul vocab='http://schema.org/' typeof='BreadcrumbList'>
        {Object.values(routes).map((section, i) => (
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
