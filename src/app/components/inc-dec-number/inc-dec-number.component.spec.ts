import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDecNumberComponent } from './inc-dec-number.component';

describe('IncDecNumberComponent', () => {
  let component: IncDecNumberComponent;
  let fixture: ComponentFixture<IncDecNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncDecNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncDecNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
