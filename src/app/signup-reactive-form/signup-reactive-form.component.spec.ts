import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupReactiveFormComponent } from './signup-reactive-form.component';

describe('SignupReactiveFormComponent', () => {
  let component: SignupReactiveFormComponent;
  let fixture: ComponentFixture<SignupReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
