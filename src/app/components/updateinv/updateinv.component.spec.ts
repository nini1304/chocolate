import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinvComponent } from './updateinv.component';

describe('UpdateinvComponent', () => {
  let component: UpdateinvComponent;
  let fixture: ComponentFixture<UpdateinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateinvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
