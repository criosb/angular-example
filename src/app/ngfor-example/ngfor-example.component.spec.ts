import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforExampleComponent } from './ngfor-example.component';

describe('NgforExampleComponent', () => {
  let component: NgforExampleComponent;
  let fixture: ComponentFixture<NgforExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
