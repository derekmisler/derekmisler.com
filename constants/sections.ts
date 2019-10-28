import About from 'sections/About'
import Experience from 'sections/Experience'
import Qualifications from 'sections/Qualifications'
import Projects from 'sections/Projects'
import Contact from 'sections/Contact'

export interface SectionTypes {
  label: string
  location: string
  component: React.FC
}

export const sections: SectionTypes[] = [
  {
    label: 'About',
    location: 'about',
    component: About
  },
  {
    label: 'Experience',
    location: 'experience',
    component: Experience
  },
  {
    label: 'Qualifications',
    location: 'qualifications',
    component: Qualifications
  },
  {
    label: 'Projects',
    location: 'projects',
    component: Projects
  },
  {
    label: 'Contact',
    location: 'contact',
    component: Contact
  }
]
