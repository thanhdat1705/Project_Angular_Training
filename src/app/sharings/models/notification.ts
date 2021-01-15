import { AccountStoreOwner } from './account';
export interface NotificationHeader{
  id: string;
  user: AccountStoreOwner;
  action: string;
  time: string;
}
