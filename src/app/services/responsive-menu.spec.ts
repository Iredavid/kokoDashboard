import { TestBed } from '@angular/core/testing';

import { ResponsiveMenu } from './responsive-menu';

describe('ResponsiveMenu', () => {
  let service: ResponsiveMenu;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveMenu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
