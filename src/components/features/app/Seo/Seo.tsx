import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { useRootPath } from '@/hooks/useRootPath';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const rootPath = useRootPath();
  const imageURL = joinPath(ROOT_URL, '/assets/author.png');

  return (
    <>
      <DefaultSeo
        defaultTitle="Yuki's Blog"
        description="WebエンジニアYukiのポートフォリオブログです。"
        openGraph={{
          type: 'website',
          title: "Yuki's Blog",
          description: 'blog',
          site_name: "Yuki's Blog",
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        //ここを変えることでファビコンのサイズの設定が可能
        additionalLinkTags={[
          { rel: 'icon', href: `${rootPath}/favicon.ico` },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${rootPath}/favicons/favicon.ico`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${rootPath}/favicons/favicon.ico`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${rootPath}/favicons/favicon.ico`,
          },
          {
            rel: 'mask-icon',
            href: `${rootPath}/favicons/favicon.ico`,
            color: '#5bbad5',
          },
        ]}
      />
    </>
  );
};
