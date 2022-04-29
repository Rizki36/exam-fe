import Container from '@/components/Container';

import ButtonViewMore from './ButtonViewMore';
import Decoration1 from './Decorations/Decoration1';
import Decoration2 from './Decorations/Decoration2';
import ImageItem from './ImageItem';
import QuoteItem from './QuoteItem';
import SearchItem from './SearchItem';

const TrandingSection = () => {
  return (
    <Container className="backdrop-blur snap-y snap-mandatory">
      <div className="grid relative grid-cols-1 items-center py-20 min-h-fit snap-center lg:grid-cols-3 lg:p-0 lg:h-screen">
        <div className="flex flex-col order-2 justify-center items-center mb-24 w-full h-full lg:order-1 lg:h-full">
          <h1 className="relative text-4xl font-bold xl:text-6xl">
            New & <br className="hidden lg:inline-block" /> Tranding Book
            <Decoration2 />
            <Decoration2 className="right-0" />
          </h1>

          <div className="flex flex-col">
            <QuoteItem />
            <SearchItem />
            <ButtonViewMore />
          </div>
        </div>
        <div className="flex overflow-x-auto relative flex-wrap order-1 col-span-2 justify-center mt-24 mb-12 lg:order-1 lg:justify-start lg:mt-0">
          {[
            'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png',
            'https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg',
            'https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/f64e0881-ec81-4f45-bdb6-3b9a51af788d.png',
          ].map((item) => (
            <ImageItem key={item} src={item} />
          ))}
        </div>
        <Decoration1 />
      </div>
    </Container>
  );
};

export default TrandingSection;
