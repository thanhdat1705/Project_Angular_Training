import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFooterComponent } from 'ng-zorro-antd/layout';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Category } from 'src/app/sharings/models/category';
import { Product, ProductDetails } from 'src/app/sharings/models/product';
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
  product!: ProductDetails;
  number!: number;
  categoryId!: string;
  unitSelect!: string;
  @Input() data!: ProductDetails;
  loading = false;
  constructor(private ProductService: ProductManagerService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.getCategory();
    this.getUnits();
    if (this.data != null) {
      console.log(this.data)
      this.product = this.data;
      this.unitSelect = this.data.unit;
      this.categoryId = this.data.category.id;
      this.form = new FormGroup({
        ProductName: new FormControl(this.product.productName, [Validators.required]),
        UnitPrice: new FormControl(this.product.unitPrice, [Validators.required]),
        ImportPrice: new FormControl(this.product.cost.total, [Validators.required]),
        Unit: new FormControl(this.unitSelect, [Validators.required]),
        CategoryId: new FormControl(this.categoryId, [Validators.required]),
        Description: new FormControl(this.product.description, [Validators.required]),
        QuantityInStock: new FormControl(this.product.quantityInStock, [Validators.required])
      });
    }
    else {
      this.form = new FormGroup({
        ProductName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        UnitPrice: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        ImportPrice: new FormControl('', [Validators.required]),
        Unit: new FormControl('', [Validators.required]),
        CategoryId: new FormControl('', [Validators.required]),
        Description: new FormControl('', [Validators.required]),
        QuantityInStock: new FormControl('', [Validators.required])
      });
    }
  }
  categories: Category[] = [];
  units: string[] = [];

  validateInput(): void {
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
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
    this.validateInput()
    if (this.form.valid) {
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
  updateProduct(prod: any) {
    this.validateInput()
    if (this.form.valid) {
      for (const i in this.form.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      this.loading = true;
      this.ProductService.updateProduct(prod, this.data.id).subscribe(
        (response) => {
          this.loading = false;
          this.modalService.success({
            nzContent: 'Cập nhật phẩm thành công'

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
}
