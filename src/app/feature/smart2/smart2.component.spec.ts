import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smart2Component } from './smart2.component';

describe('Smart2Component', () => {
  let component: Smart2Component;
  let fixture: ComponentFixture<Smart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
