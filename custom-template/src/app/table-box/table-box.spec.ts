import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBox } from './table-box';

describe('TableBox', () => {
  let component: TableBox;
  let fixture: ComponentFixture<TableBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
