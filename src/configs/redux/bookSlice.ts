import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType, BookType } from '@/types';

export interface BookState {
  search: string;
  page: number;
  selectedCategory: CategoryType | null;
  selectedBook: BookType | null;
  favorite: BookType[];
}

const initialState: BookState = {
  search: '',
  page: 0,
  selectedCategory: null,
  selectedBook: null,
  favorite: [],
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
      /** reset page */
      state.page = 0;
    },
    toggleFavoriteBook(state, action: PayloadAction<BookType>) {
      const curIndex = state.favorite.findIndex(
        (book) => book.id === action.payload.id
      );

      if (curIndex >= 0) state.favorite.splice(curIndex, 1);
      else state.favorite.push(action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const {
  setSelectedBook,
  setSelectedCategory,
  toggleFavoriteBook,
  setPage,
  setSearch,
} = bookSlice.actions;

export default bookSlice.reducer;
