import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InformationdashboardComponent } from './informationdashboard/informationdashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  { path: '', component: InformationdashboardComponent},
  { path: 'login', component: LoginComponent},
{ path: 'registration', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
