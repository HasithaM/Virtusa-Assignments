package com.hasitha.springboot.hystrix;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.hasitha.springboot.model.Allocation;
import com.hasitha.springboot.model.Employee;
import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;

public class AllocationCommand extends HystrixCommand<Allocation[]> {

	Employee employee;
	HttpHeaders httpHeaders;
	RestTemplate restTemplate;

	public AllocationCommand(Employee employee, HttpHeaders httpHeaders,
			RestTemplate restTemplate) {
		super(HystrixCommandGroupKey.Factory.asKey("default"));
		this.employee = employee;
		this.httpHeaders = httpHeaders;
		this.restTemplate = restTemplate;
	}

	@Override
	protected Allocation[] run() throws Exception {
		HttpEntity<String> httpEntity = new HttpEntity<String>("", httpHeaders);

		ResponseEntity<Allocation[]> responseEntity = restTemplate.exchange(
				"http://allocationservice/allocation/find/" + employee.getId(), HttpMethod.GET, httpEntity,
				Allocation[].class);

		return responseEntity.getBody();
	}

	@Override
	protected Allocation[] getFallback() {
		return new Allocation[1];
	}
}