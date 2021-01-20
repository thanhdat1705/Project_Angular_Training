import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Key } from 'protractor';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { Cost, CostDetails, CostType } from 'src/app/sharings/models/cost-details';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchCostRequest } from 'src/app/sharings/requests/search-request';
import { CostService } from './CostServices/cost.service';

@Component({
  selector: 'app-manage-costs',
  templateUrl: './manage-costs.component.html',
  styleUrls: ['./manage-costs.component.css']
})
export class ManageCostsComponent implements OnInit {
  titleComponent: string = 'Quản lý danh sách chi phí';
  isVisible = false;
  isOkLoading = false;
  color: string = '100px';
  totalCost!: number;
  selectedValue = null;
  form: FormGroup;
  costTypes: CostType[] = null as any;
  costList: Cost[] = [];
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };
  @Output() abccccdss = new EventEmitter();

  searchCostRequest: SearchCostRequest = {
    limit: 5,
    page: 1,
    search: "",
  };

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClientModule,
    //  private dialogRef: MatDialogRef<ManageCostsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: CostDetails, 
    private costService: CostService, 
    public generalService: GeneralHelperService
    ) {
    this.form = this.formBuilder.group({
      comment: [null, [Validators.maxLength(100)]]
    });
   }

  ngOnInit(): void {
    this.searchCostList();
  }

  searchCostList() {
    this.costList = null as any;
    this.costService.searchCost(this.searchCostRequest).subscribe(
      (response) => {
        this.getData(response.data);
        console.log(response.data);
      },
      (error) => {
        this.generalService.handleError(error);
      }
    );

  }

  getData(responseData: ResponseSearch) {
    //console.log(this.productList);
    if (responseData.data.length == 0 && responseData.info.page > 1) {
      this.searchCostRequest.page = this.searchCostRequest.page - 1;
      this.searchCostList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.costList = responseData.data;
    //console.log(this.productList);
    this.pageInfo.numberOfPage = Math.ceil(this.pageInfo.info.totalRecord / this.pageInfo.info.limit);
    if (this.pageInfo.info.page == 1) {
      this.pageInfo.isFirstPage = true;
    } else {
      this.pageInfo.isFirstPage = false;
    }
    if (this.pageInfo.info.page == this.pageInfo.numberOfPage) {
      this.pageInfo.isLastPage = true;
    } else {
      this.pageInfo.isLastPage = false;
    }
  }

  // addNewCost(data) {
  //   this.isOkLoading = true;
  //   this.costService.storeNewCost(data).subscribe(
  //     (response) => {

  //     }
  //   )
  // } 

  getCostType() {
    this.costService.getAllCostType().subscribe(
      (response) => {
        this.costTypes = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    )
  }

  showModalCost(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
    
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
