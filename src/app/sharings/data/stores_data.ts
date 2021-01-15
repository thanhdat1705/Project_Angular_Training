import { ManHairCutIcon, ManHairWaxIcon, FaceWashManIcon, ShampooIcon, ShavingIcon, SkinCareIcon } from '../assets/icons/service_icon';
import { ManHairCutService, ManHairWaxService, FaceWashManService, ShampooService, ShavingService, SkinCareService } from './customer_services_data';
import { Owner30ShineSalon4, OwnerFourRauBarber, OwnerAimShaverBarber, OwnerNormalStore01, OwnerBityBarber, OwnerGudStore01, OwnerGentlemanStore01, OwnerVintageStore01 } from './users_data';
import { ShineBrand, FourRauBrand, AimShaverBrand, BaberBrand, BiAndTyBrand, GudBrand, GentlemanBrand, VintageBrand } from './brands_data';
import { ShineLogo, FourRauLogo } from './../assets/shop_logo';
import { Store, Brand } from './../models/store';

export const Salon430ShineCN01: Store = {
  id: 1,
  address: '4 Tran Quang Khai, Quan 1, Tp. HCM',
  brand: ShineBrand,
  imgUrl: '',
  name: '30Shine Salon 4 Trần Quang Khải',
  numberOfSeat: 20,
  owner: Owner30ShineSalon4,
  status: 0,
  createAt: '10-10-2020 01:22:12',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 50000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 20000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 20000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 20000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 30000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 30000
  }]
};
export const AimShaverBarber: Store = {
  id: 1,
  address: '600 Nguyễn Văn Linh, Q7, Tp. HCM',
  brand: AimShaverBrand,
  imgUrl: '',
  name: 'Aim Shaver Barber',
  numberOfSeat: 30,
  owner: OwnerAimShaverBarber,
  status: 0,
  createAt: '10-10-2020 13:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 50000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 20000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 20000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 20000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 30000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 30000
  }]
};
export const CN1FourRauBarber: Store = {
  id: 1,
  address: '634 Điện Biên Phủ, Q10, Tp. HCM',
  brand: FourRauBrand,
  imgUrl: '',
  name: 'CN1 4Rau Barber',
  numberOfSeat: 20,
  owner: OwnerFourRauBarber,
  status: 1,
  createAt: '09-10-2020 14:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 50000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 20000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 20000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 20000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 30000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 30000
  }]
};
export const BaberNormalStore01: Store = {
  id: 1,
  address: '88 Phan Đăng Giảng,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: BaberBrand,
  imgUrl: '',
  name: 'Hoàng Thiên Cắt Tóc Nam',
  numberOfSeat: 30,
  owner: OwnerNormalStore01,
  status: 1,
  createAt: '08-10-2020 14:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 20000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 10000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 10000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 10000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 10000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 20000
  }]
};
export const BiTyStore01: Store = {
  id: 4,
  address: '200 Phan Đăng Giảng,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: BiAndTyBrand,
  imgUrl: '',
  name: 'Bi & Ty',
  numberOfSeat: 12,
  status: 1,
  owner: OwnerBityBarber,
  createAt: '07-10-2020 15:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 20000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 10000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 10000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 10000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 10000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 20000
  }]
};
export const GudStore01: Store = {
  id: 5,
  address: '700 Lê Trọng Tấn,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: GudBrand,
  imgUrl: '',
  name: 'Gud Store CN01',
  numberOfSeat: 12,
  owner: OwnerGudStore01,
  status: 1,
  createAt: '07-10-2020 01:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 20000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 10000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 10000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 10000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 10000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 20000
  }]
};
export const GentlemanStore01: Store = {
  id: 5,
  address: '900 Lê Trọng Tấn,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: GentlemanBrand,
  imgUrl: '',
  name: 'Gentleman Store',
  numberOfSeat: 22,
  owner: OwnerGentlemanStore01,
  status: 1,
  createAt: '06-10-2020 11:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 20000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 10000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 10000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 10000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 10000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 20000
  }]
};
export const VintageStore01: Store = {
  id: 5,
  address: '350 Nguyễn Thị Tú,P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM',
  brand: VintageBrand,
  imgUrl: '',
  name: 'Vintage Store',
  numberOfSeat: 22,
  owner: OwnerVintageStore01,
  status: 1,
  createAt: '06-10-2020 08:00:00',
  services: [{
    id: 1,
    name: 'Man Hair Cut',
    iconUrl: ManHairCutIcon,
    price: 20000
  }, {
    id: 2,
    name: 'Man Hair Wax',
    iconUrl: ManHairWaxIcon,
    price: 10000
  },
  {
    id: 5,
    name: 'Face Wash Man',
    iconUrl: FaceWashManIcon,
    price: 10000
  }, {
    id: 6,
    name: 'Shampoo',
    iconUrl: ShampooIcon,
    price: 10000
  }, {
    id: 7,
    name: 'Shaving',
    iconUrl: ShavingIcon,
    price: 10000
  }, {
    id: 8,
    name: 'Skin Care',
    iconUrl: SkinCareIcon,
    price: 20000
  }]
};
export const Stores: Store[] = [
  Salon430ShineCN01, CN1FourRauBarber, AimShaverBarber
]
