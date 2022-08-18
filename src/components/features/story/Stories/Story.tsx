import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
};

export const Story = ({
  title,
  coverImage,
  date,
  tags,
  excerpt,
  slug,
}: Props) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className="card w-45 lg:w-[23%] lg:m-2.5 m-2">
        <div className="card__header">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <div className="flex">
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} passHref>
                <a className="tag hidden lg:block">{tag}</a>
              </Link>
            ))}
          </div>
          <h4 className="card__title">{title}</h4>
          <p className="card__date">{date}</p>
        </div>
      </a>
    </Link>
  );
};
