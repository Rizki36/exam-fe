import { ArrowLeftIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

const BookDetailsPage = () => {
  return (
    <div className="grid grid-cols-4 py-6 px-10">
      <div className="flex col-span-4 items-center mb-10 text-base-100">
        <Link href={'/books'} passHref>
          <a className="flex items-center">
            <button className="mr-3 btn btn-sm btn-square btn-ghost">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <span className="text-lg text-base-100">Back</span>
          </a>
        </Link>
      </div>
      <div>
        <div className="aspect-[2/3] overflow-hidden relative w-full rounded-lg">
          <Image
            className="rounded-md"
            layout="fill"
            objectFit="contain"
            src={
              'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png'
            }
            alt="Booku"
          />
        </div>
        <div className="flex justify-center mt-3 text-base-100">
          <small>📃 8 Chapters</small> &nbsp; &nbsp; &nbsp;{' '}
          <small>⏰ 16 Min</small>
        </div>

        <div className="flex gap-x-3 justify-center px-4 mt-10">
          <button className="flex-1 btn">🎧 Listen</button>
          <button className="flex-1 btn">🎧 Read</button>
        </div>
      </div>
      <div className="col-span-3 p-8 py-3 text-base-100">
        <h1 className="text-xl font-bold">The Intelligent Investor</h1>
        <h4 className="text-lg">Benjamin Graham</h4>
        <div className="mt-7">
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

          {[...Array(8)].map((i) => (
            <div
              key={i}
              tabIndex={0}
              className="collapse collapse-arrow border-base-300 rounded-box"
            >
              <div className="text-xl font-medium collapse-title">
                Section {i}
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quisquam, nesciunt vel soluta aspernatur officia
                  debitis reprehenderit facilis harum dicta quis nam blanditiis
                  eveniet numquam ratione vero, nisi officiis possimus at quam.
                  Modi aspernatur sed quaerat illo nesciunt, enim minus vel
                  saepe est odit, beatae quae atque? Odio omnis beatae tenetur
                  adipisci illo explicabo! Consequuntur quisquam reiciendis eum
                  praesentium laborum distinctio error dicta aut? At pariatur
                  dolor quam dicta doloremque eveniet provident, itaque
                  asperiores magnam omnis distinctio reprehenderit magni quidem
                  totam molestiae, dolore libero, quo iste sint! Eos delectus,
                  molestiae ipsum vel maxime quaerat facere doloremque sunt
                  suscipit! Temporibus, eos!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
