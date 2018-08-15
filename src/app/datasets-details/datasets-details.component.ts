import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../dataset';

@Component({
  selector: 'app-datasets-details',
  templateUrl: './datasets-details.component.html',
  styleUrls: ['./datasets-details.component.css']
})
export class DatasetsDetailsComponent implements OnInit {
  @Input() dataset: Dataset;

  constructor() { }

  ngOnInit() {
  }

}
