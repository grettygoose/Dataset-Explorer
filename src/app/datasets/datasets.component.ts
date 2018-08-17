import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { DATASETS } from '../mock-datasets';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})

export class DatasetsComponent implements OnInit {
 // declare datasets
  datasets = DATASETS;
  selectedDataset: Dataset;

  // filter for table
  displayedColumns: string[] = ['name', 'description', 'isHuman', 'isPhi', 'isPublic', 'reviewNumber', 'status', 'email'];
  dataSource = new MatTableDataSource(DATASETS);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

  onSelect(datasets: Dataset): void {
    this.selectedDataset = datasets;
  }

}

