package com.hasitha.cardoor.repository;

import com.hasitha.cardoor.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Integer> {

    List<Car> findByCarBrandName(String carBrandName);
    Car findByCarNumber(String carNumber);

    @Query("SELECT carBrandName FROM Car")
    List<String> findAllCarBrandName();
}