import { useState } from 'react';

import BookItem from '@/components/BooksPage/BookItem';
import CategoryItem from '@/components/BooksPage/CategoryItem';
import DetailItem from '@/components/BooksPage/DetailItem';
import PaginationItem from '@/components/BooksPage/PaginationItem';
import SearchItem from '@/components/BooksPage/SearchItem';
import TabItem, { TabEnum } from '@/components/BooksPage/TabItem';
import Container from '@/components/Container';
import { Page } from '@types';

const Books: Page = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>('books');
  const [page, setPage] = useState(1);

  const [categoryId, setCategoryId] = useState<number | null>(null);

  return (
    <div className="overflow-y-hidden !pr-0">
      <div className="flex lg:h-screen">
        <Container className="overflow-y-scroll py-5 w-full">
          <div className="flex flex-col justify-between mb-10 lg:flex-row">
            <TabItem
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              className={'w-full'}
            />
            <SearchItem className={'mt-8 w-full lg:w-fit'} />
          </div>

          <CategoryItem setCategoryId={setCategoryId} categoryId={categoryId} />

          {categoryId ? (
            <>
              <BookItem />
              <div className="flex justify-center mt-16 w-full">
                <PaginationItem
                  page={page}
                  back={() => setPage(page - 1)}
                  next={() => setPage(page + 1)}
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center h-96 text-base-100">
              <div className="mb-1 text-5xl">😉</div>
              <div className="text-xl font-bold">Category not selected</div>
              <div className="">Please Select a Category</div>
            </div>
          )}
        </Container>

        <DetailItem className="hidden lg:flex" />
      </div>
    </div>
  );
};

export default Books;
