import { Account } from './account';



export interface Store{
  id: number;
  name: string;
  address: string;
  brand: Brand;
  imgUrl: string;
  numberOfSeat: number;
  services: CustomerService[];
  owner: Account;
  createAt: string;
  status: number;//0: not accept by admin, 1: working; 2: stop working
}

export interface Brand{
  id: number;
  name: string;
  iconUrl: string;
}

export interface CustomerService{
  id: number;
  name: string;
  iconUrl: string;
  price: number
}
