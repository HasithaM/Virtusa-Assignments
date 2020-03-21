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
    private String carBrandName;
    private String carNumber;

    @OneToOne(cascade = CascadeType.ALL)
    private CarModel carModel;

    @OneToOne(cascade = CascadeType.ALL)
    private CarImages carImages;

    private String fuelType;
    private String gearType;
    private String noOfPassengers;
    private Integer doorsCount;
    private Integer mileagePerGallon;
    private Boolean acNonAc;
    private Integer bagsCanHold;
    private BigDecimal pricePerHour;
    private Boolean availability;
    private Timestamp dateCreated;

    public Car() {
    }

    public Car(String carBrandName, String carNumber, CarModel carModel, CarImages carImages, String fuelType, String gearType, String noOfPassengers, Integer doorsCount, Integer mileagePerGallon, Boolean acNonAc, Integer bagsCanHold, BigDecimal pricePerHour, Boolean availability, Timestamp dateCreated) {
        this.carBrandName = carBrandName;
        this.carNumber = carNumber;
        this.carModel = carModel;
        this.carImages = carImages;
        this.fuelType = fuelType;
        this.gearType = gearType;
        this.noOfPassengers = noOfPassengers;
        this.doorsCount = doorsCount;
        this.mileagePerGallon = mileagePerGallon;
        this.acNonAc = acNonAc;
        this.bagsCanHold = bagsCanHold;
        this.pricePerHour = pricePerHour;
        this.availability = availability;
        this.dateCreated = dateCreated;
    }
}