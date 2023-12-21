import { MetadataRoute } from 'next';

import { themes } from 'styles/colors';
import { title, metaDescription } from 'constants/resume';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: title,
    short_name: title,
    description: metaDescription,
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
