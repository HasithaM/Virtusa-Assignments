package com.hasitha.training.salesmanager.service;

import java.util.List;

import com.hasitha.training.salesmanager.model.Employee;
import com.hasitha.training.salesmanager.repository.EmployeeRepository;
import com.hasitha.training.salesmanager.repository.HibernateEmployeeRepositoryImpl;

public class EmployeeServiceImpl implements EmployeeService {
	
	EmployeeRepository employeeRepository = new HibernateEmployeeRepositoryImpl();

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.getAllEmployees();
	}
}