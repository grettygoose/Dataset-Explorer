import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Dataset } from '../dataset';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DatasetService } from '../datasets.service';
import { SelectionModel } from '@angular/cdk/collections';
import { DATASETS } from '../mock-datasets';


@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class DatasetsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // highlight selection
  highlightedRows = [];
  selectedDataset: Dataset;
  // define data
  datasets: Dataset[];

  /** create columns + table  */
  displayedColumns: string[] = ['select', 'name', 'description', 'isHuman', 'isPhi', 'isPublic', 'status', 'email'];
  dataSource = new MatTableDataSource<Dataset>(DATASETS);
  selection = new SelectionModel<Dataset>(true, []);
  

  // for table filters
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;

  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor(private datasetService: DatasetService) {
    //  might be hack for nested JSON classes?
    this.dataSource.filterPredicate = (data, filter) => {
      let valid = false;

      const transformedFilter = filter.trim().toLowerCase();

      Object.keys(data).map(key => {
        if (
          key === 'content' &&
          (data.content.name.toLowerCase().includes(transformedFilter) ||
          ('' + data.content.isHuman).toLowerCase().includes(transformedFilter) ||
          ('' + data.content.isPhi).toLowerCase().includes(transformedFilter) ||
          ('' + data.content.isPublic).toLowerCase().includes(transformedFilter) ||
          ('' + data.content.name).toLowerCase().includes(transformedFilter) ||
          ('' + data.content.description).toLowerCase().includes(transformedFilter) ||
          ('' + data.content.status).toLowerCase().includes(transformedFilter))
        ) {
          valid = true;
        } else {
          if (('' + data[key]).toLowerCase().includes(transformedFilter)) {
            valid = true;
          }
        }
      });

      return valid;
    };

   }

  ngOnInit() {
    this.getDatasets();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  onSelect(datasets: Dataset): void {
    this.selectedDataset = datasets;
  }

  getDatasets(): void {
    this.datasetService.getDatasets()
      .subscribe(datasets => this.datasets = datasets);
  }




}


