import { ManHairCutIcon, WoManHairCutIcon, ManHairWaxIcon, FaceWashWoManIcon, FaceWashManIcon, ShampooIcon, ShavingIcon, SkinCareIcon } from '../assets/icons/service_icon';
import { CustomerService } from './../models/store';

export const ManHairCutService: CustomerService = {
  id: 1,
  name: 'Man Hair Cut',
  iconUrl: ManHairCutIcon,
  price: 50000
};
export const ManHairWaxService: CustomerService = {
  id: 2,
  name: 'Man Hair Wax',
  iconUrl: ManHairWaxIcon,
  price: 50000
};
export const WoManHairCutService: CustomerService = {
  id: 3,
  name: 'Woman Hair Cut',
  iconUrl: WoManHairCutIcon,
  price: 50000
};
export const FaceWashWoManService: CustomerService = {
  id: 4,
  name: 'Face Wash Woman',
  iconUrl: FaceWashWoManIcon,
  price: 50000
};
export const FaceWashManService: CustomerService = {
  id: 5,
  name: 'Face Wash Man',
  iconUrl: FaceWashManIcon,
  price: 50000
};
export const ShampooService: CustomerService = {
  id: 6,
  name: 'Shampoo',
  iconUrl: ShampooIcon,
  price: 50000
};
export const ShavingService: CustomerService = {
  id: 7,
  name: 'Shaving',
  iconUrl: ShavingIcon,
  price: 50000
};
export const SkinCareService: CustomerService = {
  id: 8,
  name: 'Skin Care',
  iconUrl: SkinCareIcon,
  price: 50000
};

export const AllCustomerServices: CustomerService[] = [
  ManHairCutService, ManHairWaxService, WoManHairCutService, FaceWashWoManService, FaceWashManService,
  ShampooService, ShavingService, SkinCareService
];
