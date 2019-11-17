import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInitiativesComponent } from './our-initiatives.component';

describe('OurInitiativesComponent', () => {
  let component: OurInitiativesComponent;
  let fixture: ComponentFixture<OurInitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurInitiativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
