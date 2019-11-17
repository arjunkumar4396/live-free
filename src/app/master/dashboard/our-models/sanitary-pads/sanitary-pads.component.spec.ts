import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryPadsComponent } from './sanitary-pads.component';

describe('SanitaryPadsComponent', () => {
  let component: SanitaryPadsComponent;
  let fixture: ComponentFixture<SanitaryPadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryPadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
