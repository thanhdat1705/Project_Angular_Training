import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { Cost, CostDetails } from 'src/app/sharings/models/cost-details';
import { DateTime } from 'src/app/sharings/models/date-time';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchCostRequest } from 'src/app/sharings/requests/search-request';
import { CostService } from './CostServices/cost.service';
import { ModalContentCostComponent } from './modal-content-cost/modal-content-cost.component';

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
  // inputFormControl: FormGroup;
  costList: Cost[] = [];
  page!: number;
  pageLimit!: number;
  checked = false;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };
  @Output() abccccdss = new EventEmitter();

  searchCostRequest: SearchCostRequest = {
    limit: 10,
    page: 0,
    search: "",
  };

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClientModule,
    //  private dialogRef: MatDialogRef<ManageCostsComponent>,
    private costService: CostService,
    public generalService: GeneralHelperService,
    private generalHelper: GeneralHelperService,
    private modal: NzModalService,
  ) {
    // this.inputFormControl = this.formBuilder.group({
    //   description: [null, [Validators.maxLength(100)]]
    // });

  }

  ngOnInit(): void {
    this.searchCostList();

  }


  getCreateTime(time: DateTime) {
    return this.generalHelper.getToStringTime(time);
  }

  searchCostList() {
    this.costList = null as any;
    this.costService.searchCost(this.searchCostRequest).subscribe(
      (response) => {
        this.getData(response.data);
        //console.log(response.data);
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
    console.log("Info: " + this.pageInfo.info.limit);
    console.log("pageInfo: " + this.pageInfo);
    this.page = this.pageInfo.info.page;
    this.pageLimit = this.pageInfo.info.limit;
    this.costList = responseData.data;
    //console.log(this.productList);
    // this.pageInfo.numberOfPage = Math.ceil(this.pageInfo.info.totalRecord / this.pageInfo.info.limit);
    // if (this.pageInfo.info.page == 1) {
    //   this.pageInfo.isFirstPage = true;
    // } else {
    //   this.pageInfo.isFirstPage = false;
    // }
    // if (this.pageInfo.info.page == this.pageInfo.numberOfPage) {
    //   this.pageInfo.isLastPage = true;
    // } else {
    //   this.pageInfo.isLastPage = false;
    // }
  }

  // addNewCost(data) {
  //   this.isOkLoading = true;
  //   this.costService.storeNewCost(data).subscribe(
  //     (response) => {

  //     }
  //   )
  // } 

  showModalCostDetail(cost: any) {
    this.checked = true;
    if (cost != null) {
      this.costService.getDetailsCost(cost.id).subscribe(
        (response) => {
          this.modal.create({
            nzTitle: "Cost Detail",
            nzContent: ModalContentCostComponent,
            nzMaskClosable: false,
            nzClosable: true,
            nzWidth: "50%",
            nzFooter: null,
            nzOnCancel: () => this.confirmAdd(),
            nzComponentParams: {
              data: response.data,
            }
          });
        }
      )
      this.modal.afterAllClose.subscribe(() => {
        if (this.checked == true) {
          this.searchCostList();
        } else {
          console.log('cc');
        }
      })
    }
  }

  showModalCostAdd(cost: any) {
    //console.log(cost);
    this.checked = true;
    // let title: string;
    // cost == null ? title = "" : title = "Cost Detail";

    this.modal.create({
      nzTitle: "Add Cost",
      nzContent: ModalContentCostComponent,
      nzMaskClosable: false,
      nzClosable: true,
      nzWidth: "50%",
      nzFooter: null,
      nzOnCancel: () => this.confirmAdd(),
      nzComponentParams: {
        data: cost,
      }
    });
    this.modal.afterAllClose.subscribe(() => {
      if (this.checked == true) {
        this.searchCostList();
      } else {
        console.log('cc');
      }

    })
  }

  confirmAdd() {
    this.checked = false;
  }
}
