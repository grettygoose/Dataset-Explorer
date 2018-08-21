import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation  } from '@angular/core';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-datasets-details',
  templateUrl: './datasets-details.component.html',
  styleUrls: ['./datasets-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class DatasetsDetailsComponent implements OnInit {
  @Input() dataset: Dataset;

  constructor() { }

  ngOnInit() {
  }

}
