import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowyComponent } from './nowy.component';

describe('NowyComponent', () => {
  let component: NowyComponent;
  let fixture: ComponentFixture<NowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
