import { FC } from 'react';

import Link from 'next/link';

import { setSelectedBook } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

import ImageItem from './ImageItem';

const DetailItem: FC<{
  className?: string;
}> = ({ className }) => {
  const { selectedBook } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`flex  flex-col p-3 px-6 lg:w-96 bg-gradient-to-b bg-base-100 from-base-100 to-base-300 ${
        !selectedBook
          ? 'hidden lg:translate-x-full'
          : 'absolute lg:relative right-0 w-full left-0'
      }${className} `}
    >
      <h3 className="mt-4 text-xl text-center">About The Book</h3>
      <div className="my-4 divider">&apos;&apos;</div>
      <div className="flex relative justify-center mx-9">
        <ImageItem
          className="w-full sm:w-48 lg:w-full"
          src={selectedBook?.coverUrl ?? '/'}
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-x-4 justify-center mt-3">
          <small>📃 {selectedBook?.sections?.length ?? 0} Chapters</small>
          <small>
            ⏰{Math.round((selectedBook?.audio_length ?? 0) / 60)} Min
          </small>
        </div>
        <h5 className="mt-4 text-lg text-center">{selectedBook?.title}</h5>
        <small className="block mb-5 text-center text-base-content/70">
          {selectedBook?.authors?.map((author) => author).join(', ')}
        </small>
        <p className="text-sm line-clamp-3 md:line-clamp-5 text-base-content/60">
          {selectedBook?.description}
        </p>
      </div>

      <div className="flex flex-col gap-x-4 justify-center mb-10 md:flex-row">
        <Link href={`/books/${selectedBook?.id}`} passHref>
          <a className="mt-3 w-full rounded-full md:w-60 lg:w-full btn btn-primary">
            Read
          </a>
        </Link>
        <button
          onClick={() => dispatch(setSelectedBook(null))}
          className="mt-3 w-full rounded-full md:w-60 lg:hidden btn btn-primary btn-outline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailItem;
