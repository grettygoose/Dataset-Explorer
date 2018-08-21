import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Dataset } from '../dataset';
import { DatasetService } from '../datasets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  datasets: Dataset[] = [];

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.getDatasets();
  }

  getDatasets(): void {
    this.datasetService.getDatasets()
      .subscribe(datasets => this.datasets = datasets.slice(1, 5));
  }
}

