import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
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
  color: string = '100px';
  costList: Cost[] = [];
  page!: number;
  pageLimit!: number;
  checked = false;

  totalRecord!: number;
  pageSize = 4;
  pageIndex = 1;

  tableLoading = false;
  detailLoading = false;
  confirmModal!: NzModalRef;

  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };

  @Output() abccccdss = new EventEmitter();

  sortOrderList?: number = 0;
  sortFieldList?: string = 'create_at';
  searchParam!: SearchCostRequest;
  searchCostRequest: SearchCostRequest = {
    limit: 4,
    page: 1,
    sortField: "create_at",
    sortOrder: 0,
    search: "",
    costTypeIds: null as any
  };

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClientModule,
    //  private dialogRef: MatDialogRef<ManageCostsComponent>,
    private costService: CostService,
    public generalService: GeneralHelperService,
    private generalHelper: GeneralHelperService,
    private modal: NzModalService,
    private notification: NzNotificationService,
  ) {
    // this.inputFormControl = this.formBuilder.group({
    //   description: [null, [Validators.maxLength(100)]]
    // });

  }

  ngOnInit(): void {
    this.searchCostList(this.searchCostRequest);

  }

  // createErrorNotification() {
  //   this.notification.blank(
  //     'Notification Title',
  //     'I will never close automatically. I will be close automatically. I will never close automatically.',
  //     { nzDuration: 1000 }
  //   );
  // }

  getCreateTime(time: DateTime) {
    return this.generalHelper.getToStringTime(time);
  }

  searchCostList(searchParam: SearchCostRequest) {
    this.tableLoading = true;
    this.costList = null as any;
    this.costService.searchCost(searchParam).subscribe(
      (response) => {
        this.tableLoading = false;
        this.getData(response.data);
        console.log(response.data);
      },
      (error) => {
        this.tableLoading = false;
        console.log(error);
        this.generalService.createErrorNotification(error);
      }
    );

  }

  getData(responseData: ResponseSearch) {
    //console.log(this.productList);
    // if (responseData.data.length == 0 && responseData.info.page > 1) {
    //   this.searchCostRequest.page = this.searchCostRequest.page - 1;
    //   this.searchCostList(this.searchParam);
    //   return;
    // }
    this.pageInfo.info = responseData.info;
    console.log("Info: " + this.pageInfo.info.limit);
    console.log("pageInfo: " + this.pageInfo);
    this.page = this.pageInfo.info.page;
    this.pageLimit = this.pageInfo.info.limit;
    this.totalRecord = this.pageInfo.info.totalRecord;
    this.costList = responseData.data;
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log("params -- " + params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    console.log("sortField -- " + sortField);
    console.log("pageIndex -- " + pageIndex);
    sortOrder === 'ascend' || null ? this.sortOrderList = 0 : this.sortOrderList = 1;
    sortField == null ? this.sortFieldList = 'create_at' : this.sortFieldList = sortField;
    this.searchParam = {
      limit: pageSize,
      page: pageIndex,
      sortField: this.sortFieldList,
      sortOrder: this.sortOrderList,
      search: "",
      costTypeIds: null as any
    };
    console.log("searchParam (limit,page,search,sortField,sortOrder) -- " + this.searchParam.limit + this.searchParam.page + this.searchParam.search + this.searchParam.sortField + this.searchParam.sortOrder);
    this.searchCostList(this.searchParam);
  }

  showModalCostDetail(cost: any) {
    this.checked = true;
    this.detailLoading = true;
    this.costService.getDetailsCost(cost.id).subscribe(
      (response) => {
        this.detailLoading = false;
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
        this.modal.afterAllClose.subscribe(() => {
          if (this.checked == true) {
            this.searchCostList(this.searchParam);
          } else {
            console.log('cc');
          }
        });
      },
      (error) => {
        console.log(error);
        this.generalService.createErrorNotification(error);
      }
    )
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
        this.searchCostList(this.searchParam);
      } else {
        console.log('cc');
      }

    })
  }

  deleteCost(id: string, description: string) {
    console.log("cost id -- " + id);
    this.confirmModal = this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this item?</i>',
      nzContent: '<b>' + description + '</b>',
      nzOnOk: () => {
        this.tableLoading = true;
        this.costService.deleteCost("123").subscribe(
          (response) => {
            this.tableLoading = false;
            this.modal.success({
              nzContent: 'Xóa chi phí thành công',
              nzOnOk: () => console.log('ok'),
            });
            this.searchCostList(this.searchParam);
            console.log(response.message);
          },
          (error) => {
            this.tableLoading = false;
            console.log(error);
            this.generalService.createErrorNotification(error);
          }
        )
      }
    });

  }

  confirmAdd() {
    this.checked = false;
  }

  // onInput($event: { target: any; }) {
  //   if (!$event) {
  //     return;
  //   }
  //   const target = $event.target;
  //   console.log(target)
  //   const regexp = /^(\d)+$/;
  //   if (regexp.test(target.value)) {
  //     target.value = target.value.replace(regexp, '');
  //     console.log("a hi hi");
  //   }
  //   console.log(target.value)
  // }

  
}
