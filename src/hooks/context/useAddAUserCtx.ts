import { useContext } from 'react';
import { AddAUserContext } from '../../utils/contexts/user/add-a-user';

export const useAddAUserContext = () => {
  const context = useContext(AddAUserContext);
  if (context === undefined)
    throw new Error(
      'useAddAUserContextInfo() must be used within AddAUserCtxProvider',
    );
  return context;
};
