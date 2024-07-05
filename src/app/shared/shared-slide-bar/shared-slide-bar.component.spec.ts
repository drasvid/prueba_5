import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSlideBarComponent } from './shared-slide-bar.component';

describe('SharedSlideBarComponent', () => {
  let component: SharedSlideBarComponent;
  let fixture: ComponentFixture<SharedSlideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedSlideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedSlideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
