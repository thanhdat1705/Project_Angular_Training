import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-action',
  templateUrl: './main-action.component.html',
  styleUrls: ['./main-action.component.css']
})
export class MainActionComponent implements OnInit {
  title = 'SampleAngularProject';
  titleComponent: string = "";
  constructor() { }

  isCollapsed = false;
  ngOnInit() {

  }

  test(a: any){
    this.titleComponent = a;
  }
}
