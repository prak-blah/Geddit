import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
  {
    'path': '',
    'component': HomeComponent // The Default Route
},
  {
    'path': 'dashboard',
    'component': DashboardComponent // The Default Route
},
{
  'path': '**',
  'component': HomeComponent // The Default Route
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }