package com.hasitha.springboot.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hasitha.springboot.model.Employee;

@RestController
@RequestMapping("/service")
public class EmployeeController {
	
	@RequestMapping("/hello")
	public String greeting() {
		return "<h1>Hello from SpringBoot.</h1>";
	}
	
	@RequestMapping(value = "/employeesJSON", produces = { "application/json"})
	public List<Employee> getAllEmployeesToJSON() {
		return Employee.getAllEmployees();
	}
	
	@RequestMapping(value = "/employeesXML", produces = { "application/xml"})
	public List<Employee> getAllEmployeesToXML() {
		return Employee.getAllEmployees();
	}
}