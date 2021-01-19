import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/sharings/models/category';
import { ResponseSearch } from 'src/app/sharings/models/response-search';
import { SearchRequest } from 'src/app/requests/search-request';
import { ResponseServer } from 'src/app/sharings/models/response-server';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PageInfo } from 'src/app/sharings/models/page-info';
import { GeneralHelperService } from 'src/app/services/general-helper.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  cateList: Category[] = [];
  loading = true;
  pageSize = 2;
  pageIndex = 1;
  total = 0;

  searchCostRequest: SearchRequest = {
    limit: this.pageSize,
    page: this.pageIndex,
    search: '',
    sortField: 'create_at',
    sortOrder: 0,
  };

  pageInfo: PageInfo = {
    isFirstPage: true,
    isLastPage: false,
    numberOfPage: 1,
  };

  private headers: HttpHeaders = new HttpHeaders({
    Accept: '*/*',
    'Content-Type': 'application/json',
  });

  getCategory(searchRequest: any): Observable<ResponseServer> {
    // return this.http.get<Category[]>('https://managesachfruits-backend.herokuapp.com/api/Categories');
    return this.http.post<ResponseServer>(
      'https://managesachfruits-backend.herokuapp.com/api/Categories',
      searchRequest,
      { headers: this.headers }
    );
  }

  searchCategories(searchRequest: any): Observable<ResponseServer> {
    return this.http.post<ResponseServer>(
      'https://managesachfruits-backend.herokuapp.com/api/Categories/Search',
      searchRequest,
      { headers: this.headers }
    );
  }

  loadCategory() : void {
    this.searchCategories(this.searchCostRequest).subscribe((resp) => {
      console.log(resp);
      this.loading = false;
      this.total = resp.data.info.totalRecord;
      this.getData(resp.data);
      console.log(this.total);
    });
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    public generalHelper: GeneralHelperService
  ) {
    // this.searchCategories(this.searchCostRequest).subscribe((resp) => {
    //   console.log(resp);
    //   this.loading = false;
    //   this.total = resp.data.info.totalRecord;
    //   this.getData(resp.data);
    //   console.log(this.total);
    // });
    this.loadCategory();
  }

  searchCategoryList() {
    this.cateList = [];
    this.searchCategories(this.searchCostRequest).subscribe(
      (response) => {
        this.getData(response.data);
      },
      (error) => {
        this.generalHelper.handleError(error);
      }
    );
  }

  getData(responseData: ResponseSearch) {
    if (responseData.data.length == 0 && responseData.info.page > 1) {
      this.searchCostRequest.page = this.searchCostRequest.page - 1;
      this.searchCategoryList();
      return;
    }
    this.pageInfo.info = responseData.info;
    //console.log(this.pageInfo);
    this.cateList = responseData.data;
    //console.log(this.productList);
    this.pageInfo.numberOfPage = Math.ceil(
      this.pageInfo.info.totalRecord / this.pageInfo.info.limit
    );
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

  ngOnInit(): void {}
}
