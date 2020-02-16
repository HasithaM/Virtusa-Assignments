package com.hasitha.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hasitha.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
}