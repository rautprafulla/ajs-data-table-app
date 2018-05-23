
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable2Component } from './data-table2.component';

describe('DataTable2Component', () => {
  let component: DataTable2Component;
  let fixture: ComponentFixture<DataTable2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
