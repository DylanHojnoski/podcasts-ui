import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpArrowIconComponent } from './up-arrow-icon.component';

describe('UpArrowIconComponent', () => {
  let component: UpArrowIconComponent;
  let fixture: ComponentFixture<UpArrowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpArrowIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
