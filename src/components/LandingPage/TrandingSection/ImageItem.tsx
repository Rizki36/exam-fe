import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { setSelectedBook } from '@/configs/redux/bookSlice';
import { useAppDispatch } from '@/configs/redux/hooks';
import { BookType } from '@/types';

const ImageItem: FC<BookType> = (book) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="aspect-[2/3] overflow-hidden relative mx-3 h-32 rounded-lg hover:shadow-2xl transition scale-90 hover:scale-95 cursor-pointer lg:h-96 carousel-item"
      onClick={() => dispatch(setSelectedBook(book))}
    >
      <Link href={`/books/${book.id}`} passHref>
        <Image
          className="rounded-md"
          layout="fill"
          objectFit="contain"
          src={book.cover_url}
          alt="Booku"
        />
      </Link>
    </div>
  );
};

export default ImageItem;
