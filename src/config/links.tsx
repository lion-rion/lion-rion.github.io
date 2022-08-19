import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiTag } from 'react-icons/fi';
import { LinkType } from '@/types/link';
//import { GrAchievement } from 'react-icons/gr';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';

export const links: LinkType[] = [
  { name: 'Home', href: '/', icon: <AiOutlineHome /> },
  { name: 'About', href: '/about', icon: <AiOutlineInfoCircle /> },
  { name: 'Blog', href: '/posts/page/1/', icon: <CgNotes /> },
  { name: 'Tags', href: '/tags', icon: <FiTag /> },
];
