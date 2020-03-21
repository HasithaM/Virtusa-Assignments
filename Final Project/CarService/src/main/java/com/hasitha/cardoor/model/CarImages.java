package com.hasitha.cardoor.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "car_images")
@Data
public class CarImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Lob
    private byte[] imageOne;
    @Lob
    private byte[] imageTwo;
    @Lob
    private byte[] imageThree;

    public CarImages() {
    }

    public CarImages(Integer id, byte[] imageOne, byte[] imageTwo, byte[] imageThree) {
        this.id = id;
        this.imageOne = imageOne;
        this.imageTwo = imageTwo;
        this.imageThree = imageThree;
    }
}