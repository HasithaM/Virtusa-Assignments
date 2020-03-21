import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CarsComponent} from './cars/cars.component';
import {BookingComponent} from './booking/booking.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {CardoorAuthGuardService} from './service/cardoor-auth-guard.service';
import {PaymentComponent} from './payment/payment.component';
import {AdmindashboardComponent} from './admin/admindashboard/admindashboard.component';
import {ManagecarsComponent} from './admin/managecars/managecars.component';
import {BookingHistoryComponent} from './booking/booking-history/booking-history.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cars', component: CarsComponent/*, canActivate: [CardoorAuthGuardService]*/},
  {path: 'booking', component: BookingComponent/*, canActivate: [CardoorAuthGuardService]*/},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [CardoorAuthGuardService]},
  {path: 'payment', component: PaymentComponent, canActivate: [CardoorAuthGuardService]},
  {path: 'admin', component: AdmindashboardComponent/*, canActivate: [CardoorAuthGuardService]*/},
  {path: 'admin/cars/manage', component: ManagecarsComponent/*, canActivate: [CardoorAuthGuardService]*/},
  {path: 'booking/history', component: BookingHistoryComponent/*, canActivate: [CardoorAuthGuardService]*/},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
