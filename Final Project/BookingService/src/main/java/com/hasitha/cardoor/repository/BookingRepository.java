package com.hasitha.cardoor.repository;

import com.hasitha.cardoor.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

    List<Booking> findByCustomerIdOrderByIdDesc(Integer customerId);

    List<Booking> findAllByOrderByIdDesc();
}