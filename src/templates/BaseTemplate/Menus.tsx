import { FC } from 'react';

import { HomeIcon, BookOpenIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Menus: FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={`p-2 menu bg-base-100 rounded-box ${className}`}>
      <li>
        <Link href={'/'}>
          <a>
            <HomeIcon className="w-6 h-6" />
            Landing Page
          </a>
        </Link>
      </li>
      <li>
        <Link href={'/books'}>
          <a>
            <BookOpenIcon className="w-6 h-6" />
            Books
          </a>
        </Link>
      </li>
      {/* <li>
        <a>
          <ViewGridIcon className="w-6 h-6" />
          Book Categories
        </a>
      </li> */}
    </ul>
  );
};

export default Menus;
