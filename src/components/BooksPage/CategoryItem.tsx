import { Dispatch, FC, SetStateAction } from 'react';

const CategoryItem: FC<{
  categoryId: number | null;
  setCategoryId: Dispatch<SetStateAction<number | null>>;
}> = ({ categoryId, setCategoryId }) => {
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
              checked={categoryId === i + 1}
              onChange={() => setCategoryId(i + 1)}
            />
            <div className="py-2 px-3 rounded-full border peer-checked:bg-base-100 peer-checked:text-base-content">
              🎧 Music
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
