package com.hasitha.cardoor.model;

import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
public class Payment {

    private Integer paymentID;
    private Integer bookingID;
    private Integer customerID;
    private BigDecimal amount;
    private Timestamp paymentDate;
    private String status; // p - payed, r - refunded, c - cancelled

    public Payment() {
    }

    public Payment(Integer paymentID, Integer bookingID, Integer customerID, BigDecimal amount, Timestamp paymentDate, String status) {
        this.paymentID = paymentID;
        this.bookingID = bookingID;
        this.customerID = customerID;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.status = status;
    }
}