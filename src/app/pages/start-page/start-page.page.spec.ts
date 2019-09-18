import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPagePage } from './start-page.page';

describe('StartPagePage', () => {
  let component: StartPagePage;
  let fixture: ComponentFixture<StartPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
