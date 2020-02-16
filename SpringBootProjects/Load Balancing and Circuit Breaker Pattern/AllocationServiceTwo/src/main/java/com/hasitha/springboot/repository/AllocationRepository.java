package com.hasitha.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hasitha.springboot.model.Allocation;

public interface AllocationRepository extends JpaRepository<Allocation, Integer> {
	
}