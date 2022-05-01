import { FC, useState } from 'react';

const PaginationItem: FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="btn-group">
      <button
        onClick={() => {
          // prevent back
          if (page > 1) setPage(page - 1);
        }}
        className="btn"
      >
        «
      </button>
      <button className="btn">Page {page}</button>
      <button onClick={() => setPage(page + 1)} className="btn">
        »
      </button>
    </div>
  );
};

export default PaginationItem;
