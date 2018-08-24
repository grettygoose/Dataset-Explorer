import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


@Component({
  selector: 'app-application-bar',
  templateUrl: './application-bar.component.html',
  styleUrls: ['./application-bar.component.scss']
})
export class ApplicationBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;


  constructor() { }

  ngOnInit() {

  }

}
