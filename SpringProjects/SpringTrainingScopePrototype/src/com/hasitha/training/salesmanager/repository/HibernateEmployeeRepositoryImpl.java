package com.hasitha.training.salesmanager.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.hasitha.training.salesmanager.model.Employee;

@Repository("anyName")
public class HibernateEmployeeRepositoryImpl implements EmployeeRepository {

	@Override
	public List<Employee> getAllEmployees() {
		List<Employee> employees = new ArrayList<>();

		Employee employee = new Employee();
		employee.setEmployeeName("Hasitha");
		employee.setEmployeeLocation("Kiribathgoda");
		employees.add(employee);

		return employees;
	}
}