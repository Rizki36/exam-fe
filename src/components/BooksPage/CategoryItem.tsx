import { FC } from 'react';

import { setSelectedCategory } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';
import { useCategories } from '@/hooks/categories';

const CategoryItem: FC = () => {
  const { selectedCategory } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const { categories } = useCategories();

  return (
    <div className="text-base-100">
      <div className="mb-3 text-lg">Category</div>
      <div className="gap-x-2 items-center mb-10 carousel">
        {categories &&
          categories.map(({ id, name }) => (
            <label
              key={id}
              className="relative text-sm cursor-pointer select-none carousel-item text-base-100"
            >
              <input
                type="radio"
                name="category"
                className="peer hidden"
                checked={selectedCategory?.id === id}
                onChange={() =>
                  dispatch(
                    setSelectedCategory({
                      id,
                      name,
                    })
                  )
                }
              />
              <div className="py-2 px-3 rounded-full border peer-checked:bg-base-100 peer-checked:text-base-content">
                🎧 {name}
              </div>
            </label>
          ))}
      </div>
    </div>
  );
};

export default CategoryItem;
