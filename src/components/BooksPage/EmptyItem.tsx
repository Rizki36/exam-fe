import { FC } from 'react';

const EmptyItem: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 text-base-100">
      <div className="mb-1 text-5xl">🥲</div>
      <div className="text-xl font-bold">Upsss</div>
      <div className="">There are no books</div>
    </div>
  );
};

export default EmptyItem;
