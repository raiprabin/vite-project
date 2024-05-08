import { useContext } from 'react';
import { FilterCustomersContext } from '../../utils/contexts/customer/customers-filter';

export const useFilterCustomers = () => {
  const context = useContext(FilterCustomersContext);
  if (context === undefined)
    throw new Error(
      'useFilterCustomers() must be used within FilterCustomersCtxProvider',
    );
  return context;
};
