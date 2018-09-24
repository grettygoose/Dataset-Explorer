import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation  } from '@angular/core';
import { Dataset } from '../dataset';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatasetService } from '../datasets.service';


@Component({
  selector: 'app-datasets-details',
  templateUrl: './datasets-details.component.html',
  styleUrls: ['./datasets-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class DatasetsDetailsComponent implements OnInit {
  dataset: Dataset;
  datasets: Dataset[] = [];

  constructor(
    private route: ActivatedRoute,
    private datasetService: DatasetService,
    private location: Location
  ) { }

  ngOnInit(): void {
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

