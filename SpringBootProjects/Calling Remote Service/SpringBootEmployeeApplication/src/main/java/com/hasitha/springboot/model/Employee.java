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

@Entity
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
	@JoinTable(name = "employeeProjects", 
	joinColumns = @JoinColumn(name = "employeeid", referencedColumnName = "id"), 
	inverseJoinColumns = @JoinColumn(name = "projectid", referencedColumnName = "id"))
	private List<Project> projects;
	
	Allocation[] allocations;

	public Employee() {
		
	}

	public Employee(Integer id, String name, String location) {
		this.id = id;
		this.name = name;
		this.location = location;
	}

	public Employee(Integer id, String name, String location, Address address, List<Telephone> telephonesList,
			List<Project> projects) {
		this.id = id;
		this.name = name;
		this.location = location;
		this.address = address;
		this.telephonesList = telephonesList;
		this.projects = projects;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Telephone> getTelephonesList() {
		return telephonesList;
	}

	public void setTelephonesList(List<Telephone> telephonesList) {
		this.telephonesList = telephonesList;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public Allocation[] getAllocations() {
		return allocations;
	}

	public void setAllocations(Allocation[] allocations) {
		this.allocations = allocations;
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