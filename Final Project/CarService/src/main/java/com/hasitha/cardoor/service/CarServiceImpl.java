package com.hasitha.cardoor.service;

import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.Car;
import com.hasitha.cardoor.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepository carRepository;

    @Override
    public Optional<Car> findById(Integer id) {
        return carRepository.findById(id);
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public List<Car> getCarsByBrandName(String brandName) {
        if (brandName.equals("all"))
            return getAllCars();
        else
            return carRepository.findByCarBrandName(brandName);
    }

    @Override
    public APIResponse saveCar(Car car) {
        Car dbCar = carRepository.findByCarNumber(car.getCarNumber());

        if (dbCar == null) {
            car.setAvailability(Boolean.TRUE);
            car.setDateCreated(new Timestamp(System.currentTimeMillis()));
            Car createdCar = carRepository.save(car);

            if (createdCar != null)
                return new APIResponse(200, "Successful!");
            else
                return new APIResponse(404, "Unsuccessful!");
        } else {
            return new APIResponse(404, "Car Exists!");
        }
    }

    @Override
    public APIResponse updateCar(Car car) {
        Car updatedCar = carRepository.findByCarNumber(car.getCarNumber());

        if (updatedCar != null) {
            Car newCar = carRepository.save(updatedCar);

            if (newCar != null) {
                return new APIResponse(200, "Successful!");
            } else {
                return new APIResponse(404, "Unsuccessful!");
            }
        } else {
            return new APIResponse(404, "No Car!");
        }
    }

    @Override
    public APIResponse deleteCar(Integer carId) {
        if (carRepository.existsById(carId)) {
            carRepository.deleteById(carId);

            return new APIResponse(200, "Successful!");
        } else
            return new APIResponse(404, "No Car!");
    }

    @Override
    public Long countAllCars() {
        return carRepository.count();
    }

    @Override
    public List<String> getAllCarBrandNames() {
        return carRepository.findAllCarBrandName();
    }
}