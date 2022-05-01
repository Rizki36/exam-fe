import { Dispatch, FC, SetStateAction } from 'react';

import ImageItem from './ImageItem';

const BookItem: FC<{
  book: number | null;
  setBook: Dispatch<SetStateAction<number | null>>;
}> = ({ book, setBook }) => {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <label key={i} className="relative select-none text-base-100">
          <input
            type="radio"
            name="book"
            className="peer hidden"
            checked={i === book}
            onClick={() => {
              if (i === book) setBook(null);
              else setBook(i);
            }}
          />
          <div className="py-3 px-4 rounded-lg transition-all peer-checked:bg-base-100/90 peer-checked:text-base-content">
            <ImageItem
              src={
                'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png'
              }
            />
            <h4 className="line-clamp-1">The Intelligent Investor</h4>
            <p className="text-sm opacity-80">Benjamin Graham</p>
          </div>
        </label>
      ))}
    </>
  );
};

export default BookItem;
