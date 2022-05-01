import { useAppSelector } from '@/configs/redux/hooks';

import Container from '../Container';
import BookItem from './BookItem';
import CategoryItem from './CategoryItem';
import DetailItem from './DetailItem';
import EmptyStateItem from './EmptyStateItem';
import PaginationItem from './PaginationItem';
import SearchItem from './SearchItem';
import TabItem from './TabItem';

const BooksPage = () => {
  const { selectedCategory } = useAppSelector((state) => state.book);

  return (
    <div className="overflow-hidden !pr-0">
      <div className="flex lg:h-screen">
        <Container className="overflow-x-hidden overflow-y-scroll py-5 w-full">
          <div className="flex flex-col justify-between mb-10 lg:flex-row">
            <TabItem className={'w-full'} />
            <SearchItem className={'mt-8 w-full lg:w-fit'} />
          </div>

          <CategoryItem />

          {selectedCategory ? (
            <>
              <div className="grid flex-1 grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 xl:gap-x-8">
                <BookItem />
              </div>
              <div className="flex justify-center mt-16 w-full">
                <PaginationItem />
              </div>
            </>
          ) : (
            <EmptyStateItem />
          )}
        </Container>

        <DetailItem />
      </div>
    </div>
  );
};

export default BooksPage;
