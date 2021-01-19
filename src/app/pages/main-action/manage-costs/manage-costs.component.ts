import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-manage-costs',
  templateUrl: './manage-costs.component.html',
  styleUrls: ['./manage-costs.component.css']
})
export class ManageCostsComponent implements OnInit {
  titleComponent: string = 'Quản lý danh sách chi phí';
  @Output() abccccdss = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.abccccdss.emit(this.titleComponent);
  }

  getTitleComponent(): void {
    
  }
}
