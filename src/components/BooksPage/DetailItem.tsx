import { Dispatch, FC, SetStateAction } from 'react';

import Link from 'next/link';

import ImageItem from './ImageItem';

const DetailItem: FC<{
  className?: string;
  book: number | null;
  setBook: Dispatch<SetStateAction<number | null>>;
}> = ({ className, book, setBook }) => {
  console.log(book);
  return (
    <div
      className={`flex-col p-3 px-6 w-96 bg-gradient-to-b bg-base-100 from-base-100 to-base-300 ${
        !book ? 'hidden' : 'flex absolute right-0 !w-full left-0'
      } lg:flex ${className} `}
    >
      <h3 className="mt-4 text-xl text-center">About The Book</h3>
      <div className="my-4 divider">&apos;&apos;</div>
      <div className="relative mx-9">
        <ImageItem src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png" />
      </div>
      <div className="flex-1">
        <div className="flex justify-center mt-3">
          <small>📃 8 Chapters</small> &nbsp; &nbsp; &nbsp;{' '}
          <small>⏰ 16 Min</small>
        </div>
        <h5 className="mt-4 text-lg text-center">The Intelligent Investor</h5>
        <small className="block mb-5 text-center text-base-content/70">
          Benjamin Graham
        </small>
        <p className="text-sm line-clamp-3 md:line-clamp-5 text-base-content/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
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
          accusantium facere.
        </p>
      </div>

      <div className="mb-10">
        <Link href={'/books/1'} passHref>
          <a className="mt-3 w-full rounded-full btn btn-primary">Read</a>
        </Link>
        <button
          onClick={() => setBook(null)}
          className="mt-3 w-full rounded-full lg:hidden btn btn-primary btn-outline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailItem;
