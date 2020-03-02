package com.hasitha.springboot.model;

import javax.persistence.*;
import java.io.Serializable;

import lombok.Data;

@Entity
@Table(name = "permission")
@Data
public class Permission implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@Column(name = "name")
	private String name;
}