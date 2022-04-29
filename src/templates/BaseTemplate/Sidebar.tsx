import { FC } from 'react';

import Image from 'next/image';

const Sidebar: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`flex flex-col bg-gradient-to-b from-base-100 to-base-300 bg-base-100 py-5 px-5 ${className}`}
    >
      <h1 className="text-4xl font-bold tracking-wider text-left">Booku</h1>
      <div className=" mt-5 w-56 h-full">
        <ul className="p-2 menu bg-base-100 rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Books
            </a>
          </li>
          <li>
            <a>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Book Categories
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="relative w-14 h-14 rounded-full bg-base-content">
              <Image
                src={'https://api.lorem.space/image/face?hash=33791'}
                alt="Avatar Tailwind CSS Component"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div>
            <div className="text-lg font-extrabold">Jhone Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
