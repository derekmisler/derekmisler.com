import { SFC } from 'react'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'
export interface SectionTypes {
  heading: string
  id: string
  Component: SFC
}

export const sections: SectionTypes[] = [
  {
    heading: 'Me',
    id: 'me',
    Component: About
  },
  {
    heading: 'Work',
    id: 'work',
    Component: Experience
  },
  {
    heading: 'Works',
    id: 'works',
    Component: Projects
  }
]
