package com.hasitha.training.salesmanager.repository;

import java.util.List;

import com.hasitha.training.salesmanager.model.Employee;

public interface EmployeeRepository {
	
	List<Employee> getAllEmployees();
}