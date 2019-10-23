import Link from 'next/link'
import { routes } from '../constants/routes'

const Nav = () => {
  const columns = routes.length || 1
  const navClass = `nav medium-block-grid-${columns}`

  return (
    <nav className='navbar scroll-down hidden-xs hidden-sm'>
      <button
        type='button'
        className='navbar-toggle'
        data-toggle='collapse'
        data-target='.navbar-collapse'
      >
        Menu
      </button>
      <div className='collapse navbar-collapse'>
        <ul
          className={navClass}
          vocab='http://schema.org/'
          typeof='BreadcrumbList'
        >
          {routes.map((section, i) => (
            <li
              key={section.label}
              property='itemListElement'
              typeof='ListItem'
            >
              <Link href={section.location}>
                <a property='item' typeof='WebPage'>
                  <span property='name'>{section.label}</span>
                </a>
              </Link>
              <meta property='position' content={(i + 1).toString()} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
