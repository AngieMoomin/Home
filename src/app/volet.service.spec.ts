import { TestBed, inject } from '@angular/core/testing';

import { VoletService } from './volet.service';

describe('VoletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoletService]
    });
  });

  it('should be created', inject([VoletService], (service: VoletService) => {
    expect(service).toBeTruthy();
  }));
});
