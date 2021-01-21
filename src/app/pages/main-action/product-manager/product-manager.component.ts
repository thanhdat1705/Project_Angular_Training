import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { Product } from 'src/app/sharings/models/product';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchProductRequest } from 'src/app/sharings/requests/search-product-request';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NzFooterComponent } from 'ng-zorro-antd/layout';
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
  // listOfSelection = [
  //   {
  //     text: 'Select All Row',
  //     onSelect: () => {
  //       this.onAllChecked(true);
  //     }
  //   },
  //   {
  //     text: 'Select Odd Row',
  //     onSelect: () => {
  //       this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
  //       this.refreshCheckedStatus();
  //     }
  //   },
  //   {
  //     text: 'Select Even Row',
  //     onSelect: () => {
  //       this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
  //       this.refreshCheckedStatus();
  //     }
  //   }
  // ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: Product[] = [];
  listProduct: Product[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }


  constructor(private productService: SummaryService, private modalService: NzModalService) {

  }
  searchProductRequest: SearchProductRequest = {
    limit: 4,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    categoryIds: null as any,
    units: null as any
  };
  searchResult?: ResponseSearch;
  pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };
  isVisible = false;
  isConfirmLoading = false;
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
  showModal1(): void {
    this.modalService.create({
      nzTitle: 'Thêm sản phẩm',
      nzContent: ProductDetailComponent
      //#endregion
    });
    // showModal.afterClose.subscribe
  }



  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  private searchProductList() {
    return this.productService.searchProduct(this.searchProductRequest).subscribe(
      (response) => {
        console.log("dung");
        console.log(response.data);

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
    //console.log(this.pageInfo);
    this.listProduct = responseData.data;
    console.log("list" + this.listProduct);
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
}
