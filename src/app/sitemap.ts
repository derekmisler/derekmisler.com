import { MetadataRoute } from 'next';

import { contact } from 'constants/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: contact.website,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
