import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InformationdashboardComponent } from './informationdashboard/informationdashboard.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: InformationdashboardComponent},
{ path: 'registration', component: RegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }