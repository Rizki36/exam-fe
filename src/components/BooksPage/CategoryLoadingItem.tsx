import { useState, useEffect } from 'react';

const CategoryLoadingItem = () => {
  const [isAppear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 500);
  }, []);

  if (!isAppear) return null;

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="input-pill__container">
          <div className="w-32 animate-pulse input-pill__item bg-base-100/20">
            {' '}
            &nbsp;
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryLoadingItem;
