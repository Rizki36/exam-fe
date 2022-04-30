import { FC } from 'react';

const PaginationItem: FC<{
  page: number;
  back: () => any;
  next: () => any;
}> = ({ back, next, page }) => {
  return (
    <div className="btn-group">
      <button
        onClick={() => {
          if (page > 1) back();
        }}
        className="btn"
      >
        «
      </button>
      <button className="btn">Page {page}</button>
      <button onClick={next} className="btn">
        »
      </button>
    </div>
  );
};

export default PaginationItem;
