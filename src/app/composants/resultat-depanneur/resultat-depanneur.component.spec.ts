import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatDepanneurComponent } from './resultat-depanneur.component';

describe('ResultatDepanneurComponent', () => {
  let component: ResultatDepanneurComponent;
  let fixture: ComponentFixture<ResultatDepanneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatDepanneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatDepanneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
