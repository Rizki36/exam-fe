import { FC } from 'react';

import Image from 'next/image';

const ImageItem: FC<{ src: string; className?: string }> = ({
  src,
  className,
}) => {
  return (
    <div
      className={`aspect-[2/3] overflow-hidden relative rounded-lg ${className}`}
    >
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
