import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSec } from './nav-sec';

describe('NavSec', () => {
  let component: NavSec;
  let fixture: ComponentFixture<NavSec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
