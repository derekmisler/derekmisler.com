import React from 'react'
import Link from 'next/link'
import { sections } from '../constants/sections'

const Nav = () => {
  const columns = sections.length || 1
  const navClass = `nav medium-block-grid-${columns}`

  return (
    <nav className='navbar scroll-down hidden-xs hidden-sm'>
      <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
Menu
      </button>
      <div className='collapse navbar-collapse'>
        <ul className={navClass} vocab='http://schema.org/' typeof='BreadcrumbList'>
          {
            sections.map((section, i) => (
              <li key={section.label} property='itemListElement' typeof='ListItem'>
                <Link
                  property='item'
                  typeof='WebPage'
                  to={section.location}
                  activeClassName='active'
                >
                  <span property='name'>
                    {section.label}
                  </span>
                </Link>
                <meta property='position' content={i + 1} />
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Nav
