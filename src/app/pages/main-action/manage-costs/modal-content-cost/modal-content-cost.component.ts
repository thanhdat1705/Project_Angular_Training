import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
    // this.form = this.formBuilder.group({
    //   CostDescription: [null, [Validators.required, Validators.maxLength(100)]],
    //   CostTypeId: [null, [Validators.required]],
    //   Total: [null, [Validators.required, Validators.min(1000)]],
    // })
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
      console.log("ahihi Validators");
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
        console.log(error);
        this.generalService.createErrorNotification(error);
      }
    )
  }

  addNewCost(data: any) {
      for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    if (this.form.valid) {
      this.isOkLoading = true;
      this.costService.storeNewCost(data).subscribe(
        (response) => {
          this.isOkLoading = false;
          console.log("data: --" + response);
          this.modal.success({
            nzContent: 'Thêm mới chi phí thành công',
            nzOnOk: () => this.modal.closeAll()
          });
          // setTimeout(() => this.modal.closeAll(), 1000);
          console.log(response.message);
        },
        (error) => {
          this.isOkLoading = false;
          console.log(error);
          this.generalService.createErrorNotification(error);
        }
      )
    }
  }

  updateCost(data: any, id: string) {
    if (this.form.valid) {
      this.isOkLoading = true;
      this.costService.updateCost(data, id).subscribe(
        (response) => {
          this.isOkLoading = false;
          this.modal.success({
            nzContent: 'Cập nhật thành công',
            nzOnOk: () => this.modal.closeAll()
          });
          console.log(response.message);
        },
        (error) => {
          this.isOkLoading = false;
          console.log(error);
          this.generalService.createErrorNotification(error);
        }
      )
    }
  }

  getCreateTime(time: any) {
    //console.log(time);
    return this.generalService.getToStringTime(time);
  }

  // onInput($event: { target: any; }) {
  //   if (!$event) {
  //     return;
  //   }
  //   const target = $event.target;
  //   console.log(target)
  //   const regexp = /^\d+$/;
  //   target.value = target.value.replace(regexp, '');
  //   console.log(target.value)
  // }
  // value = '';
  // @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;

  // onChange(value: string): void {
  //   this.updateValue(value);
  // }

  // // '.' at the end or only '-' in the input box.
  // onBlur(): void {
  //   if (this.value.charAt(this.value.length - 1) === '.' || this.value === '-') {
  //     this.updateValue(this.value.slice(0, -1));
  //   }
  // }

  // updateValue(value: string): void {
  //   const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
  //   if ((!isNaN(+value) && reg.test(value)) || value === '' || value === '-') {
  //     this.value = value;
  //   }
  //   this.inputElement!.nativeElement.value = this.value;
  // }
  // ahihi = "Nhập số và tối đa 1000 789";
}
