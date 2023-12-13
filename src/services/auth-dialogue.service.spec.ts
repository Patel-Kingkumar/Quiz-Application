import { TestBed } from '@angular/core/testing';

import { AuthDialogueService } from './auth-dialogue.service';

describe('AuthDialogueService', () => {
  let service: AuthDialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
