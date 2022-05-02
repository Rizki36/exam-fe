import { useAppSelector } from '@/configs/redux/hooks';

const SectionsItem = () => {
  const { selectedBook } = useAppSelector((state) => state.book);

  return (
    <section className="my-8">
      <h1 className="mb-1 text-xl font-medium">What&apos;s inside ?</h1>

      {selectedBook?.sections?.map((section) => (
        <div
          key={section.title}
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 rounded-box"
        >
          <div className="text-xl font-medium collapse-title">
            {section.title}
          </div>
          <div className="collapse-content">
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionsItem;
