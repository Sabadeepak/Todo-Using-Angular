import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnprogressTaskComponent } from './onprogress-task.component';

describe('OnprogressTaskComponent', () => {
  let component: OnprogressTaskComponent;
  let fixture: ComponentFixture<OnprogressTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnprogressTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnprogressTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
