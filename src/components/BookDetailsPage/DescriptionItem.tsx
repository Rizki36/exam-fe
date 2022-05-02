import { useAppSelector } from '@/configs/redux/hooks';

const DescriptionItem = () => {
  const { selectedBook } = useAppSelector((state) => state.book);

  return (
    <section>
      <h1 className="mb-1 text-xl font-medium">What&apos;s it about ?</h1>
      <p>{selectedBook?.description}</p>
    </section>
  );
};

export default DescriptionItem;
