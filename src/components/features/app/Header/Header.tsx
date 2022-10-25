import React from 'react';
import { Link } from '@/components/common/Link';
import { ContentLayout } from '@/components/features/app/Layout';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Hamburger } from '../Hamburger';
import { NavBar } from './NavBar';

export const Header = () => {
  const { toggle } = useDarkMode();

  return (
    <ContentLayout className="sticky top-0 z-10 py-3 bg-primary-1 shadow-sm">
      <nav className="hstack justify-between">
        <Link href="/" passHref>
          <a className="text-primary-1 text-2xl md:text-3xl font-bold">
            Yuki&apos;s Blog
          </a>
        </Link>

        <div className="hidden lg:flex">
          <NavBar />
        </div>

        <div className="-mr-4 lg:hidden">
          <Hamburger></Hamburger>
        </div>
      </nav>
    </ContentLayout>
  );
};
