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
    heading: 'About Me',
    id: 'about',
    Component: About
  },
  {
    heading: 'Experience',
    id: 'experience',
    Component: Experience
  },
  {
    heading: 'Projects',
    id: 'projects',
    Component: Projects
  }
]
