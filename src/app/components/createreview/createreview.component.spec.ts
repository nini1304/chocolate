import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereviewComponent } from './createreview.component';

describe('CreatereviewComponent', () => {
  let component: CreatereviewComponent;
  let fixture: ComponentFixture<CreatereviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
