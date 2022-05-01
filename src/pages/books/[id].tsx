import { ChevronLeftIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

import FavoriteItem from '@/components/BooksPage/FavoriteItem';
import { useAppSelector } from '@/configs/redux/hooks';

const BookDetailsPage = () => {
  const { selectedBook } = useAppSelector((state) => state.book);

  return (
    <div className="grid grid-cols-4 py-6 px-8  lg:gap-y-0 ">
      <div className="flex col-span-4 items-center mb-10 text-base-100">
        <Link href={'/books'} passHref>
          <a className="mr-3 btn btn-sm btn-ghost">
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="ml-3 text-sm text-base-100">Back</span>
          </a>
        </Link>
      </div>
      <div className="col-span-4 lg:col-span-1">
        <div className="aspect-[2/3] overflow-hidden relative w-full rounded-lg">
          <Image
            className="rounded-md"
            layout="fill"
            objectFit="contain"
            src={selectedBook?.coverUrl ?? '/'}
            alt="Booku"
          />
        </div>
        <div className="flex gap-x-4 justify-center mt-3 text-base-100">
          <small>📃 {selectedBook?.sections?.length ?? 0} Chapters</small>
          <small>
            ⏰{Math.round((selectedBook?.audio_length ?? 0) / 60)} Min
          </small>
        </div>

        <FavoriteItem />

        <div className="flex gap-x-3 justify-center px-4 mt-5">
          <button className="flex-1 btn">🎧 Listen</button>
          <button className="flex-1 btn">📖 Read</button>
        </div>
      </div>

      <div className="col-span-4 p-1 py-3 mt-10 lg:col-span-3 lg:px-8 lg:mt-0 text-base-100">
        <h1 className="mb-8 text-xl font-bold text-center lg:text-left">
          {selectedBook?.title}
        </h1>

        <section>
          <h1 className="mb-1 text-xl font-medium">What&apos;s it about ?</h1>
          <p>{selectedBook?.description}</p>
        </section>

        <section className="my-8">
          <h1 className="mb-1 text-xl font-medium">What&apos;s inside ?</h1>

          {selectedBook?.sections?.map((section) => (
            <div
              key={section.title}
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 rounded-box"
            >
              <div className="text-xl font-medium collapse-title">
                {section.title}
              </div>
              <div className="collapse-content">
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BookDetailsPage;
