package com.hasitha.springboot.model;

import java.util.ArrayList;
import java.util.List;

public class Employee {
	
	private int id;
	private String name;
	private String location;
	
	public Employee() {
		
	}

	public Employee(int id, String name, String location) {
		this.id = id;
		this.name = name;
		this.location = location;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	public static List<Employee> getAllEmployees() {
		List<Employee> employeeList = new ArrayList<>();
		
		employeeList.add(new Employee(1, "Hasitha", "Kiribathgoda"));
		employeeList.add(new Employee(2, "Ruzaik", "Kurunegala"));
		employeeList.add(new Employee(3, "Razmeen", "Kandy"));
		employeeList.add(new Employee(4, "Alfar", "Dehiwala"));
		employeeList.add(new Employee(5, "Ishan", "Colombo"));
		
		return employeeList;
	}
}