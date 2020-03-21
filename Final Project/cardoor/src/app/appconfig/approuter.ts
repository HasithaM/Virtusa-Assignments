export class Approuter {

  public static reloadHome() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port;
  }

  public static reloadAbout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/about';
  }

  public static reloadBooking(id: any) {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/booking?id=' + id;
  }

  public static reloadContact() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/contact';
  }

  public static reloadLogin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/login';
  }

  public static reloadCars() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/cars';
  }

  public static reloadRegister() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/register';
  }

  public static reloadNotFound() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/notfound';
  }

  public static reloadLogout() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/logout';
  }

  public static reloadAdmin() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin';
  }

  public static reloadAdminCars() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/cars';
  }

  public static reloadAdminManageCars() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/cars/manage';
  }

  public static reloadAdminBooking() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/bookings';
  }

  public static reloadAdminPayment() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/payments';
  }

  public static reloadAdminSettings() {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/admin/settings';
  }

  public static completePayment(id: any, pickUpLocation: any, pickUpDate: any, returnDate: any, payingAmount: any) {
    window.location.href = 'http://' + window.location.hostname + ':' + window.location.port + '/payment?car='
      + id + '&loc=' + pickUpLocation + '&pdate=' + pickUpDate + '&rdate' + returnDate + '&amount=' + payingAmount;
  }
}
