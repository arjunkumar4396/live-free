import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstruationChallengesComponent } from './menstruation-challenges.component';

describe('MenstruationChallengesComponent', () => {
  let component: MenstruationChallengesComponent;
  let fixture: ComponentFixture<MenstruationChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenstruationChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenstruationChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
