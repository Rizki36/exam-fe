import { useAppSelector } from '@/configs/redux/hooks';

import Container from '../Container';
import CategoryItem from './CategoryItem';
import DetailItem from './DetailItem';
import SearchItem from './SearchItem';
import BookSection from './Sections/BookSection';
import FavoriteSection from './Sections/FavoriteSection';
import TabItem from './TabItem';

const BooksPage = () => {
  const { activeTab } = useAppSelector((state) => state.book);

  return (
    <div className="overflow-hidden !pr-0">
      <div className="flex lg:h-screen">
        <Container className="overflow-x-hidden overflow-y-scroll py-5 w-full">
          <div className="flex flex-col justify-between mb-10 lg:flex-row">
            <TabItem className={'w-full'} />
            <SearchItem className={'mt-8 w-full lg:w-fit'} />
          </div>

          <CategoryItem />

          {/* pagination only appears in the book tab */}
          {activeTab === 'favorite' && <FavoriteSection />}
          {activeTab === 'books' && <BookSection />}
        </Container>

        <DetailItem />
      </div>
    </div>
  );
};

export default BooksPage;
