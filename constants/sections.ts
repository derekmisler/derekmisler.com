import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'

export interface SectionTypes {
  label: string
  location: string
  component: React.FC
}

export const sections: SectionTypes[] = [
  {
    label: 'About Me',
    location: 'about',
    component: About
  },
  {
    label: 'Experience',
    location: 'experience',
    component: Experience
  },
  {
    label: 'Projects',
    location: 'projects',
    component: Projects
  }
]
