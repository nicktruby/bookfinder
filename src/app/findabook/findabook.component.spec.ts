import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindabookComponent } from './findabook.component';

describe('FindabookComponent', () => {
  let component: FindabookComponent;
  let fixture: ComponentFixture<FindabookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindabookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindabookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
