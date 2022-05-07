export const mapCategoryIdToIcon = (categoryId: number) => {
  switch (categoryId) {
    case 1:
      return '😊'; // Happiness & Mindfulness
    case 11:
      return '💼'; // Career & Business
    case 12:
      return '⌛'; // Productivity & Time Management
    case 19:
      return '⚖️'; // Society & Politics
    case 21:
      return '💹'; // Investment & Finance
    default:
      return '';
  }
};
