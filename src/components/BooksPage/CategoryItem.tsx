import { FC } from 'react';

import { setSelectedCategory } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

const CategoryItem: FC = () => {
  const { selectedCategory } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  return (
    <div className="text-base-100">
      <div className="mb-3 text-lg">Category</div>
      <div className="gap-x-2 items-center mb-10 carousel">
        {[...Array(30)].map((_, i) => (
          <label
            key={i + 1}
            className="relative text-sm cursor-pointer select-none carousel-item text-base-100"
          >
            <input
              type="radio"
              name="category"
              className="peer hidden"
              checked={selectedCategory?.id === i + 1}
              onChange={() =>
                dispatch(
                  setSelectedCategory({ id: i + 1, name: `Music ${i + 1}` })
                )
              }
            />
            <div className="py-2 px-3 rounded-full border peer-checked:bg-base-100 peer-checked:text-base-content">
              🎧 Music {i + 1}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
