import { FC } from 'react';

import { setActiveTab } from '@/configs/redux/bookSlice';
import { useAppDispatch, useAppSelector } from '@/configs/redux/hooks';

export type TabEnum = 'books' | 'favorite';

type TabItemType = {
  className?: string;
};

const TabItem: FC<TabItemType> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.book);

  return (
    <div className={`tabs ${className}`}>
      <a
        onClick={() => dispatch(setActiveTab('books'))}
        className={`text-base-100 tab-lg tab tab-bordered ${
          activeTab === 'books' && 'tab-active'
        }`}
      >
        Books
      </a>
      <a
        onClick={() => dispatch(setActiveTab('favorite'))}
        className={`text-base-100 tab-lg tab tab-bordered ${
          activeTab === 'favorite' && 'tab-active'
        }`}
      >
        Favorite
      </a>
    </div>
  );
};

export default TabItem;
