import { useState } from 'react';

import DetailItem from '@/components/BooksPage/DetailItem';
import ImageItem from '@/components/BooksPage/ImageItem';
import PaginationItem from '@/components/BooksPage/PaginationItem';
import SearchItem from '@/components/BooksPage/SearchItem';
import TabItem, { TabEnum } from '@/components/BooksPage/TabItem';
import Container from '@/components/Container';
import { Page } from '@types';

const Books: Page = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>('books');
  const [page, setPage] = useState(1);

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

          <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-12">
            {[...Array(10)].map((i) => (
              <div key={i} className="text-base-100">
                <ImageItem
                  src={
                    'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png'
                  }
                />
                <h4 className="line-clamp-1">The Intelligent Investor</h4>
                <p className="text-sm opacity-80">Benjamin Graham</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16 w-full">
            <PaginationItem
              page={page}
              back={() => setPage(page - 1)}
              next={() => setPage(page + 1)}
            />
          </div>
        </Container>

        <DetailItem className="hidden lg:flex" />
      </div>
    </div>
  );
};

export default Books;
