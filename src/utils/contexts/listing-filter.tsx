import {
  Dispatch,
  FunctionComponent,
  createContext,
  useMemo,
  useReducer,
} from 'react';
import {
  ListingFiltersActionsTypes,
  ListingFiltersState,
  initialListingFilters,
  listingFiltersReducer,
} from '../../store/slices/listing-filters';
import { Action  } from '@reduxjs/toolkit';

interface IListingFiltersCtxProps {
  listingFiltersCtx: ListingFiltersState;
  setListingFiltersCtx: Dispatch<ListingFiltersActionsTypes>;
}

const ListingFiltersContext = createContext<IListingFiltersCtxProps>({
  listingFiltersCtx: initialListingFilters,
  setListingFiltersCtx: (prevState: Action ) => prevState,
});

interface TemplateProviderProps {
  children: React.ReactNode;
}

const ListingFiltersCtxProvider: FunctionComponent<TemplateProviderProps> = ({
  children,
}) => {
  const [listingFiltersCtx, setListingFiltersCtx] = useReducer(
    listingFiltersReducer,
    initialListingFilters,
  );

  const value = useMemo(
    () => ({ listingFiltersCtx, setListingFiltersCtx }),
    [listingFiltersCtx],
  );

  return (
    <ListingFiltersContext.Provider value={value}>
      {children}
    </ListingFiltersContext.Provider>
  );
};

const ListingFiltersCtxConsumer = ListingFiltersContext.Consumer;

export {
  ListingFiltersContext,
  ListingFiltersCtxConsumer,
  ListingFiltersCtxProvider,
};
