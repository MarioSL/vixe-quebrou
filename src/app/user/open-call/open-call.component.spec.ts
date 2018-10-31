import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCallComponent } from './open-call.component';

describe('OpenCallComponent', () => {
  let component: OpenCallComponent;
  let fixture: ComponentFixture<OpenCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
