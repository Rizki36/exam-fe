import { FC } from 'react';

import {
  ShareIcon,
  StarIcon as StarIconOutline,
} from '@heroicons/react/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/solid';

import { toggleFavoriteBook } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

const FavoriteItem: FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { selectedBook, favorite: favoriteBooks } = useAppSelector(
    (state) => state.book
  );

  const isFavorite = !!favoriteBooks?.find(
    (book) => book.id === selectedBook?.id
  );

  return (
    <div className={`flex justify-center text-base-100 ${className}`}>
      <button className="btn btn-ghost">
        <ShareIcon className="w-6 h-6" />
        &nbsp; Share
      </button>

      <button
        className="btn btn-ghost"
        onClick={() =>
          selectedBook && dispatch(toggleFavoriteBook(selectedBook))
        }
      >
        {isFavorite ? (
          <StarIconSolid className="w-6 h-6" />
        ) : (
          <StarIconOutline className="w-6 h-6" />
        )}
        &nbsp; Favorite
      </button>
    </div>
  );
};

export default FavoriteItem;
