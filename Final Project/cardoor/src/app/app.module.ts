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
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LogoutComponent} from './logout/logout.component';
import {PaymentComponent} from './payment/payment.component';
import {AdminDashboardComponent} from './admin/admindashboard/admin-dashboard.component';
import {AdminSidebarComponent} from './admin/adminsidebar/admin-sidebar.component';
import {AdminFooterComponent} from './admin/adminfooter/admin-footer.component';
import {AdminNavbarComponent} from './admin/adminnavbar/admin-navbar.component';
import {ManagecarsComponent} from './admin/managecars/managecars.component';
import {CarListComponent} from './admin/carlist/car-list.component';
import {TokenInterceptorService} from './service/token-interceptor.service';
import {BookingHistoryComponent} from './booking/booking-history/booking-history.component';
import {AdminBookingsComponent} from './admin/adminbookings/admin-bookings.component';
import {RefundRequestsComponent} from './admin/refundrequests/refund-requests.component';
import { UserPaymentsComponent } from './admin/payments/user-payments.component';

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
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
    ManagecarsComponent,
    CarListComponent,
    BookingHistoryComponent,
    AdminBookingsComponent,
    RefundRequestsComponent,
    UserPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
