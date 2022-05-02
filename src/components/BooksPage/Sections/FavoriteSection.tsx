import { useAppSelector } from '@/configs/redux/hooks';

import BookItem from '../BookItem';

const FavoriteSection = () => {
  const { favorite: favoriteBooks } = useAppSelector((state) => state.book);

  return <>{<BookItem books={favoriteBooks ?? []} />}</>;
};

export default FavoriteSection;
