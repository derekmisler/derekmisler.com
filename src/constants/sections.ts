import { ComponentType } from 'react'
import { About } from '@/organisms/About'
import { Experience } from '@/organisms/Experience/ExperienceWrapper'

export interface SectionTypes {
  heading: string
  id: string
  Component: ComponentType
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
  }
]
