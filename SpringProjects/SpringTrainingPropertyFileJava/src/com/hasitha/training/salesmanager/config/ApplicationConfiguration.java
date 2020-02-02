package com.hasitha.training.salesmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Scope;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

import com.hasitha.training.salesmanager.service.EmployeeService;
import com.hasitha.training.salesmanager.service.EmployeeServiceImpl;

@Configuration
@ComponentScan("com.hasitha")
@PropertySource("application.properties")
public class ApplicationConfiguration {
	
	@Bean(name = "employeeService")
	@Scope("prototype")
	public EmployeeService getEmployeeService() {
		EmployeeServiceImpl employeeServiceImpl = new EmployeeServiceImpl();
		// employeeServiceImpl.setEmployeeRepository(getEmployeeRepository());
		
		return employeeServiceImpl;
	}
	
	@Bean
	public static PropertySourcesPlaceholderConfigurer getPropertySourcesPlaceholderConfigurer() {
		return new PropertySourcesPlaceholderConfigurer();
	}
	
	/*@Bean(name = "employeeRepository")
	public EmployeeRepository getEmployeeRepository() {
		return new HibernateEmployeeRepositoryImpl();
	}*/
}