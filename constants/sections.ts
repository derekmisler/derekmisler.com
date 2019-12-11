import { FC } from 'react'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'
import { SmMdLgSizes } from 'types'

interface SectionTypes {
  heading: string
  id: string
  Component: FC
  width: SmMdLgSizes
}

export const sections: SectionTypes[] = [
  {
    heading: 'About Me',
    id: 'about',
    Component: About,
    width: 'large'
  },
  {
    heading: 'Experience',
    id: 'experience',
    Component: Experience,
    width: 'large'
  },
  {
    heading: 'Projects',
    id: 'projects',
    Component: Projects,
    width: 'large'
  }
]
