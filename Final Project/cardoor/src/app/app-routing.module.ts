import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarsComponent } from './cars/cars.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {CardoorAuthGuardService} from './service/cardoor-auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cars', component: CarsComponent, canActivate:[CardoorAuthGuardService]},
  { path: 'booking', component: BookingComponent, canActivate: [CardoorAuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'logout', component: LogoutComponent, canActivate: [CardoorAuthGuardService]},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
