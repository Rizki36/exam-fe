import { FC } from 'react';

import { setPage } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

const PaginationItem: FC = () => {
  const { page } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center mt-16 w-full">
      <div className="btn-group">
        <button
          onClick={() => {
            // prevent back
            if (page > 0) dispatch(setPage(page - 1));
          }}
          className="btn"
        >
          «
        </button>
        <button className="btn">Page {page + 1}</button>
        <button onClick={() => dispatch(setPage(page + 1))} className="btn">
          »
        </button>
      </div>
    </div>
  );
};

export default PaginationItem;
