import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoftodosComponent } from './listoftodos.component';

describe('ListoftodosComponent', () => {
  let component: ListoftodosComponent;
  let fixture: ComponentFixture<ListoftodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoftodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoftodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
