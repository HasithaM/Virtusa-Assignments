import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ContactComponent} from './contact/contact.component';
import {CarsComponent} from './cars/cars.component';
import {BookingComponent} from './booking/booking.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LogoutComponent} from './logout/logout.component';
import {PaymentComponent} from './payment/payment.component';
import {AdmindashboardComponent} from './admin/admindashboard/admindashboard.component';
import {AdminsidebarComponent} from './admin/adminsidebar/adminsidebar.component';
import {AdminfooterComponent} from './admin/adminfooter/adminfooter.component';
import {AdminnavbarComponent} from './admin/adminnavbar/adminnavbar.component';
import {ManagecarsComponent} from './admin/managecars/managecars.component';
import {CarlistComponent} from './admin/carlist/carlist.component';
import {TokenInterceptorService} from './service/token-interceptor.service';
import { BookingHistoryComponent } from './booking/booking-history/booking-history.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    CarsComponent,
    BookingComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    PaymentComponent,
    AdmindashboardComponent,
    AdminsidebarComponent,
    AdminfooterComponent,
    AdminnavbarComponent,
    ManagecarsComponent,
    CarlistComponent,
    BookingHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
