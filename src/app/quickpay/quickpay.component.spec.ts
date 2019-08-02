import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickpayComponent } from './quickpay.component';

describe('QuickpayComponent', () => {
  let component: QuickpayComponent;
  let fixture: ComponentFixture<QuickpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
