import { useRouter } from 'next/router';
import { RiChatNewLine } from 'react-icons/ri';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Pagination } from '@/components/features/story/Pagination';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => {
  const page = Number(useRouter().query.page);

  return (
    <MainLayout
      className="lg:block"
      main={
        <div className="lg:block vstack gap-8 lg:p-8 p-4 pt-6">
          <Stories posts={posts} title="記事一覧" icon={<RiChatNewLine />} />
          <br />
          <br />
          <Pagination count={maxPage} page={page} />
        </div>
      }
    />
  );
};
