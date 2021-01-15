import { Account } from './account';
import { DateTime } from './date-time';
import { Time } from '@angular/common';
import { CustomerService, Store } from './store';
import { UrlServerAPIAccountLoginSocial } from './url-api';
export interface Booking{
  id: number;
  customer: Account;
  serviceBookings: CustomerService[];
  store: Store,
  bookingAt: Date,
  useServiceAt: Date,
  totalPrice: number,
  discount: number,
  status: number
}
export interface BookingView{
  id: number;
  customer: string;
  store: string,
  storeImgUrl: string;
  bookingAt: Date,
  useServiceAt: Date,
  totalPrice: number,
  status: number
}

