import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownArrowIconComponent } from './down-arrow-icon.component';

describe('DownArrowIconComponent', () => {
  let component: DownArrowIconComponent;
  let fixture: ComponentFixture<DownArrowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownArrowIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
