export class UrlConfiguration {

  // UserService related URLs
  public static URL_LOGIN_USER = 'http://localhost:8595/user/login/';
  public static URL_REGISTER_USER = 'http://localhost:8595/user/user';
  public static URL_GET_USER = 'http://localhost:8595/user/email/';
  public static URL_GET_USER_BY_ID = 'http://localhost:8595/user/user/id/';
  public static URL_COUNT_ALL_USERS = 'http://localhost:8595/user/count';

  // CarService related URLs
  public static URL_ADD_CAR = 'http://localhost:7585/car/car';
  public static URL_UPDATE_CAR = 'http://localhost:7585/car/car';
  public static URL_DELETE_CAR = 'http://localhost:7585/car/delete/';
  public static URL_GET_CARS = 'http://localhost:7585/car/cars/';
  public static URL_GET_CAR_BY_ID = 'http://localhost:7585/car/car/';
  public static URL_COUNT_ALL_CARS = 'http://localhost:7585/car/cars/count';

  // BookingService related URLs
  public static URL_CREATE_BOOKING = 'http://localhost:6575/booking/book/';
  public static URL_UPDATE_BOOKING = 'http://localhost:6575/booking/book/';
  public static URL_GET_ONE_BOOKING = 'http://localhost:6575/booking/get/';
  public static URL_BOOKING_HISTORY = 'http://localhost:8595/user/get/booking/';
  public static URL_GET_ALL_BOOKINGS = 'http://localhost:6575/booking/get/bookings';
  public static URL_COMPLETE_BOOKING = 'http://localhost:6575/booking/complete/';
  public static URL_CANCEL_BOOKING = 'http://localhost:6575/booking/cancel/';
  public static URL_COUNT_ALL_BOOKINGS = 'http://localhost:6575/booking/count';

  // PaymentService related URLs
  public static URL_UPDATE_PAYMENT = 'http://localhost:5565/payment/pay/';
  public static URL_CREATE_REFUND_REQUEST = 'http://localhost:5565/payment/refund/';
  public static URL_GET_REFUND_REQUESTS = 'http://localhost:5565/payment/get/refund/1';
  public static URL_GET_PAYMENT_DETAILS_BY_CUSTOMER = 'http://localhost:5565/payment/get/customer/';
  public static URL_GET_ALL_PAYMENTS = 'http://localhost:5565/payment/get';
  public static URL_APPROVE_REFUND = 'http://localhost:5565/payment/approve/';
  public static URL_COUNT_ALL_REFUND_REQUESTS = 'http://localhost:5565/payment/count/refund';
  public static URL_GET_TOTAL_REVENUE = 'http://localhost:5565/payment/revenue';
  public static URL_IS_REFUND_PENDING = 'http://localhost:5565/payment/get/pending/';

  // Token related URLs
  public static URL_CHECK_TOKEN = 'http://localhost:8595/user/checktoken/';
  public static URL_REFRESH_TOKEN = 'http://localhost:8595/user/refreshtoken/';
}
