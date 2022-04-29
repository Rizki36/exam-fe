import ImageItem from '@/components/BooksPage/ImageItem';
import Container from '@/components/Container';
import { Page } from '@types';

const Books: Page = () => {
  return (
    <div className="overflow-y-hidden !pr-0">
      <div className="flex h-screen">
        <Container className="overflow-y-scroll py-5 w-full">
          <div className="flex justify-between">
            <div className="mb-10 tabs">
              <a className="text-base-100 tab-lg !border-base-100 tab tab-bordered tab-active">
                Books
              </a>
              <a className="text-base-100 tab-lg tab tab-bordered">Favorite</a>
            </div>

            <div className="w-fit input-group">
              <input
                type="text"
                placeholder="Search…"
                className="bg-gray-200 input input-bordered text-base-100 text-opacity-50"
              />
              <button className="bg-gray-200 border-none text-opacity-50 btn btn-square text-base-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-4 gap-x-12 gap-y-10">
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
        </Container>

        <div className="flex flex-col p-3 px-6 w-96 bg-gradient-to-b bg-base-100 from-base-100 to-base-300">
          <h3 className="mt-4 text-xl text-center">About The Book</h3>
          <div className="my-4 divider">&apos;&apos;</div>
          <div className="relative mx-9">
            <ImageItem src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png" />
          </div>
          <div className="flex-1">
            <h5 className="mt-4 text-lg text-center">
              The Intelligent Investor
            </h5>
            <small className="block mb-5 text-center text-base-content/70">
              Benjamin Graham
            </small>
            <p className="text-sm line-clamp-5 text-base-content/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus voluptatum vero explicabo ad dignissimos, corporis
              quos aperiam dolorum quae eius fugiat id soluta, libero eum
              tempore officiis unde accusantium quibusdam? Molestias est odit
              omnis! Esse maxime ipsam, placeat eius vel accusantium harum?
              Quibusdam, facere quod provident tenetur sapiente, quae sit
              expedita dolorem quas corrupti aspernatur atque praesentium
              similique dolores. Molestiae voluptatibus quis consequuntur
              repellendus nemo deleniti voluptate delectus. Veniam
              exercitationem sunt commodi, possimus non labore, molestias dicta
              ut velit dignissimos voluptas deleniti quos perferendis aliquam
              laudantium. Provident delectus voluptatem ad perspiciatis
              consequatur dolores tempora sunt incidunt iusto quod pariatur
              commodi deleniti fugiat, totam repellendus dolorum sint voluptatum
              ex porro sequi aperiam quam veritatis reprehenderit! Dolorum ea
              doloremque nihil itaque asperiores consequatur voluptatibus saepe,
              repudiandae sed quidem blanditiis inventore ullam facilis
              veritatis, dolore in unde fugit, praesentium labore esse? Fuga
              quas aut dicta consequatur beatae quasi labore ratione eius quod
              porro? Possimus doloribus consequuntur amet temporibus unde,
              accusantium quidem earum repellat magnam, autem, reprehenderit
              fuga maxime? Corrupti, aspernatur mollitia? Error praesentium
              officiis aliquam officia nam accusantium, dicta dolore nulla
              cupiditate obcaecati, deleniti illum saepe itaque quisquam quaerat
              delectus maiores facilis! Praesentium beatae earum ullam cumque
              quaerat mollitia commodi! Nisi, accusantium facere.
            </p>
          </div>

          <button className="mb-10 w-full rounded-full btn btn-primary">
            Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
