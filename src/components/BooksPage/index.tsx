import { useState } from 'react';

import { useAppSelector } from '@/configs/redux/hooks';
import { BookType } from '@types';

import Container from '../Container';
import BookItem from './BookItem';
import CategoryItem from './CategoryItem';
import DetailItem from './DetailItem';
import NoCategorySelectedItem from './NoCategorySelectedItem';
import PaginationItem from './PaginationItem';
import SearchItem from './SearchItem';
import TabItem, { TabEnum } from './TabItem';

const BooksPage = () => {
  const { selectedCategory, favorite: favoriteBooks } = useAppSelector(
    (state) => state.book
  );
  const [activeTab, setActiveTab] = useState<TabEnum>('books');

  const dummyBooks: BookType[] = [...Array(10)].map((_, i) => ({
    id: i + 1,
    title: `Book ${i + 1}`,
    audio_length: 340,
    authors: ['Author 1', 'Author 2'],
    categoryId: 1,
    coverUrl:
      'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
  mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Repellendus voluptatum vero explicabo ad dignissimos, corporis quos
  aperiam dolorum quae eius fugiat id soluta, libero eum tempore
  officiis unde accusantium quibusdam? Molestias est odit omnis! Esse
  maxime ipsam, placeat eius vel accusantium harum? Quibusdam, facere
  quod provident tenetur sapiente, quae sit expedita dolorem quas
  corrupti aspernatur atque praesentium similique dolores. Molestiae
  voluptatibus quis consequuntur repellendus nemo deleniti voluptate
  delectus. Veniam exercitationem sunt commodi, possimus non labore,
  molestias dicta ut velit dignissimos voluptas deleniti quos
  perferendis aliquam laudantium. Provident delectus voluptatem ad
  perspiciatis consequatur dolores tempora sunt incidunt iusto quod
  pariatur commodi deleniti fugiat, totam repellendus dolorum sint
  voluptatum ex porro sequi aperiam quam veritatis reprehenderit!
  Dolorum ea doloremque nihil itaque asperiores consequatur voluptatibus
  saepe, repudiandae sed quidem blanditiis inventore ullam facilis
  veritatis, dolore in unde fugit, praesentium labore esse? Fuga quas
  aut dicta consequatur beatae quasi labore ratione eius quod porro?
  Possimus doloribus consequuntur amet temporibus unde, accusantium
  quidem earum repellat magnam, autem, reprehenderit fuga maxime?
  Corrupti, aspernatur mollitia? Error praesentium officiis aliquam
  officia nam accusantium, dicta dolore nulla cupiditate obcaecati,
  deleniti illum saepe itaque quisquam quaerat delectus maiores facilis!
  Praesentium beatae earum ullam cumque quaerat mollitia commodi! Nisi,
  accusantium facere.`,
    sections: [{ title: 'Intro', content: 'Lorem ipsum dolor sit amet' }],
  }));

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
                <BookItem books={dummyBooks} />
                <PaginationItem />
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
