export interface Account {
  id: string;
  email: string;
  photoUrl: string;
  displayName: string;
  token: string;
  phone: string;
  role: string;
}
export interface AccountStoreOwner extends Account {
  iconStoreUrl: string;

}
