import { FC } from 'react';

import { setSelectedBook } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

import ImageItem from './ImageItem';

const BookItem: FC = () => {
  const { selectedBook } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  return (
    <>
      {[...Array(10)].map((_, i) => (
        <label
          key={i + 1}
          className="relative cursor-pointer select-none text-base-100"
        >
          <input
            type="radio"
            name="book"
            className="peer hidden"
            checked={i + 1 === selectedBook?.id}
            onClick={() => {
              if (i + 1 === selectedBook?.id) dispatch(setSelectedBook(null));
              else
                dispatch(
                  setSelectedBook({
                    id: i + 1,
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
                    sections: [
                      { title: 'Intro', content: 'Lorem ipsum dolor sit amet' },
                    ],
                    title: `Book ${i + 1}`,
                  })
                );
            }}
            onChange={() => {}}
          />
          <div className="py-3 px-4 rounded-lg transition-all peer-checked:bg-base-100/90 peer-checked:text-base-content">
            <ImageItem
              src={
                'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png'
              }
            />
            <h4 className="line-clamp-1">The Intelligent Investor</h4>
            <p className="text-sm opacity-80">Benjamin Graham</p>
          </div>
        </label>
      ))}
    </>
  );
};

export default BookItem;
