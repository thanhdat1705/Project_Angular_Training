import { DateTime } from './date-time';
export interface Cost{
    id: string;
    costDescription: string;
    total: number;
    costTypeId: number;
    createAt: DateTime;
}
export interface CostType{
    id: number;
    costTypeName: string;
}
export interface CostTypeDetails{
    id: number;
    costTypeName: string;
    total: number;
}
export interface CostDetails {
    id: number;
    costType: CostType;
    costDescription: string;
    total: number;
    createAt: string;
    updateAt: string;
    // public constructor(OrderId: string, CostDescription: string, Total: number, CostCode: string) {
    //     this.costId = OrderId;
    //     this.costDescription = CostDescription;
    //     this.total = Total;
    //     this.costCode = CostCode;
    // }
}
