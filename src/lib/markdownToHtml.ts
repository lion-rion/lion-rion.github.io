import rehypePrism from '@mapbox/rehype-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remark from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(html)
    .use(gfm)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
