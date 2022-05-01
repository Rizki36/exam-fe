import { useState } from 'react';

import {
  ChevronLeftIcon,
  ShareIcon,
  StarIcon as StarIconOutline,
} from '@heroicons/react/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';

import { useAppSelector } from '@/configs/redux/hooks';

const BookDetailsPage = () => {
  const { selectedBook } = useAppSelector((state) => state.book);

  const [isFavorite, setFavorite] = useState(false);

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

        <div className="flex gap-x-3 justify-center px-4 mt-10">
          <button className="flex-1 btn">🎧 Listen</button>
          <button className="flex-1 btn">📖 Read</button>
        </div>
      </div>

      <div className="col-span-4 p-1 py-3 mt-10 lg:col-span-3 lg:px-8 lg:mt-0 text-base-100">
        <div>
          <h1 className="text-xl font-bold text-center lg:text-left">
            {selectedBook?.title}
          </h1>
          <h4 className="text-lg text-center lg:text-left">
            {selectedBook?.description}
          </h4>
        </div>

        <div className="my-5">
          <button className="btn btn-ghost">
            <ShareIcon className="w-6 h-6" />
            &nbsp; Share
          </button>

          <button
            className="btn btn-ghost"
            onClick={() => setFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <StarIconSolid className="w-6 h-6" />
            ) : (
              <StarIconOutline className="w-6 h-6" />
            )}
            &nbsp; Favorite
          </button>
        </div>

        <div>
          <h1 className="mb-1 text-xl font-medium">What&apos;s it about ?</h1>
          <p>
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
            Dolorum ea doloremque nihil itaque asperiores consequatur
            voluptatibus saepe, repudiandae sed quidem blanditiis inventore
            ullam facilis veritatis, dolore in unde fugit, praesentium labore
            esse? Fuga quas aut dicta consequatur beatae quasi labore ratione
            eius quod porro? Possimus doloribus consequuntur amet temporibus
            unde, accusantium quidem earum repellat magnam, autem, reprehenderit
            fuga maxime? Corrupti, aspernatur mollitia? Error praesentium
            officiis aliquam officia nam accusantium, dicta dolore nulla
            cupiditate obcaecati, deleniti illum saepe itaque quisquam quaerat
            delectus maiores facilis! Praesentium beatae earum ullam cumque
            quaerat mollitia commodi! Nisi, accusantium facere.
          </p>
        </div>

        <div className="my-8">
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
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
