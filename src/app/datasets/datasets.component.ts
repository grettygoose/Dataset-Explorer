import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { DATASETS } from '../mock-datasets';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {

  datasets = DATASETS;

  selectedDataset: Dataset;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dataset: Dataset): void {
    this.selectedDataset = dataset;
  }

}
