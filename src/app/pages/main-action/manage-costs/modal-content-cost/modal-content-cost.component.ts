import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { CostDetails, CostType } from 'src/app/sharings/models/cost-details';
import { DateTime } from 'src/app/sharings/models/date-time';
import { CostService } from '../CostServices/cost.service';

@Component({
  selector: 'app-modal-content-cost',
  templateUrl: './modal-content-cost.component.html',
  styleUrls: ['./modal-content-cost.component.css']
})
export class ModalContentCostComponent implements OnInit {
  form!: FormGroup;
  costTypes: CostType[] = null as any;
  isOkLoading = false;
  totalCost!: number;
  selectedValue!: number;
  @Input() data!: CostDetails;
  constructor(private formBuilder: FormBuilder,
    private costService: CostService,
    public generalService: GeneralHelperService,
    private modal: NzModalService,) {
    this.form = this.formBuilder.group({
      CostDescription: [null, [Validators.required, Validators.maxLength(100)]],
      CostTypeId: [null, [Validators.required]],
      Total: [null, [Validators.required, Validators.min(1000)]],

    })
  }

  ngOnInit(): void {
    //console.log(this.data);
    this.getCostType();
    if (this.data != null) {
      // this.selectedValue = this.data.costType.id;
      this.form = new FormGroup({
        CostDescription: new FormControl(this.data.costDescription, [Validators.required, Validators.maxLength(100)]),
        CostTypeId: new FormControl(this.data.costType.id, [Validators.required]),
        Total: new FormControl(this.data.total, [Validators.required, Validators.min(1000)]),
      });
    } else {
      console.log("ahihi");
      this.form = new FormGroup({
        CostDescription: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        CostTypeId: new FormControl('', [Validators.required]),
        Total: new FormControl('', [Validators.required, Validators.min(1000)]),
      });
    }
  }

  // submitForm(data) {
  //   for (const i in this.form.controls) {
  //     this.form.controls[i].markAsDirty();
  //     this.form.controls[i].updateValueAndValidity();
  //   }
  // }

  getCostType() {
    this.costService.getAllCostType().subscribe(
      (response) => {
        this.costTypes = response.data;
      },
      (error) => {
        this.generalService.handleError(error);
      }
    )
  }

  addNewCost(data: any) {
    if (this.form.valid) {
      // for (const i in this.form.controls) {
      //   this.form.controls[i].markAsDirty();
      //   this.form.controls[i].updateValueAndValidity();
      // }
      this.isOkLoading = true;
      this.costService.storeNewCost(data).subscribe(
        (respone) => {
          this.isOkLoading = false;
          console.log("data: --" + respone);
          this.modal.success({
            nzContent: 'Add new cost successfuly',
            nzOnOk: () => this.modal.closeAll()
          });
          // setTimeout(() => this.modal.closeAll(), 1000);
          console.log(respone.message);
        },
        (error) => {
          this.isOkLoading = false;
          console.log(error);
          // this.generalService.handleError(error);
        }
      )
    }
    // setTimeout(() => {
    //   this.isOkLoading = false;
    //   this.modal.closeAll();
    // }, 1000);
  }

  updateCost(data: any, id: string) {
    console.log("update");
  }

  getCreateTime(time: any) {
    //console.log(time);
    return this.generalService.getToStringTime(time);
  }
}
