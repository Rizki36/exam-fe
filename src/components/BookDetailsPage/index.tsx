import { ChevronLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { useAppSelector } from '@/configs/redux/hooks';

import FavoriteItem from '../FavoriteItem';
import DescriptionItem from './DescriptionItem';
import ImageItem from './ImageItem';
import SectionsItem from './SectionsItem';
import SectionsNAudioItem from './SectionsNAudioItem';

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
        <ImageItem />

        <SectionsNAudioItem className="text-base-100" />

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

        <DescriptionItem />

        <SectionsItem />
      </div>
    </div>
  );
};

export default BookDetailsPage;
