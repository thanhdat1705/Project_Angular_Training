import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GeneralHelperService } from 'src/app/services/general-helper.service';
import { CostService } from '../../manage-costs/CostServices/cost.service';
import { CostTypeService } from '../CostTypeService/cost-type.service';

@Component({
  selector: 'app-modal-content-cost-type',
  templateUrl: './modal-content-cost-type.component.html',
  styleUrls: ['./modal-content-cost-type.component.css']
})
export class ModalContentCostTypeComponent implements OnInit {
  form!: FormGroup;
  isOkLoading = false;
  constructor(private formBuilder: FormBuilder,
    private costTypeService: CostTypeService,
    public generalService: GeneralHelperService,
    private modal: NzModalService,) {
    this.form = this.formBuilder.group({
      costTypeName: [null, [Validators.required]],

    })
  }
  ngOnInit(): void {
  }

  addNewCostType(data: any) {
    if (this.form.valid) {
      this.isOkLoading = true;
      this.costTypeService.storeNewCostType(data).subscribe(
        (response) => {
          this.isOkLoading = false;
          console.log("data: --" + response);
          this.modal.success({
            nzContent: 'Thêm mới loại chi phí thành công',
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

}
