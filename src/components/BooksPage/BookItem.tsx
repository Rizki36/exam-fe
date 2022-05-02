import { FC } from 'react';

import { setSelectedBook } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';
import { BookType } from '@/types';

import EmptyItem from './EmptyItem';
import ImageItem from './ImageItem';

const BookItem: FC<{ books: BookType[] }> = ({ books }) => {
  const { selectedBook, selectedCategory, search } = useAppSelector(
    (state) => state.book
  );

  const dispatch = useAppDispatch();

  if (!books.length) return <EmptyItem />;

  const bookFiltered = books
    /** category filter */
    .filter((book) => {
      /** include all when category not selected */
      if (!selectedCategory) return true;
      return book.category_id === selectedCategory?.id;
    })
    /** search filter */
    .filter((book) => {
      /** include all when search is empty */
      if (search === '') return true;
      return book.title.toLowerCase().includes(search.toLowerCase());
    });

  if (!bookFiltered.length) return <EmptyItem />;

  return (
    <div className="book-item__layout">
      {bookFiltered.map((book) => (
        <label
          key={`${book.id}${book.category_id}`}
          className="book-item__outer-container tooltip"
          data-tip={`Title: ${book.title}, Authors: ${book.authors.join(', ')}`}
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
          <div className="book-item__inner-container">
            <ImageItem src={book.cover_url ?? '/'} />
            <h4 className="ml-3 line-clamp-1">{book.title}</h4>
            <p className="ml-3 text-sm opacity-80 line-clamp-1">
              {book.authors.join(', ')}
            </p>
          </div>
        </label>
      ))}
    </div>
  );
};

export default BookItem;
