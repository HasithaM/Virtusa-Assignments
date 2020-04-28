package com.hasitha.cardoor.service;

import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.Car;

import java.util.List;
import java.util.Optional;

public interface CarService {

    Optional<Car> findById(Integer id);

    List<Car> getAllCars();

    List<Car> getCarsByBrandName(String brandName);

    APIResponse saveCar(Car car);

    APIResponse updateCar(Car car);

    APIResponse deleteCar(Integer carId);

    APIResponse makeCarUnavailable(Integer carId);

    APIResponse makeCarAvailable(Integer carId);

    Long countAllCars();

    List<String> getAllCarBrandNames();
}