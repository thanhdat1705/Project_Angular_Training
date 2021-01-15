import { ShineLogo, AimShaverLogo, GudLogo, GentlemanLogo, VintageLogo } from './../assets/shop_logo';
import { DefaultAvatar, Avatar4RauOwner } from './../assets/avatar';
import { Account } from './../models/account';

export const Admin01: Account = {
  id: '3192014117691615',
  displayName: "Hoàng Sơn",
  email: "sonhoang1809@gmail.com",
  phone: '0123456789',
  photoUrl: "https://graph.facebook.com/3192014117691615/picture?type=normal",
  role: 'ADMIN',
  token: ''
};

export const Owner30ShineSalon4: Account = {
  id: '1',
  displayName: 'Hoang Long',
  email: 'hoanglong@30shine.com',
  phone: '0123456789',
  photoUrl: ShineLogo,
  role: 'OWNER',
  token: ''
};

export const OwnerBityBarber: Account = {
  id: '2',
  displayName: 'Tran Van Hoang',
  email: 'bitywork@gmail.com',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'OWNER',
  token: ''
};
export const OwnerAimShaverBarber: Account = {
  id: '3',
  displayName: 'Johnny Dang',
  email: 'johnnydang@gmail.com',
  phone: '077713870',
  photoUrl: AimShaverLogo,
  role: 'OWNER',
  token: ''
};
export const OwnerFourRauBarber: Account = {
  id: '4',
  displayName: 'Hà Hiền',
  email: '4raubarbershop@gmail.com',
  phone: '093 394 53 39',
  photoUrl: Avatar4RauOwner,
  role: 'OWNER',
  token: ''
};
export const OwnerNormalStore01: Account = {
  id: '5',
  displayName: 'Hoàng Thiên',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'OWNER',
  token: ''
};
export const OwnerGudStore01: Account = {
  id: '6',
  displayName: 'Minh Nhật',
  email: '',
  phone: '0123456789',
  photoUrl: GudLogo,
  role: 'OWNER',
  token: ''
};
export const OwnerGentlemanStore01: Account = {
  id: '7',
  displayName: 'Trần Văn Cường',
  email: '',
  phone: '0123456789',
  photoUrl: GentlemanLogo,
  role: 'OWNER',
  token: ''
};
export const OwnerVintageStore01: Account = {
  id: '7',
  displayName: 'Võ Trung Hiếu',
  email: '',
  phone: '0123456789',
  photoUrl: VintageLogo,
  role: 'OWNER',
  token: ''
};


export const Customer01: Account = {
  id: '25',
  displayName: 'Van Phuong Dat',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'CUSTOMER',
  token: ''
};
export const Customer02: Account = {
  id: '26',
  displayName: 'Huynh Thanh Tien',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: ''
};
export const Customer03: Account = {
  id: '27',
  displayName: 'Hoang Phuc Huy',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: ''
};
export const Customer04: Account = {
  id: '27',
  displayName: 'Hoang Anh Thang',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: ''
};
export const Guest01: Account = {
  id: '28',
  displayName: 'Nguyen Thanh Tu',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: ''
};
export const Guest02: Account = {
  id: '29',
  displayName: 'Lê Hiếu',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: ''
};
export const Guest03: Account = {
  id: '30',
  displayName: 'Nguyễn Minh Tuấn',
  email: '',
  phone: '0123456789',
  photoUrl: DefaultAvatar,
  role: 'GUEST',
  token: ''
};
export const Users: Account[] = [
  Admin01,
  OwnerBityBarber, Owner30ShineSalon4, OwnerFourRauBarber, OwnerAimShaverBarber,
  Customer02, Customer03
];
