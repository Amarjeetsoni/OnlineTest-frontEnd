import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPerformerComponent } from './top-performer.component';

describe('TopPerformerComponent', () => {
  let component: TopPerformerComponent;
  let fixture: ComponentFixture<TopPerformerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPerformerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
