import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepanneurComponent } from './depanneur.component';

describe('DepanneurComponent', () => {
  let component: DepanneurComponent;
  let fixture: ComponentFixture<DepanneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepanneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepanneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
