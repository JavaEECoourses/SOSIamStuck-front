import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDepanneurComponent } from './espace-depanneur.component';

describe('EspaceDepanneurComponent', () => {
  let component: EspaceDepanneurComponent;
  let fixture: ComponentFixture<EspaceDepanneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceDepanneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceDepanneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
