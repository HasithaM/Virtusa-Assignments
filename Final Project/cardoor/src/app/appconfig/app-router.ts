import {isUndefined} from 'util';

export class AppRouter {

  public static reloadHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }

  public static reloadAbout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/about';
  }

  public static reloadCars(brand: string) {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/cars?brand=' + brand;
  }

  public static reloadBooking(id: any) {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/booking?id=' + id;
  }

  public static reloadBookingHistory() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/booking/history';
  }

  public static completePayment(id: any, pickUpLocation: any, pickUpDate: any, returnDate: any, payingAmount: any, totalAmount: any) {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/payment?car='
      + id + '&loc=' + pickUpLocation + '&pdate=' + pickUpDate + '&rdate=' + returnDate + '&amount=' + payingAmount + '&tot=' + totalAmount;
  }

  public static reloadContact() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/contact';
  }

  public static reloadLogin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/login';
  }

  public static reloadRegister() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/register';
  }

  public static reloadLogout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/logout';
  }

  public static reloadNotFound() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/notfound';
  }

  public static reloadAdmin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin';
  }

  public static reloadAdminCars() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/cars';
  }

  public static reloadAdminManageCars(id: number, method: string) {
    if (method === 'update' && id !== null && !isUndefined(id)) {
      window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/cars/manage?method=update&id=' + id;
    } else if (method === 'delete' && id !== null && !isUndefined(id)) {
      window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/cars/manage?method=delete&id=' + id;
    } else if (method === 'create' && id === 0 && !isUndefined(id)) {
      window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/cars/manage';
    }
  }

  public static reloadAdminBooking() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/bookings';
  }

  public static reloadAdminPayment() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/payments';
  }

  public static reloadAdminRefund() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/refunds';
  }

  public static reloadAdminProfile() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/profile';
  }

  public static reloadAdminSettings() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/settings';
  }
}
