import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/sharings/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  cateList : Category[] = [];

  ngOnInit(): void {
  }



}
