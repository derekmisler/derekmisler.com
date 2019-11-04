import { Link, Small } from 'components/Typography'
import { sections } from 'constants/sections'
import { Card } from 'components/Card'
import { SmMdLgWidths, CardAlignment } from 'types/layout'

export const Nav: React.FC<{}> = () => {
  return (
    <nav>
      <Card
        as='ul'
        columns={sections.length}
        vocab='http://schema.org/'
        typeof='BreadcrumbList'
        align={CardAlignment.End}
      >
        {sections.map((section, i) => (
          <Card
            as='li'
            animation
            delay={100 * (i + 1) + 500}
            key={section.label}
            property='itemListElement'
            padding={SmMdLgWidths.Small}
            typeof='ListItem'
          >
            <Link
              href={`#${section.location}`}
              property='item'
              typeof='WebPage'
              variant='text'
            >
              <Small>0{i + 1}&nbsp;</Small>
              <span property='name'>{section.label}</span>
            </Link>
            <meta property='position' content={(i + 1).toString()} />
          </Card>
        ))}
      </Card>
    </nav>
  )
}
