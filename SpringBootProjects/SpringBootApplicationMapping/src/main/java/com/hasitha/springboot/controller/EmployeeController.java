package com.hasitha.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hasitha.springboot.model.Employee;
import com.hasitha.springboot.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@RequestMapping(value = "/employeeJSON")
	public List<Employee> getAllEmployees() {
		return Employee.getAllEmployees();
	}
	
	@RequestMapping(value = "/employee", method = RequestMethod.POST)
	public Employee saveData(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}
}