package com.hasitha.springboot.service;

import java.util.List;

import com.hasitha.springboot.model.Allocation;

public interface AllocationService {
	
	List<Allocation> findByID(Integer employeeID);
	
	Allocation save(Allocation allocation);
}