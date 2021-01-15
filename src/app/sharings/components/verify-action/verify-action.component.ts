import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-verify-action',
  templateUrl: './verify-action.component.html',
  styleUrls: ['./verify-action.component.css']
})
export class VerifyActionComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<VerifyActionComponent>,
    @Inject(MAT_DIALOG_DATA) public  data:  any) { }

  ngOnInit() {
  }

}
