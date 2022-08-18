import { Home } from '@/components/pages/home';
import { getAllPosts } from '@/lib/api';

type Props = React.ComponentPropsWithoutRef<typeof Home>;

const View: React.VFC<Props> = (props: Props) => <Home {...props} />;

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'tags', //tagsを追加
    'slug',
    'coverImage',
    'excerpt',
  ]).slice(0, 4); // メインページの最大の記事数

  return {
    props: { posts },
  };
};
