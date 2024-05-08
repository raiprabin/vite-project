import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DateObject, Value } from 'react-multi-date-picker';
import { SliceActions } from '../../utils/types';

export interface ListingFiltersState {
  date: Value;
  show_count: number;
  current_page: number;
  search_keyword: string;
}

export const initialListingFilters: ListingFiltersState = {
  date: [
    new DateObject().subtract(7, 'days').format('MMM DD, YYYY'),
    new DateObject().format('MMM DD, YYYY'),
  ],
  current_page: 1,
  search_keyword: '',
  show_count: 25,
};

export const ListingFiltersSlice = createSlice({
  name: 'listing-filters',
  initialState: initialListingFilters,
  reducers: {
    setDateFilter: (state, action: PayloadAction<Value>) => {
      state.date = action.payload;
    },
    setShowCountFilter: (state, action: PayloadAction<number>) => {
      state.show_count = action.payload;
    },
    setCurrentPageFilter: (state, action: PayloadAction<number>) => {
      state.current_page = action.payload;
    },
    goToPreviousPageFilter: (state) => {
      state.current_page > 1 && state.current_page--;
    },
    goToNextPageFilter: (state, action: PayloadAction<number>) => {
      state.current_page < action.payload && state.current_page++;
    },
    goToPageOneFilter: (state) => {
      state.current_page = 1;
    },
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.search_keyword = action.payload;
    },
  },
});

export const {
  setDateFilter,
  setCurrentPageFilter,
  setSearchKeyword,
  setShowCountFilter,
  goToNextPageFilter,
  goToPreviousPageFilter,
  goToPageOneFilter,
} = ListingFiltersSlice.actions;

export type ListingFiltersActionsTypes = SliceActions<
  typeof ListingFiltersSlice.actions
>;

export const listingFiltersReducer = ListingFiltersSlice.reducer;
