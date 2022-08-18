import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      className="lg:block"
      main={
        <div className="mt-n30">
          <Profile />
          <div className="vstack gap-8 lg:p-8 p-4 pt-6">
            <Stories
              posts={posts}
              title="最新の記事"
              icon={<RiChatNewLine />}
            />
          </div>
          <Link href="/posts/page/1" passHref>
            <a className="button">記事一覧へ</a>
          </Link>
        </div>
      }
    />
  );
};
