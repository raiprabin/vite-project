import { useContext } from 'react';
import { CreateATicketContext } from '../../utils/contexts/tickets/create-a-ticket';

export const useCreateATicketContext = () => {
  const context = useContext(CreateATicketContext);
  if (typeof context === 'undefined')
    throw new Error(
      'useCreateATicketContext() must be used only within CreateATicketCtxProvider',
    );
  return context;
};
