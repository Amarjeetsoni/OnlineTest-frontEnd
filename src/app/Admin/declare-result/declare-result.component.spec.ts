import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareResultComponent } from './declare-result.component';

describe('DeclareResultComponent', () => {
  let component: DeclareResultComponent;
  let fixture: ComponentFixture<DeclareResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclareResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
