import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clocking } from './clocking';

describe('Clocking', () => {
  let component: Clocking;
  let fixture: ComponentFixture<Clocking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clocking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clocking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
