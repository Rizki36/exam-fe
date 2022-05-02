import Image from 'next/image';

const NoCategorySelectedItem = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 text-base-100">
      <div className="mb-1 text-5xl">
        <Image
          src={'/assets/images/emo-okey.png'}
          alt="Emoticon Okey"
          width={70}
          height={70}
        />
      </div>
      <div className="-mt-5 text-xl font-bold">Category not selected</div>
      <div className="">Please Select a Category</div>
    </div>
  );
};

export default NoCategorySelectedItem;
