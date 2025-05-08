import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipForwardIconComponent } from './skip-forward-icon.component';

describe('SkipForwardIconComponent', () => {
  let component: SkipForwardIconComponent;
  let fixture: ComponentFixture<SkipForwardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipForwardIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkipForwardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
