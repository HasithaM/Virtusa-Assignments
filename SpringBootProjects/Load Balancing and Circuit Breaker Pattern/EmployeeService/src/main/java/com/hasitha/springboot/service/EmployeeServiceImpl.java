package com.hasitha.springboot.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hasitha.springboot.hystrix.AllocationCommand;
import com.hasitha.springboot.model.Employee;
import com.hasitha.springboot.model.Telephone;
import com.hasitha.springboot.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Autowired
	RestTemplate restTemplate;

	@LoadBalanced
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

	@Override
	public Employee save(Employee employee) {

		for (Telephone telephone : employee.getTelephonesList()) {
			telephone.setEmployee(employee);
		}

		return employeeRepository.save(employee);
	}

	@Override
	public Optional<Employee> findByID(int employeeID) {
		return employeeRepository.findById(employeeID);
	}

	@Override
	public Employee fetchAllFromEmployee(int employeeID) {
		HttpHeaders httpHeaders = new HttpHeaders();
		Optional<Employee> employeeOptional = employeeRepository.findById(employeeID);

		if (employeeOptional.isPresent()) {
			Employee employee = employeeOptional.get();

			AllocationCommand allocationCommand = new AllocationCommand(employee, httpHeaders, restTemplate);
			
			employee.setAllocations(allocationCommand.execute());
			
			return employee;
		}

		return null;
	}
}