import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetsDetailsComponent } from './datasets-details/datasets-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/datasets', pathMatch: 'full' },
  { path: 'datasets', component: DatasetsComponent },
  { path: 'datasets-details/:content.name', component: DatasetsDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




