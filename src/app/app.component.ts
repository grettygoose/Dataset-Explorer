import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dataset } from './dataset';
import { AppModel } from './app.model';
import { DatasetService } from './datasets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dataset Explorer';
  constructor() {
  }
}
