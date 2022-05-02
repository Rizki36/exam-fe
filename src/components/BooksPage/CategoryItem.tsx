import { FC } from 'react';

import { setSelectedCategory } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';
import { useCategories } from '@/hooks/categories';

const CategoryItem: FC = () => {
  const { selectedCategory } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const { categories } = useCategories();

  /** event change handler */
  const handleChange = (id: number, name: string) => {
    dispatch(
      setSelectedCategory({
        id,
        name,
      })
    );
  };

  return (
    <div className="text-base-100">
      <div className="mb-3 text-lg">Category</div>
      <div className="gap-x-2 items-center mb-10 carousel">
        {categories &&
          categories.map(({ id, name }) => (
            <label key={id} className="input-pill__container">
              <input
                type="radio"
                name="category"
                className="peer"
                checked={selectedCategory?.id === id}
                onChange={() => handleChange(id, name)}
              />
              <div className="input-pill__item">🎧 {name}</div>
            </label>
          ))}
      </div>
    </div>
  );
};

export default CategoryItem;
