package com.hasitha.cardoor.repository;

import com.hasitha.cardoor.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Integer> {

}