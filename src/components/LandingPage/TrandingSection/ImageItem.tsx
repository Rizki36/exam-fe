import { FC } from 'react';

import Image from 'next/image';

const ImageItem: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="aspect-[2/3] overflow-hidden relative mx-3 h-32 rounded-lg lg:h-96">
      <Image
        className="rounded-md"
        layout="fill"
        objectFit="contain"
        src={src}
        alt="Booku"
      />
    </div>
  );
};

export default ImageItem;
