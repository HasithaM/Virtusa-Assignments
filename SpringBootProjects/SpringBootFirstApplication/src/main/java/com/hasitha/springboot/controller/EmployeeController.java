package com.hasitha.springboot.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hasitha.springboot.model.Employee;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@RequestMapping("/hello")
	public String greeting() {
		return "<h1>Hello from SpringBoot.</h1>";
	}

	@RequestMapping(value = "/employeeJSON", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Employee> getAllEmployeesToJSON() {
		return Employee.getAllEmployees();
	}

	@RequestMapping(value = "/employeeXML", produces = MediaType.APPLICATION_XML_VALUE)
	public List<Employee> getAllEmployeesToXML() {
		return Employee.getAllEmployees();
	}

	@RequestMapping(value = "/employee/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Employee getEmployee(@PathVariable int id) {
		return Employee.getEmployeeByID(id);
	}
}