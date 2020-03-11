package com.hasitha.cardoor.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "car")
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String carName;

    @OneToMany
    private CarBrand carBrand;

    private String fuelType;
    private String gearType;

    private String carNumber;
    private String noOfPassengers;
    private Integer doorsCount;
    private Integer milegePerGaloon;
    private Boolean acNonAc;
    private Integer bagsCanHold;
    private BigDecimal pricePerHour;
    private Boolean availability;
    private Timestamp dateCreated;
}