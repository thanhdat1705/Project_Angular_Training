import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostTypeListManageComponent } from './cost-type-list-manage.component';

describe('CostTypeListManageComponent', () => {
  let component: CostTypeListManageComponent;
  let fixture: ComponentFixture<CostTypeListManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostTypeListManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostTypeListManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
