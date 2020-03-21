package com.hasitha.cardoor.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "car_model")
@Data
public class CarModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String modelName;
    private String modelColor;

    public CarModel() {
    }

    public CarModel(String modelName, String modelColor) {
        this.modelName = modelName;
        this.modelColor = modelColor;
    }
}