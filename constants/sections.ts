import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'
import { SmMdLgWidths } from 'types/layout'

export interface SectionTypes {
  label: string
  location: string
  component: React.FC
  width: SmMdLgWidths
}

export const sections: SectionTypes[] = [
  {
    label: 'About Me',
    location: 'about',
    component: About,
    width: SmMdLgWidths.Medium
  },
  {
    label: 'Experience',
    location: 'experience',
    component: Experience,
    width: SmMdLgWidths.Medium
  },
  {
    label: 'Projects',
    location: 'projects',
    component: Projects,
    width: SmMdLgWidths.Medium
  }
]
