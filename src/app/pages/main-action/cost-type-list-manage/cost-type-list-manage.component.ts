import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { CostType } from 'src/app/sharings/models/cost-details';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchCostTypeRequest } from 'src/app/sharings/requests/search-cost-type-request';
import { ModalContentCostComponent } from '../manage-costs/modal-content-cost/modal-content-cost.component';
import { CostTypeService } from './CostTypeService/cost-type.service';
import { ModalContentCostTypeComponent } from './modal-content-cost-type/modal-content-cost-type.component';

@Component({
  selector: 'app-cost-type-list-manage',
  templateUrl: './cost-type-list-manage.component.html',
  styleUrls: ['./cost-type-list-manage.component.css']
})
export class CostTypeListManageComponent implements OnInit {
  costTypeList: CostType[] = [];
  tableLoading = false;
  detailLoading = false;

  checked = false;

  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };

  page!: number;
  pageLimit!: number;
  sortOrderList?: number = 0;
  sortFieldList?: string = 'create_at';
  totalRecord!: number;
  pageSize = 4;
  pageIndex = 1;

  searchParam!: SearchCostTypeRequest;
  searchCostTypeRequest: SearchCostTypeRequest = {
    limit: 4,
    page: 1,
    sortField: "create_at",
    sortOrder: 0,
    search: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private costTypeService: CostTypeService,
    public generalService: GeneralHelperService,
    private generalHelper: GeneralHelperService,
    private modal: NzModalService,
  ) {

  }

  ngOnInit(): void {
    this.searchCostTypeList(this.searchCostTypeRequest);
  }

  searchCostTypeList(searchParam: SearchCostTypeRequest) {
    this.tableLoading = true;
    this.costTypeList = null as any;
    this.costTypeService.searchCostType(searchParam).subscribe(
      (response) => {
        this.tableLoading = false;
        this.getData(response.data);
        console.log(response.data);
      },
      (error) => {
        this.tableLoading = false;
        this.generalService.handleError(error);
      }
    );
  }

  getData(responseData: ResponseSearch) {
    this.pageInfo.info = responseData.info;
    console.log("Info: " + this.pageInfo.info.limit);
    console.log("pageInfo: " + this.pageInfo);
    this.page = this.pageInfo.info.page;
    this.pageLimit = this.pageInfo.info.limit;
    this.totalRecord = this.pageInfo.info.totalRecord;
    this.costTypeList = responseData.data;
  }

  showModalCostTypeAdd() {
    this.checked = true;
    this.modal.create({
      nzTitle: "Add Cost Type",
      nzContent: ModalContentCostTypeComponent,
      nzMaskClosable: false,
      nzClosable: true,
      nzWidth: "30%",
      nzFooter: null,
      nzOnCancel: () => this.confirmAdd(),
    });
    this.modal.afterAllClose.subscribe(() => {
      if (this.checked == true) {
        this.searchCostTypeList(this.searchParam);
      } else {
        console.log('cc');
      }
    })
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
      search: ""
    };
    console.log("searchParam (limit,page,search,sortField,sortOrder) -- " + this.searchParam.limit + this.searchParam.page + this.searchParam.search + this.searchParam.sortField + this.searchParam.sortOrder);
    this.searchCostTypeList(this.searchParam);
  }
  

  confirmAdd() {
    this.checked = false;
  }
}
