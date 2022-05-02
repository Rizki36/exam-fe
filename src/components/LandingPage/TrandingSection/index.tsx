import Container from '@/components/Container';
import dummy from '@/configs/dummy';

import ButtonViewMore from './ButtonViewMore';
import Decoration1 from './Decorations/Decoration1';
import Decoration2 from './Decorations/Decoration2';
import ImageItem from './ImageItem';
import QuoteItem from './QuoteItem';
import SearchItem from './SearchItem';

const TrandingSection = () => {
  return (
    <Container className="min-h-screen backdrop-blur snap-y snap-mandatory bg-base-100">
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
        <div className="relative order-1 col-span-2 mt-24 mb-12 lg:order-1 lg:justify-start lg:mt-0 carousel carousel-center">
          {dummy.map((item) => (
            <ImageItem key={item.id} {...item} />
          ))}
        </div>
        <Decoration1 />
      </div>
    </Container>
  );
};

export default TrandingSection;
