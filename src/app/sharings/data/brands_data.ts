import { Brand } from './../models/store';
import { ShineLogo, FourRauLogo, AimShaverLogo, BarberLogo, BiTiLogo, GudLogo, GentlemanLogo, LongLogo, SkyBarberLogo, VintageLogo, WhitefishLogo } from './../assets/shop_logo';

export const ShineBrand: Brand = {
  id: 1,
  iconUrl: ShineLogo,
  name: '30Shine'
};
export const FourRauBrand: Brand = {
  id: 1,
  iconUrl: FourRauLogo,
  name: '4Rau Barber'
};
export const AimShaverBrand: Brand = {
  id: 1,
  iconUrl: AimShaverLogo,
  name: 'AimShaver'
};
export const BaberBrand: Brand = {
  id: 4,
  iconUrl: BarberLogo,
  name: 'Barber store'
};
export const BiAndTyBrand: Brand = {
  id: 5,
  iconUrl: BiTiLogo,
  name: 'Bi & Ti Barber'
};
export const GudBrand: Brand = {
  id: 6,
  iconUrl: GudLogo,
  name: 'Gud Barber'
};
export const GentlemanBrand: Brand = {
  id: 7,
  iconUrl: GentlemanLogo,
  name: 'Gentleman Barber'
};
export const LongBrand: Brand = {
  id: 8,
  iconUrl: LongLogo,
  name: 'Long Barber'
};
export const SkyBarberBrand: Brand = {
  id: 9,
  iconUrl: SkyBarberLogo,
  name: 'Sky Barber'
};
export const VintageBrand: Brand = {
  id: 10,
  iconUrl: VintageLogo,
  name: 'Vintage Barber'
};
export const WhitefishBrand: Brand = {
  id: 11,
  iconUrl: WhitefishLogo,
  name: 'White Fish Barber'
};
export const Brands: Brand[] = [
  ShineBrand,
  FourRauBrand,
  AimShaverBrand,
  BaberBrand,
  BiAndTyBrand,
  GudBrand,
  GentlemanBrand,
  LongBrand,
  SkyBarberBrand,
  VintageBrand,
  WhitefishBrand,
];
