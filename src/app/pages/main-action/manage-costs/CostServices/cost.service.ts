import { Injectable } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { SearchCostRequest } from 'src/app/sharings/requests/search-request';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  constructor(private service: SummaryService) { }

  getAllCostType() {
    return this.service.getAllCostType();
  }

  storeNewCost(data: any) {
    return this.service.storeNewCost(data);
  }

  searchCost(searchCostRequest: SearchCostRequest){
    return this.service.searchCost(searchCostRequest);
  }

  getDetailsCost(id: string) {
    return this.service.getDetailsCost(id);
  }

  updateCost(data: any, id: string) {
    return this.service.updateCost(data, id);
  }

  deleteCost(id: string) {
    return this.service.deleteCost(id);
  }
}
