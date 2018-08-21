import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { MatTableDataSource } from '@angular/material';
import { DatasetService } from '../datasets.service';



@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})

export class DatasetsComponent implements OnInit {

  selectedDataset: Dataset;
  datasets: Dataset[];


  // filter for table
  displayedColumns: string[] = ['name', 'description', 'isHuman', 'isPhi', 'isPublic', 'reviewNumber', 'status', 'email'];
  dataSource = new MatTableDataSource(this.datasets);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private datasetService: DatasetService) { }

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


