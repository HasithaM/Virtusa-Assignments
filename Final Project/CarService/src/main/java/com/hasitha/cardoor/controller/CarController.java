package com.hasitha.cardoor.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hasitha.cardoor.model.APIResponse;
import com.hasitha.cardoor.model.Car;
import com.hasitha.cardoor.model.CarImages;
import com.hasitha.cardoor.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/car")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping(value = "/car")
    public APIResponse saveCar(@RequestParam("imageOne") MultipartFile multipartFileOne, @RequestParam("imageTwo") MultipartFile multipartFileTwo, @RequestParam("imageThree") MultipartFile multipartFileThree, @RequestParam("car") String car) throws IOException {
        Car updatedCar = new ObjectMapper().readValue(car, Car.class);

        CarImages carImages = new CarImages();
        carImages.setImageOne(multipartFileOne.getBytes());
        carImages.setImageTwo(multipartFileTwo.getBytes());
        carImages.setImageThree(multipartFileThree.getBytes());

        updatedCar.setCarImages(carImages);

        return carService.saveCar(updatedCar);
    }

    @PutMapping(value = "/car/{carId}")
    public APIResponse updateCar(@RequestParam("imageOne") MultipartFile multipartFileOne, @RequestParam("imageTwo") MultipartFile multipartFileTwo, @RequestParam("imageThree") MultipartFile multipartFileThree, @RequestParam("car") String car, @PathVariable Integer carId) throws IOException {
        Car updatedCar = new ObjectMapper().readValue(car, Car.class);

        CarImages carImages = new CarImages();

        if (!multipartFileOne.isEmpty() && multipartFileOne.getSize() > 0) {
            carImages.setImageOne(multipartFileOne.getBytes());
            updatedCar.setCarImages(carImages);
        }

        if (!multipartFileTwo.isEmpty() && multipartFileTwo.getSize() > 0) {
            carImages.setImageTwo(multipartFileTwo.getBytes());
            updatedCar.setCarImages(carImages);
        }

        if (!multipartFileThree.isEmpty() && multipartFileThree.getSize() > 0) {
            carImages.setImageThree(multipartFileThree.getBytes());
            updatedCar.setCarImages(carImages);
        }

        return carService.updateCar(updatedCar);
    }

    @DeleteMapping(value = "/car/{carId}")
    public APIResponse deleteCar(@PathVariable Integer carId) {
        return carService.deleteCar(carId);
    }

    @GetMapping(value = "/cars/{brandName}")
    public List<Car> getCarsByBrandName(@PathVariable String brandName) {
        return carService.getCarsByBrandName(brandName);
    }

    @GetMapping(value = "/cars/brand")
    public List<String> getAllCarBrands() {
        return carService.getAllCarBrandNames();
    }

    @GetMapping(value = "/cars/count")
    public Long countAllCars() {
        return carService.countAllCars();
    }

    @GetMapping(value = "/car/{carId}")
    public Optional<Car> getCarById(@PathVariable Integer carId) {
        return carService.findById(carId);
    }
}