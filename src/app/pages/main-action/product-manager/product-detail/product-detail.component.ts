import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzFooterComponent } from 'ng-zorro-antd/layout';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Category } from 'src/app/sharings/models/category';
import { Product } from 'src/app/sharings/models/product';
import { ProductManagerService } from '../product-manager-service/product-manager.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue?: string;
  form!: FormGroup;
  product!: Product;
  number!: number;
  @Input() data!: string;
  loading = false;
  constructor(private ProductService: ProductManagerService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getCategory();
    this.getUnits();
    if (this.data != null) {
      this.form = new FormGroup({
        nameProduct: new FormControl(''),
        unitPrice: new FormControl(''),
        importPrice: new FormControl(''),
        unit: new FormControl(''),
        categoryName: new FormControl(''),
        description: new FormControl('')
      });
    }
    else {
      this.form = new FormGroup({
        ProductName: new FormControl(''),
        UnitPrice: new FormControl(''),
        ImportPrice: new FormControl(''),
        Unit: new FormControl(''),
        CategoryId: new FormControl(''),
        Description: new FormControl(''),
        QuantityInStock: new FormControl('')
      });
    }
  }
  categories: Category[] = [];
  units: string[] = [];


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
  getUnits() {
    this.ProductService.getUnit().subscribe(
      (response) => {
        console.log("unit" + response.data);

        this.units = response.data;
      },
      (error) => {
        console.log(error);

      }

    )
  }
  onStoreProduct(data: any) {
    this.loading = true;
    this.ProductService.storeNewProduct(data).subscribe(
      (response) => {
        console.log(data);
        this.loading = false;
        this.modalService.success({
          nzContent: 'Thêm sản phẩm thành công'

        });

        setTimeout(() => this.modalService.closeAll(), 1000);
        console.log(response.message);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
