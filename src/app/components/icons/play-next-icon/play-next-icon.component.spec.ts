import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayNextIconComponent } from './play-next-icon.component';

describe('PlayNextIconComponent', () => {
  let component: PlayNextIconComponent;
  let fixture: ComponentFixture<PlayNextIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayNextIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayNextIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
