import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCover } from './front-cover';

describe('FrontCover', () => {
  let component: FrontCover;
  let fixture: ComponentFixture<FrontCover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontCover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontCover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
