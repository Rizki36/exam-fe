import { FC } from 'react';

import { setSelectedBook } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';
import { BookType } from '@/types';

import EmptyItem from './EmptyItem';
import ImageItem from './ImageItem';

const BookItem: FC<{ books: BookType[] }> = ({ books }) => {
  const { selectedBook } = useAppSelector((state) => state.book);

  const dispatch = useAppDispatch();

  if (!books.length) return <EmptyItem />;

  return (
    <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 xl:gap-x-8">
      {books.map((book) => (
        <label
          key={`${book.id}${book.category_id}`}
          className="relative cursor-pointer select-none text-base-100"
        >
          <input
            type="radio"
            name="book"
            className="peer hidden"
            checked={book.id === selectedBook?.id}
            onClick={() => {
              if (book.id === selectedBook?.id) dispatch(setSelectedBook(null));
              else dispatch(setSelectedBook(book));
            }}
            onChange={() => {}}
          />
          <div className="py-3 px-4 rounded-lg transition-all peer-checked:bg-base-100/90 peer-checked:text-base-content">
            <ImageItem src={book.cover_url ?? '/'} />
            <h4 className="line-clamp-1">{book.title}</h4>
            <p className="text-sm opacity-80">{book.authors.join(', ')}</p>
          </div>
        </label>
      ))}
    </div>
  );
};

export default BookItem;
