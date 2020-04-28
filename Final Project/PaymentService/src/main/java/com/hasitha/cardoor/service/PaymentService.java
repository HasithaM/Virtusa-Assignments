package com.hasitha.cardoor.service;

import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.Payment;

import java.math.BigDecimal;
import java.util.List;

public interface PaymentService {

    APIResponse createPayment(Payment payment);

    APIResponse updatePayment(Integer bookingId, Payment payment);

    APIResponse createRefundRequest(Integer bookingId);

    APIResponse approveRefund(Integer paymentId);

    APIResponse isRefundPending(Integer bookingId);

    Payment getPaymentDetails(Integer bookingId);

    Long countRefundRequests();

    BigDecimal getTotalRevenue();

    List<Payment> getPaymentDetailsByCustomer(Integer customerId);

    List<Payment> getRefundRequests(Integer refundRequest, String authorization);

    List<Payment> getAllPaymentDetails(String authorization);
}
