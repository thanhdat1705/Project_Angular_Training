import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { Product } from 'src/app/sharings/models/product';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchProductRequest } from 'src/app/sharings/requests/search-product-request';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NzTableQueryParams } from 'ng-zorro-antd/table';


@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html'
})
export class ProductManagerComponent implements OnInit {
  checked = true;
  indeterminate = false;
  listOfCurrentPageData: Product[] = [];
  listProduct: Product[] = [];
  setOfCheckedId = new Set<number>();
  loading = true;
  page!: number;
  pageLimit!: number;
  searchParam!: SearchProductRequest;
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  constructor(private productService: SummaryService, private modalService: NzModalService, private viewContainerRef: ViewContainerRef) { }
  searchProductRequest: SearchProductRequest = {
    limit: 2,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    categoryIds: null as any,
    units: null as any
  };
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };
  ConfirmModal!: NzModalRef
  total!: number;
  pageSize = 2;
  pageIndex = 1;
  sortOrderList?: number = 0;
  sortFieldList?: string = 'create_at';

  ngOnInit(): void {

    this.searchProductList(this.searchProductRequest);
  }
  private searchProductList(searchParam: SearchProductRequest) {

    this.loading = true;
    return this.productService.searchProduct(searchParam).subscribe(
      (response) => {
        this.loading = false;
        this.getData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getData(responseData: ResponseSearch) {
    this.pageInfo.info = responseData.info;
    this.page = this.pageInfo.info.page;
    this.total = this.pageInfo.info.totalRecord;
    this.pageLimit = this.pageInfo.info.limit;
    this.listProduct = responseData.data;
  }
  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    console.log(sortField);
    sortOrder === 'ascend' || null ? this.sortOrderList = 0 : this.sortOrderList = 1;
    sortField == null ? this.sortFieldList = 'create_at' : this.sortFieldList = sortField;
    this.searchParam = {
      limit: pageSize,
      page: pageIndex,
      search: "",
      sortField: this.sortFieldList,
      sortOrder: this.sortOrderList,
      categoryIds: null as any,
      units: null as any

    };
    this.searchProductList(this.searchParam);
  }
  showDetail(prodId: any): void {
    this.checked = true;
    this.productService.getDetailsProduct(prodId).subscribe((response) => {
      const modal = this.modalService.create(
        {
          nzTitle: 'Cập nhật sản phẩm',
          nzContent: ProductDetailComponent,
          nzViewContainerRef: this.viewContainerRef,
          nzMaskClosable: false,
          nzClosable: true,
          nzOnCancel: () => this.confirmAdd(),
          nzComponentParams: {
            data: response.data,
          },
          nzModalType: "default",
          nzFooter: null
          //#endregion
        });
      modal.afterClose.subscribe(() => {
        if (this.checked == true)
          this.searchProductList(this.searchParam)
        else {
          console.log('cc')
        }
      });
    })
  }
  showAddProduct(pro: any): void {
    this.checked = true;
    const modal = this.modalService.create(
      {

        nzTitle: 'Thêm sản phẩm',
        nzContent: ProductDetailComponent,
        nzViewContainerRef: this.viewContainerRef,
        nzMaskClosable: false,
        nzClosable: true,
        nzOnCancel: () => this.confirmAdd(),
        nzComponentParams: {
          data: pro,
        },
        nzModalType: "default",
        nzFooter: null
        //#endregion
      });

    modal.afterClose.subscribe(() => {
      if (this.checked == true)
        this.searchProductList(this.searchParam)
      else {
        console.log('cc')
      }
    });
  }
  confirmAdd() {
    this.checked = false;
  }

  showConfirmDelete(prod: Product) {
    this.ConfirmModal = this.modalService.confirm({
      nzTitle: 'Bạn có chắc chắn muốn xóa sản phẩm:' + prod.productName,
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(this.deleteProduct(prod.id) ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
  deleteProduct(prodId: string) {
    return this.productService.deleteProduct(prodId).subscribe(
      (response) => {
        this.modalService.success({
          nzContent: response.message
        })
        this.searchProductList(this.searchParam)
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
