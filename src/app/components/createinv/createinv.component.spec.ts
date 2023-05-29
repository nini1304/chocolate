import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinvComponent } from './createinv.component';

describe('CreateinvComponent', () => {
  let component: CreateinvComponent;
  let fixture: ComponentFixture<CreateinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
