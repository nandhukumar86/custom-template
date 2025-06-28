import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4Page } from './a4-page';

describe('A4Page', () => {
  let component: A4Page;
  let fixture: ComponentFixture<A4Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A4Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
