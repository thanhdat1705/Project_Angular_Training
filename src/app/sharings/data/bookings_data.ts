import { ManHairCutService, ManHairWaxService, ShampooService } from './customer_services_data';
import { Salon430ShineCN01, CN1FourRauBarber, AimShaverBarber, GentlemanStore01, GudStore01, VintageStore01, BaberNormalStore01, BiTyStore01 } from './stores_data';
import { Customer01, Customer02, Customer03, Guest01, Guest02, Guest03, Customer04 } from './users_data';
import { Booking } from './../models/booking';

export const BookingsData: Booking[] = [
  {
    id: 1,
    customer: Customer01,
    store: VintageStore01,
    bookingAt: new Date('2020-10-30T19:50:00.000+09:00'),
    useServiceAt: new Date(),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService
    ],
    status: 0,
    totalPrice: 80000,
    discount: 20000
  },
  {
    id: 2,
    customer: Customer02,
    store: GentlemanStore01,
    bookingAt: new Date('2020-10-26T14:50:00.000+09:00'),
    useServiceAt: new Date('2020-10-29T14:50:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 1,
    totalPrice: 120000,
    discount: 30000
  },
  {
    id: 3,
    customer: Customer03,
    store: CN1FourRauBarber,
    bookingAt: new Date('2020-10-25T14:48:00.000+09:00'),
    useServiceAt: new Date('2020-10-29T14:48:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 2,
    totalPrice: 120000,
    discount: 30000
  },
  {
    id: 4,
    customer: Customer03,
    store: AimShaverBarber,
    bookingAt: new Date('2020-10-23T10:48:00.000+09:00'),
    useServiceAt: new Date('2020-10-25T14:48:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 1,
    totalPrice: 120000,
    discount: 30000
  },
  {
    id: 5,
    customer: Guest01,
    store: GudStore01,
    bookingAt: new Date('2020-10-13T09:48:00.000+09:00'),
    useServiceAt: new Date('2020-10-14T15:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 3,
    totalPrice: 500000,
    discount: 50000
  },
  {
    id: 6,
    customer: Guest02,
    store: BaberNormalStore01,
    bookingAt: new Date('2020-10-12T09:30:00.000+09:00'),
    useServiceAt: new Date('2020-10-14T11:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 2,
    totalPrice: 500000,
    discount: 30000
  },
  {
    id: 7,
    customer: Guest03,
    store: BaberNormalStore01,
    bookingAt: new Date('2020-10-11T09:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-12T11:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 2,
    totalPrice: 500000,
    discount: 30000
  },
  {
    id: 8,
    customer: Guest01,
    store: BaberNormalStore01,
    bookingAt: new Date('2020-10-10T09:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-11T11:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 2,
    totalPrice: 500000,
    discount: 30000
  },
  {
    id: 9,
    customer: Guest01,
    store: BiTyStore01,
    bookingAt: new Date('2020-10-09T09:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-10T11:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 2,
    totalPrice: 500000,
    discount: 50000
  },
  {
    id: 10,
    customer: Customer03,
    store: BiTyStore01,
    bookingAt: new Date('2020-10-09T08:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-10T10:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 3,
    totalPrice: 500000,
    discount: 30000
  },
  {
    id: 11,
    customer: Customer02,
    store: GentlemanStore01,
    bookingAt: new Date('2020-10-07T07:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-08T10:15:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 3,
    totalPrice: 500000,
    discount: 30000
  },
  {
    id: 12,
    customer: Customer01,
    store: VintageStore01,
    bookingAt: new Date('2020-10-07T06:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-08T10:00:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 3,
    totalPrice: 500000,
    discount: 20000
  },
  {
    id: 13,
    customer: Guest03,
    store: GudStore01,
    bookingAt: new Date('2020-10-07T06:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-08T10:30:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 3,
    totalPrice: 500000,
    discount: 50000
  },
  {
    id: 14,
    customer: Customer04,
    store: GudStore01,
    bookingAt: new Date('2020-10-05T06:00:00.000+09:00'),
    useServiceAt: new Date('2020-10-07T10:30:00.000+09:00'),
    serviceBookings: [
      ManHairCutService,
      ManHairWaxService,
      ShampooService
    ],
    status: 3,
    totalPrice: 500000,
    discount: 50000
  }
]
