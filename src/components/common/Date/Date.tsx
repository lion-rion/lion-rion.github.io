import { RiTimeFill } from 'react-icons/ri';
import { formatDate } from '@/lib/date';

type Props = {
  date: string;
};

export const Date: React.VFC<Props> = ({ date }) => (
  <div className="">
    <RiTimeFill />
    {formatDate(date)}
  </div>
);
