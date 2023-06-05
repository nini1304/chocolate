import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientproductsComponent } from './clientproducts.component';

describe('ClientproductsComponent', () => {
  let component: ClientproductsComponent;
  let fixture: ComponentFixture<ClientproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
