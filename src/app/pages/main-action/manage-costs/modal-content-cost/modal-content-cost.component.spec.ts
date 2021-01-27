import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentCostComponent } from './modal-content-cost.component';

describe('ModalContentCostComponent', () => {
  let component: ModalContentCostComponent;
  let fixture: ComponentFixture<ModalContentCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContentCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
