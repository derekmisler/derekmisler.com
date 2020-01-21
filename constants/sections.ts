import { SFC } from 'react'
import About from 'organisms/About'
import Experience from 'organisms/Experience'
import Projects from 'organisms/Projects'
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
