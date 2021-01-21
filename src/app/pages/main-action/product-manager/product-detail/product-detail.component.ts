import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from 'src/app/sharings/models/category';
import { ProductManagerService } from '../product-manager-service/product-manager.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue?: string;
  constructor(private ProductService: ProductManagerService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  categories: Category[] = [];


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  getCategory() {
    this.ProductService.getCategory().subscribe(
      (response) => {
        console.log("data" + response.data);

        this.categories = response.data;
      },
      (error) => {
        console.log(error);

      }

    )
  }
}
