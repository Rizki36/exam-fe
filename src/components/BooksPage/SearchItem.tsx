import { FC } from 'react';

const SearchItem: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`input-group ${className}`}>
      <input
        type="text"
        placeholder="Search…"
        className="w-full bg-gray-200 input input-bordered text-base-100 text-opacity-50"
      />
      <button className="bg-gray-200 border-none text-opacity-50 btn btn-square text-base-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchItem;
