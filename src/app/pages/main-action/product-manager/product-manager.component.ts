import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { Product } from 'src/app/sharings/models/product';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchProductRequest } from 'src/app/sharings/requests/search-product-request';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// interface ItemData {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// }

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

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }


  constructor(private productService: SummaryService, private modalService: NzModalService, private viewContainerRef: ViewContainerRef) {

  }
  searchProductRequest: SearchProductRequest = {
    limit: 12,
    page: 0,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    categoryIds: null as any,
    units: null as any

  };
  searchResult?: ResponseSearch;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };
  isVisible = false;
  titleConfirm!: string;
  ConfirmModal!: NzModalRef
  ngOnInit(): void {
    // this.listOfData = new Array(200).fill(0).map((_, index) => {
    //   return {
    //     id: index,
    //     name: `Edward King ${index}`,
    //     age: 32,
    //     address: `London, Park Lane no. ${index}`
    //   };
    // });


    this.searchProductList();
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
          this.searchProductList()
        else {
          console.log('cc')
        }
      });
    })





    // showModal.afterClose.subscribe
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
        this.searchProductList()
      else {
        console.log('cc')
      }
    });


    // showModal.afterClose.subscribe
  }
  confirmAdd() {
    this.checked = false;
  }
  private searchProductList() {
    this.loading = true;
    return this.productService.searchProduct(this.searchProductRequest).subscribe(
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

    if (responseData.data.length == 0 && responseData.info.page > 1) {
      this.searchProductRequest.page = this.searchProductRequest.page - 1;
      this.searchProductList();
      return;
    }
    this.pageInfo.info = responseData.info;

    this.listProduct = responseData.data;

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
        this.searchProductList();
      },
      (error) => {
        console.log(error);
      }
    )

  }
}
