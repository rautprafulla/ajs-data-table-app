import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule,
   MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,MatTabsModule
   ,MatTableDataSource} 
   from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import { TableOverviewExample } from './table-filter/table-overview-example';
import { DataTable2Component } from './data-table2/data-table2.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTable2Component,
    TableOverviewExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
