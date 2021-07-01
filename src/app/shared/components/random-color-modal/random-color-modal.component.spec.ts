import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomColorModalComponent } from './random-color-modal.component';

describe('RandomColorModalComponent', () => {
  let component: RandomColorModalComponent;
  let fixture: ComponentFixture<RandomColorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomColorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomColorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
