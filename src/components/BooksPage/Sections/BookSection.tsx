import { useAppSelector } from '@/configs/redux/hooks';
import { useBooks } from '@/hooks/books';

import BookItem from '../BookItem';
import BookItemLoading from '../BookItemLoading';
import NoCategorySelectedItem from '../NoCategorySelectedItem';
import PaginationItem from '../PaginationItem';

const BookSection = () => {
  const { selectedCategory, page } = useAppSelector((state) => state.book);
  const { books, isLoading } = useBooks(selectedCategory?.id, page);

  return (
    <>
      {selectedCategory ? (
        <>
          {isLoading ? (
            <BookItemLoading />
          ) : (
            <>
              <BookItem books={books ?? []} />
              <PaginationItem />
            </>
          )}
        </>
      ) : (
        <NoCategorySelectedItem />
      )}
    </>
  );
};

export default BookSection;
