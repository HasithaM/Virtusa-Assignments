package com.hasitha.training.salesmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.hasitha.training.salesmanager.service.EmployeeService;
import com.hasitha.training.salesmanager.service.EmployeeServiceImpl;

@Configuration
@ComponentScan("com.hasitha")
public class ApplicationConfiguration {
	
	@Bean(name = "employeeService")
	@Scope("singleton")
	public EmployeeService getEmployeeService() {
		EmployeeServiceImpl employeeServiceImpl = new EmployeeServiceImpl();
		// employeeServiceImpl.setEmployeeRepository(getEmployeeRepository());
		
		return employeeServiceImpl;
	}
	
	/*@Bean(name = "employeeRepository")
	public EmployeeRepository getEmployeeRepository() {
		return new HibernateEmployeeRepositoryImpl();
	}*/
}