import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort , MatTableDataSource} from '@angular/material';
import { DataTable2DataSource } from './data-table2-datasource';

@Component({
  selector: 'data-table2',
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.css']
})
export class DataTable2Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: DataTable2DataSource;

  dataSource = new MatTableDataSource(EXAMPLE_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface DataTable3Item {
  name: string;
  id: number;
}

const EXAMPLE_DATA: DataTable3Item[] = [
  {id: 1, name: 'prafulla'},
  {id: 2, name: 'raut'}
];