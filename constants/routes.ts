export interface RouteTypes {
  label: string
  location: string
}

interface Routes {
  about: RouteTypes
  experience: RouteTypes
  qualifications: RouteTypes
  projects: RouteTypes
  contact: RouteTypes
}

export const routes: Routes = {
  about: {
    label: 'About',
    location: 'about'
  },
  experience: {
    label: 'Experience',
    location: 'experience'
  },
  qualifications: {
    label: 'Qualifications',
    location: 'qualifications'
  },
  projects: {
    label: 'Projects',
    location: 'projects'
  },
  contact: {
    label: 'Contact',
    location: 'contact'
  }
}
