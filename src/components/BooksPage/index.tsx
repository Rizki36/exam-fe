import { useState } from 'react';

import { useAppSelector } from '@/configs/redux/hooks';
import { useBooks } from '@/hooks/books';

import Container from '../Container';
import BookItem from './BookItem';
import CategoryItem from './CategoryItem';
import DetailItem from './DetailItem';
import NoCategorySelectedItem from './NoCategorySelectedItem';
import PaginationItem from './PaginationItem';
import SearchItem from './SearchItem';
import TabItem, { TabEnum } from './TabItem';

const BooksPage = () => {
  const {
    selectedCategory,
    favorite: favoriteBooks,
    page,
  } = useAppSelector((state) => state.book);

  const { books, isLoading } = useBooks(selectedCategory?.id, page);
  const [activeTab, setActiveTab] = useState<TabEnum>('books');

  return (
    <div className="overflow-hidden !pr-0">
      <div className="flex lg:h-screen">
        <Container className="overflow-x-hidden overflow-y-scroll py-5 w-full">
          <div className="flex flex-col justify-between mb-10 lg:flex-row">
            <TabItem
              className={'w-full'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <SearchItem className={'mt-8 w-full lg:w-fit'} />
          </div>

          {activeTab === 'favorite' && <BookItem books={favoriteBooks ?? []} />}

          {activeTab === 'books' && <CategoryItem />}
          {activeTab === 'books' &&
            (selectedCategory ? (
              <>
                {isLoading ? (
                  <>Loading</>
                ) : (
                  <>
                    <BookItem books={books ?? []} />
                    <PaginationItem />
                  </>
                )}
              </>
            ) : (
              <NoCategorySelectedItem />
            ))}

          {/* pagination only show in book tab */}
        </Container>

        <DetailItem />
      </div>
    </div>
  );
};

export default BooksPage;
