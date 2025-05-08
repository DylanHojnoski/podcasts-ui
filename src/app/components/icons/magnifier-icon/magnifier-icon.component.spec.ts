import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifierIconComponent } from './magnifier-icon.component';

describe('MagnifierIconComponent', () => {
  let component: MagnifierIconComponent;
  let fixture: ComponentFixture<MagnifierIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnifierIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagnifierIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
