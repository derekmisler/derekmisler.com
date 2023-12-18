import { MetadataRoute } from 'next';

import { themes } from 'styles/colors';
import { profile } from 'constants/resume';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.title,
    short_name: profile.fullName,
    description: profile.metaDescription,
    start_url: '/',
    display: 'standalone',
    background_color: themes.dark.background,
    theme_color: themes.dark.background,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
