import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipBackwardIconComponent } from './skip-backward-icon.component';

describe('SkipBackwardIconComponent', () => {
  let component: SkipBackwardIconComponent;
  let fixture: ComponentFixture<SkipBackwardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipBackwardIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkipBackwardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
