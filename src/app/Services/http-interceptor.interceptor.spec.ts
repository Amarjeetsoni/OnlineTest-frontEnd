import { TestBed } from '@angular/core/testing';

import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInterceptorInterceptor = TestBed.get(HttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
