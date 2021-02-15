import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentCostTypeComponent } from './modal-content-cost-type.component';

describe('ModalContentCostTypeComponent', () => {
  let component: ModalContentCostTypeComponent;
  let fixture: ComponentFixture<ModalContentCostTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContentCostTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentCostTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
