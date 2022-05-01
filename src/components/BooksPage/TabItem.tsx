import { Dispatch, FC, SetStateAction } from 'react';

export type TabEnum = 'books' | 'favorite';

type TabItemType = {
  className?: string;
  activeTab: TabEnum;
  setActiveTab: Dispatch<SetStateAction<TabEnum>>;
};

const TabItem: FC<TabItemType> = ({ className, activeTab, setActiveTab }) => {
  return (
    <div className={`tabs ${className}`}>
      <a
        onClick={() => setActiveTab('books')}
        className={`text-base-100 tab-lg tab tab-bordered ${
          activeTab === 'books' && 'tab-active'
        }`}
      >
        Books
      </a>
      <a
        onClick={() => setActiveTab('favorite')}
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
