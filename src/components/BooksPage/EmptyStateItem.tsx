const EmptyStateItem = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 text-base-100">
      <div className="mb-1 text-5xl">😉</div>
      <div className="text-xl font-bold">Category not selected</div>
      <div className="">Please Select a Category</div>
    </div>
  );
};

export default EmptyStateItem;
