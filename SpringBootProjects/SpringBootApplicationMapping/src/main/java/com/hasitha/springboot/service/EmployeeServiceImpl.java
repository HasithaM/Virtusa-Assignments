package com.hasitha.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hasitha.springboot.model.Employee;
import com.hasitha.springboot.model.Telephone;
import com.hasitha.springboot.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public Employee save(Employee employee) {
		
		for(Telephone telephone : employee.getTelephonesList()) {
			telephone.setEmployee(employee);
		}
		
		return employeeRepository.save(employee);
	}
}