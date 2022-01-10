import { TestBed } from '@angular/core/testing';

import { Toastr } from './toastr.service';

describe('ToastrService', () => {
  let service: Toastr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function ToastrService(ToastrService: any): Toastr {
  throw new Error('Function not implemented.');
}

