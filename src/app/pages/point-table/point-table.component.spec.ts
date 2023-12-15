import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTableComponent } from './point-table.component';

describe('PointTableComponent', () => {
  let component: PointTableComponent;
  let fixture: ComponentFixture<PointTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PointTableComponent]
    });
    fixture = TestBed.createComponent(PointTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
