import { TestBed } from '@angular/core/testing';

import { FilarmonicaService } from './filarmonica.service';

describe('FilarmonicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilarmonicaService = TestBed.get(FilarmonicaService);
    expect(service).toBeTruthy();
  });
});
