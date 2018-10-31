import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCallComponent } from './item-call.component';

describe('ItemCallComponent', () => {
  let component: ItemCallComponent;
  let fixture: ComponentFixture<ItemCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
