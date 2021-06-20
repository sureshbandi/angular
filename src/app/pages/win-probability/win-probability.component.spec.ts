import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinProbabilityComponent } from './win-probability.component';

describe('WinProbabilityComponent', () => {
  let component: WinProbabilityComponent;
  let fixture: ComponentFixture<WinProbabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinProbabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
