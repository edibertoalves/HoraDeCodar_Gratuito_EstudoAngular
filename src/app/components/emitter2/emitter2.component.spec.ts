import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emitter2Component } from './emitter2.component';

describe('Emitter2Component', () => {
  let component: Emitter2Component;
  let fixture: ComponentFixture<Emitter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emitter2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emitter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
