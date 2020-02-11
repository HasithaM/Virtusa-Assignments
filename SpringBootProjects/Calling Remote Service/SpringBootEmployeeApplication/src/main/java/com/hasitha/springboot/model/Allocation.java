package com.hasitha.springboot.model;

public class Allocation {
	
	private Integer id;
	private Integer employeeID;
	private String startDate;
	private String endDate;
	private String projectCode;
	
	public Allocation() {
		
	}
	
	public Allocation(Integer id, Integer employeeID, String startDate, String endDate, String projectCode) {
		this.id = id;
		this.employeeID = employeeID;
		this.startDate = startDate;
		this.endDate = endDate;
		this.projectCode = projectCode;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public Integer getEmployeeID() {
		return employeeID;
	}
	
	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}
	
	public String getStartDate() {
		return startDate;
	}
	
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	
	public String getEndDate() {
		return endDate;
	}
	
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
	public String getProjectCode() {
		return projectCode;
	}
	
	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}
}