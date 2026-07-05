import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { fullName } from '@/constants';

export async function GET(context: APIContext) {
  const site = context.site ?? new URL('https://derekmisler.com');
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  return rss({
    title: `Writing — ${fullName}`,
    description: 'Notes on CSS, frontend craft, and building for the web.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
