import { CostType } from './../models/cost-details';
import { CostDetails } from "../models/cost-details";

export const CostMarketing: CostType = {
  id: 1,
  costTypeName: 'Marketing'
}

export const CostSalary: CostType = {
  id: 2,
  costTypeName: 'Salary'
}

export const CostsData: CostDetails[] = [{
  id: 1,
  costDescription: 'Marketing Facebook',
  costType: CostMarketing,
  total: 20000000,
  createAt: '',
  updateAt: ''
},{
  id: 2,
  costDescription: "Salary's Son Hoang",
  costType: CostSalary,
  total: 3000000,
  createAt: '',
  updateAt: ''
},{
  id: 3,
  costDescription: "Salary's Hoang Phuc Huy",
  costType: CostSalary,
  total: 3000000,
  createAt: '',
  updateAt: ''
},{
  id: 4,
  costDescription: "Salary's Nguyen Thanh Dat",
  costType: CostSalary,
  total: 3000000,
  createAt: '',
  updateAt: ''
},{
  id: 5,
  costDescription: "Salary's Huynh Duc Minh",
  costType: CostSalary,
  total: 3000000,
  createAt: '',
  updateAt: ''
}];
