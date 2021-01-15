import { Salon430ShineCN01, AimShaverBarber, CN1FourRauBarber, VintageStore01, GentlemanStore01 } from './stores_data';
import { PerformStore } from './../models/perform_store';

export const PerformSalon430ShineCN01: PerformStore = {
  store: Salon430ShineCN01,
  revenue: 5000000,
  totalCheckout: 35
};
export const PerformAimShaverBarber: PerformStore = {
  store: AimShaverBarber,
  revenue: 4500000,
  totalCheckout: 25
};
export const PerformCN1FourRauBarber: PerformStore = {
  store: CN1FourRauBarber,
  revenue: 4000000,
  totalCheckout: 20
};
export const PerformGentlemanStore01: PerformStore = {
  store: GentlemanStore01,
  revenue: 4000000,
  totalCheckout: 20
};
export const PerformVintageStore01: PerformStore = {
  store: VintageStore01,
  revenue: 3500000,
  totalCheckout: 15
};

export const PerformsData: PerformStore[] = [PerformSalon430ShineCN01,
  PerformAimShaverBarber, PerformCN1FourRauBarber, PerformGentlemanStore01,
  PerformVintageStore01];
