import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType, BookType } from '@types';

export interface BookState {
  selectedCategory: CategoryType | null;
  selectedBook: BookType | null;
}

const initialState: BookState = {
  selectedCategory: null,
  selectedBook: null,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSelectedBook(state, action: PayloadAction<BookType | null>) {
      state.selectedBook = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<CategoryType | null>) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedBook, setSelectedCategory } = bookSlice.actions;
export default bookSlice.reducer;
