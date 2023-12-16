import { Fragment } from 'react'
import { Text, Link } from '@/atoms/Typography'
import { contact } from '@/constants/resume'

const LINKS = [
  { title: 'LinkedIn', url: contact.linkedin },
  { title: 'GitHub', url: contact.github },
]

export const Contact = () => {
  return (
    <Text>
      {LINKS.map((link, i) => {
        const isLast = i === LINKS.length - 1
        return (
          <Fragment key={link.title}>
            <Link href={link.url} rel='noopener' target='_blank'>
              {link.title}
            </Link>
            {!isLast && ' / '}
          </Fragment>
        )
      })}
    </Text>
  )
}
