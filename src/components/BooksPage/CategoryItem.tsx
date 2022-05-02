import { FC } from 'react';

import { setSelectedCategory } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';
import { useCategories } from '@/hooks/categories';

/**
 * all categories only appears in favorite tab
 */
const CategoryItem: FC = () => {
  const { selectedCategory, activeTab } = useAppSelector((state) => state.book);
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
      <form className="gap-x-2 items-center mb-10 carousel">
        {activeTab === 'favorite' && (
          <label className="input-pill__container">
            <input
              type="radio"
              name="category"
              className="peer"
              checked={selectedCategory === null}
              onChange={() => dispatch(setSelectedCategory(null))}
            />
            <div className="input-pill__item">🎧 All Categories</div>
          </label>
        )}

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
      </form>
    </div>
  );
};

export default CategoryItem;
