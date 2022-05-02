const BookItemLoading = () => {
  return (
    <div className="book-item__layout">
      {[...Array(20)].map((_, index) => (
        <label key={index} className="book-item__outer-container">
          <div className="book-item__inner-container">
            <div className="aspect-[2/3] rounded-xl animate-pulse bg-base-100/20"></div>
            <div className="mt-1 ml-2 w-3/4 h-3 rounded animate-pulse bg-base-100/20"></div>
            <div className="mt-1 ml-2 w-2/3 h-3 rounded animate-pulse bg-base-100/20"></div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default BookItemLoading;
