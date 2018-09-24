import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Dataset } from '../dataset';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DatasetService } from '../datasets.service';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class DatasetsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // // define data
  // datasets: Dataset[];

  // create columns + table
  displayedColumns: string[] = ['select', 'name', 'site', 'description', 'isHuman', 'isPublic', 'reviewType', 'email'];
  dataSource: MatTableDataSource<Dataset>;
  selection = new SelectionModel<Dataset>(true, []);

  // Table Filters
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // Table Selection: whether the number of selected elements matches the total number of rows
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;

  }
  // Selects ALL rows if they are not all selected; otherwise clear selection
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor(private datasetService: DatasetService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getDatasets();
  }

  getDatasets(): void {
    this.datasetService.getDatasets()
      .subscribe(datasets => {
        this.dataSource = new MatTableDataSource<Dataset>(datasets.map(Dataset.parse));
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.cdr.markForCheck();
      });
  }
  selectRow(row) {
    console.log(row);
  }
}


