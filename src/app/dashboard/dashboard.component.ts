import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Dataset } from '../dataset';
import { DatasetService } from '../datasets.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  datasets: Dataset[] = [];

  constructor(
    private datasetService: DatasetService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getDatasets();
  }

  getDatasets(): void {
    const id = +this.route.snapshot.paramMap.get('name');
    this.datasetService.getDatasets()
      .subscribe(datasets => this.datasets = datasets);
  }
  goBack(): void {
    this.location.back();
  }
}

