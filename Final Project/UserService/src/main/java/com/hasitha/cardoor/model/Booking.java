package com.hasitha.cardoor.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Booking {

    private Integer bookingID;
    private Integer carID;
    private Integer customerID;
    private String pickupLocation;
    private Timestamp fromDate;
    private Timestamp toDate;
    private Timestamp dateBooked;
    private String status; // b - booked, c - cancelled, x - done

    public Booking() {
    }

    public Booking(Integer bookingID, Integer carID, Integer customerID, String pickupLocation, Timestamp fromDate, Timestamp toDate, String status) {
        this.bookingID = bookingID;
        this.carID = carID;
        this.customerID = customerID;
        this.pickupLocation = pickupLocation;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.status = status;
    }
}