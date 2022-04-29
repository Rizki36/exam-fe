import Image from 'next/image';

import Container from '@/components/Container';
import { Page } from '@types';

const Landing: Page = () => {
  return (
    <>
      <Container className="backdrop-blur snap-y snap-mandatory">
        <div className="grid relative grid-cols-1 items-center py-20 min-h-fit snap-center lg:grid-cols-3 lg:p-0 lg:h-screen">
          <div className="flex flex-col order-2 justify-center items-center mb-24 w-full h-full lg:order-1 lg:h-full">
            <h1 className="relative text-4xl font-bold xl:text-6xl">
              New & <br className="hidden lg:inline-block" /> Tranding Book
              <div
                className="absolute -top-5 -z-10 w-14 h-14 opacity-60 blur-lg"
                style={{
                  background: 'linear-gradient(to right, #89216B, #DA4453)',
                }}
              />
            </h1>

            <div className="flex flex-col">
              <p className="my-8 w-full text-center opacity-80 text-base-content">
                Good books don’t give up all their secrets at once.
              </p>

              <div className="w-full input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="w-full input input-bordered"
                />
                <button className="bg-opacity-75 btn btn-square">
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

              <button className="self-center mt-8 w-fit btn btn-outline">
                View More &nbsp;
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto relative flex-wrap order-1 col-span-2 justify-center mt-24 mb-12 lg:order-1 lg:justify-start lg:mt-0">
            {[
              'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png',
              'https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg',
              'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/f64e0881-ec81-4f45-bdb6-3b9a51af788d.png',
            ].map((item) => (
              <div
                key={item}
                className="aspect-[2/3] overflow-hidden relative mx-3 h-32 rounded-lg lg:h-96"
              >
                <Image
                  className="rounded-md"
                  layout="fill"
                  objectFit="contain"
                  src={item}
                  alt="Booku"
                />
              </div>
            ))}
          </div>
          <div
            className="hidden absolute top-24 right-0 -z-10 w-48 h-48 rounded-full opacity-50 blur-lg lg:block"
            style={{
              background: 'linear-gradient(to right, #89216B, #DA4453)',
            }}
          />
        </div>
      </Container>
      {/* <div>
        <div className="h-56 bg-gradient-to-b to-white backdrop-blur-sm snap-center from-base-100"></div>
        <div className="h-screen bg-white">
          <Container className=""></Container>
        </div>
      </div> */}
    </>
  );
};

export default Landing;
