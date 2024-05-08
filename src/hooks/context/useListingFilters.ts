import { useContext } from 'react';
import { ListingFiltersContext } from '../../utils/contexts/listing-filter';

export const useListingFilters = () => {
  const context = useContext(ListingFiltersContext);
  if (typeof context === 'undefined')
    // It's never undefined as we supply the default value SMH 🤦‍♂️
    throw new Error(
      'useListingFilters() must be used only within ListingFiltersCtxProvider',
    );
  return context;
};
