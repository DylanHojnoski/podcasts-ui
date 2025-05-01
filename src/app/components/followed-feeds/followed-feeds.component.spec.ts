import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedFeedsComponent } from './followed-feeds.component';

describe('FollowedFeedsComponent', () => {
  let component: FollowedFeedsComponent;
  let fixture: ComponentFixture<FollowedFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowedFeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowedFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
