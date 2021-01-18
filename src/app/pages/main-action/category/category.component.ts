import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/sharings/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    cateList : Category[] = [];


  getTopProductFromCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('https://managesachfruits-backend.herokuapp.com/api/Categories');
  }

  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.getTopProductFromCategory().subscribe((resp: Category[]) => {
      console.log(resp);
      this.cateList = resp;
    });
  }



}
