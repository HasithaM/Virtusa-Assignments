package com.hasitha.cardoor.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "payment")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer bookingId;
    private Integer customerId;
    private BigDecimal payedAmount;
    private BigDecimal totalRentPrice;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime paymentDate;

    private Integer refundRequest; // 1 - need refund, 0 - done refund
    private String status; // p - payed (full payment), r - refunded, h - half payment

    @Transient
    private User user;
}
