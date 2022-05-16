import { FC } from 'react';

import { setSearch } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

const SearchItem: FC<{ className?: string }> = ({ className }) => {
  const { search } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  return (
    <div className={`input-group ${className}`}>
      <input
        id="search-book-input"
        type="text"
        placeholder="Search for books"
        value={search}
        onInput={(e) => dispatch(setSearch(e.currentTarget.value))}
        className="w-full bg-gray-200 input input-bordered text-base-100 text-opacity-50"
        title="Search for books"
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
