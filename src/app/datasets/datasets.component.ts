import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DatasetService } from '../datasets.service';



@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})

export class DatasetsComponent implements OnInit {

  // highlight selection
  selectedDataset: Dataset;
  // define data
  datasets: Dataset[];
  // create table
  // dataSource: MatTableDataSource<Dataset>;
  dataSource = new MatTableDataSource(this.datasets);
  // create columns
  displayedColumns: string[] = ['name', 'description', 'isHuman', 'isPhi', 'isPublic', 'reviewNumber', 'status', 'email'];

  // apply table filters

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private datasetService: DatasetService) {
    // this.dataSource.filterPredicate = (data, filter) => {
    //   let valid = false;

    //   const transformedFilter = filter.trim().toLowerCase();

    //   Object.keys(data).map(key => {
    //     if (
    //       key === 'content' &&
    //       (data.content.name.toLowerCase().includes(transformedFilter) ||
    //       ('' + data.content.isHuman).toLowerCase().includes(transformedFilter) ||
    //       ('' + data.content.isPhi).toLowerCase().includes(transformedFilter) ||
    //       ('' + data.content.isPublic).toLowerCase().includes(transformedFilter) ||
    //       ('' + data.content.name).toLowerCase().includes(transformedFilter) ||
    //       ('' + data.content.reviewNumber).toLowerCase().includes(transformedFilter) ||
    //       ('' + data.content.status).toLowerCase().includes(transformedFilter))
    //     ) {
    //       valid = true;
    //     } else {
    //       if (('' + data[key]).toLowerCase().includes(transformedFilter)) {
    //         valid = true;
    //       }
    //     }
    //   });

    //   return valid;
    // };

   }

 

  ngOnInit() {
    this.getDatasets();
  }

  onSelect(datasets: Dataset): void {
    this.selectedDataset = datasets;
  }

  getDatasets(): void {
    this.datasetService.getDatasets()
      .subscribe(datasets => this.datasets = datasets);
  }

}


