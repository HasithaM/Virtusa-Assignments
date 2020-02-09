package com.hasitha.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String greeting() {
		return "<h1>Hello from SpringBoot.</h1>";
	}

	@RequestMapping(value = "/employeeJSON", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Employee> getAllEmployeesToJSON() {
		return Employee.getAllEmployees();
	}

	@RequestMapping(value = "/employee", method = RequestMethod.POST)
	public Employee saveData(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}
}