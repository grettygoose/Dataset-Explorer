import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetsDetailsComponent } from './datasets-details/datasets-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasetsComponent,
    DatasetsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
