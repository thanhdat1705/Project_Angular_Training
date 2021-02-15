import { Injectable } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { SearchCostTypeRequest } from 'src/app/sharings/requests/search-cost-type-request';

@Injectable({
  providedIn: 'root'
})
export class CostTypeService {

  constructor(private service: SummaryService) { }

  searchCostType(searchCostTypeRequest: SearchCostTypeRequest){
    return this.service.searchCostType(searchCostTypeRequest);
  }
  
  storeNewCostType(data: any) {
    return this.service.storeNewCostType(data);
  }
}
