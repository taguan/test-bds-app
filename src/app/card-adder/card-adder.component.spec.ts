import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdderComponent } from './card-adder.component';

describe('CardAdderComponent', () => {
  let component: CardAdderComponent;
  let fixture: ComponentFixture<CardAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
