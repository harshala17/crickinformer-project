import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCardComponent } from './match-card.component';

describe('MatchCardComponent', () => {
  let component: MatchCardComponent;
  let fixture: ComponentFixture<MatchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatchCardComponent]
    });
    fixture = TestBed.createComponent(MatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
