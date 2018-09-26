import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetsDetailsComponent } from './datasets-details/datasets-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule

 } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationBarComponent } from './application-bar/application-bar.component';






@NgModule({
  declarations: [
    AppComponent,
    DatasetsComponent,
    DatasetsDetailsComponent,
    DashboardComponent,
    ApplicationBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule


  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}

