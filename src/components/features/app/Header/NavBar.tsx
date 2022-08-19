import { Link } from '@/components/common/Link';
import { links } from '@/config/links';

export const NavBar = () => {
  return (
    <>
      {links.map(({ name, href }) => (
        <Link key={name} href={href} passHref>
          <a className="economica px-5 py-2 text-primary-1 capitalize cursor-pointer">
            {name}
          </a>
        </Link>
      ))}
    </>
  );
};
