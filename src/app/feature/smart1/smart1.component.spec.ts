import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smart1Component } from './smart1.component';

describe('Smart1Component', () => {
  let component: Smart1Component;
  let fixture: ComponentFixture<Smart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
