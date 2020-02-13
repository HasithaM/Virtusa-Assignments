package com.hasitha.springboot.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String location;

	@OneToOne(cascade = CascadeType.ALL)
	private Address address;

	@OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
	private List<Telephone> telephonesList;

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name = "employeeProjects", joinColumns = @JoinColumn(name = "employeeid", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "projectid", referencedColumnName = "id"))
	private List<Project> projects;

	Allocation[] allocations;

	public Employee(Integer id, String name, String location) {
		this.id = id;
		this.name = name;
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