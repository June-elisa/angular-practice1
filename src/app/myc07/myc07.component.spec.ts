import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc07Component } from './myc07.component';

describe('Myc07Component', () => {
  let component: Myc07Component;
  let fixture: ComponentFixture<Myc07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myc07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
