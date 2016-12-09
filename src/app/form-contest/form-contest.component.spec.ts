/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormContestComponent } from './form-contest.component';

describe('FormContestComponent', () => {
  let component: FormContestComponent;
  let fixture: ComponentFixture<FormContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
