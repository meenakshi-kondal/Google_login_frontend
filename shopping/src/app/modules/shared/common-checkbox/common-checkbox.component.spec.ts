import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCheckboxComponent } from './common-checkbox.component';

describe('CommonCheckboxComponent', () => {
  let component: CommonCheckboxComponent;
  let fixture: ComponentFixture<CommonCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
