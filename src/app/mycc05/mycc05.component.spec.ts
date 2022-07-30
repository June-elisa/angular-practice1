import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycc05Component } from './mycc05.component';

describe('Mycc05Component', () => {
  let component: Mycc05Component;
  let fixture: ComponentFixture<Mycc05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mycc05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mycc05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
