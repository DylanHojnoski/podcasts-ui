import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuteIconComponent } from './mute-icon.component';

describe('MuteIconComponent', () => {
  let component: MuteIconComponent;
  let fixture: ComponentFixture<MuteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuteIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
