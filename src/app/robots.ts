import { MetadataRoute } from 'next';

import { contact } from 'constants/resume';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${contact}/sitemap.xml`,
  };
}
