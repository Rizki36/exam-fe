import { FC } from 'react';

import Image from 'next/image';

const EmptyItem: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 text-base-100">
      <div className="mb-1 text-5xl">
        <Image
          src={'/assets/images/emo-cry.png'}
          alt="Emoticon Okey"
          width={70}
          height={70}
        />
      </div>
      <div className="-mt-5 text-xl font-bold">Upsss</div>
      <div className="">There are no books</div>
    </div>
  );
};

export default EmptyItem;
