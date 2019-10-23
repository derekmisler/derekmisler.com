import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Analytics from './Analytics'

interface LayoutTypes {
  heading?: string
  subheading?: string
}

const Layout: React.FC<LayoutTypes> = ({ children, heading, subheading }) => (
  <>
    <Analytics />
    <Header heading={heading} subheading={subheading} />
    <Nav />
    {children && <main>{children}</main>}
    <Footer />
  </>
)

export default Layout
