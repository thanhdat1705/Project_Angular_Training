import { Injectable } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { Product } from 'src/app/sharings/models/product';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchProductRequest } from 'src/app/sharings/requests/search-product-request';

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {


  searchProductRequest: SearchProductRequest = {
    limit: 5,
    page: 1,
    search: "",
    sortField: "create_at",
    sortOrder: 0,
    categoryIds: [],
    units: []
  };
  public pageInfo: PageInfo = { isFirstPage: true, isLastPage: false, numberOfPage: 1, info: null as any };
  constructor(private service: SummaryService) { }

  public productList: Product[] = [];
  public searchProduct(searchProductRequest: SearchProductRequest) {
    if (searchProductRequest != null) {
      this.searchProductRequest = searchProductRequest;
    }
    return this.service.searchProduct(this.searchProductRequest);
  }

  private searchProductList() {
    this.productList = [];
    return this.service.searchProduct(this.searchProductRequest).subscribe(
      (response) => {
        console.log("dung");
        console.log(response);

        this.getData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public searchProductByPage(page: number) {
    this.searchProductRequest.page = page;
    this.searchProductList();
  }
  getData(responseData: ResponseSearch) {

    //console.log(this.productList);
    // if (responseData.data.length == 0 && responseData.info.page > 1) {
    //   this.searchProductByPage(responseData.info.page - 1);
    //   return;
    // }
    this.pageInfo.info = responseData.info;
    console.log(this.pageInfo);
    this.productList = responseData.data;

    console.log(this.productList);
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
  getCategory() {
    return this.service.getAllCategories();
  }
  getUnit() {
    return this.service.getAllUnits();
  }
  storeNewProduct(data: any) {
    return this.service.storeNewProduct(data);
  }
}
